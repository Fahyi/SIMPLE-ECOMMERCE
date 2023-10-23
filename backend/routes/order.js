const express = require("express");
const crypto = require("crypto");
const midtransClient = require("midtrans-client");
const Invoice = require("../schemas/invoice");
const route = express.Router();
const merchantKey = "SB-Mid-server-BL8pldUpP97F13nvcDDzVadG";

route.post("/midtrans-callback", async (req, res) => {
  try {
    let apiClient = new midtransClient.Snap({
      isProduction: false,
      serverKey: "SB-Mid-server-BL8pldUpP97F13nvcDDzVadG",
      clientKey: "SB-Mid-client-gvfdcMAt8oitlaTi",
    });

    apiClient.transaction
      .notification(req.body)
      .then(async (statusResponse) => {
        let irisSignature = crypto
          .createHash("sha512")
          .update(statusResponse + merchantKey)
          .digest("hex");

        console.log({ irisSignature, statusResponse });
        if (statusResponse.transaction_status == "settlement") {
          await Invoice.findOneAndUpdate(
            { _id: statusResponse.order_id },
            { status: "paid" }
          );
        }
        return;
      })
      .catch((err) => console.log(err));
  } catch (err) {
    console.log(err);
  }
});

route.get("/history", async (req, res) => {
  try {
    const history = await Invoice.find({});
    res.status(200).json(history);
  } catch (err) {
    console.log(err);
  }
});

route.post("/payment/checkout", async (req, res) => {
  try {
    const { total, item, costumerDetail } = req.body;

    let snap = new midtransClient.Snap({
      isProduction: false,
      serverKey: "SB-Mid-server-BL8pldUpP97F13nvcDDzVadG",
      clientKey: "SB-Mid-client-gvfdcMAt8oitlaTi",
    });

    const order = await Invoice.create({
      username: costumerDetail.username,
      item,
      total_price: total,
    }).catch((err) => console.log(err));

    let parameter = {
      transaction_details: {
        order_id: order._id,
        gross_amount: total,
      },
      customer_details: {
        first_name: costumerDetail.username,
        phone: costumerDetail.phoneNumber,
      },
      item_details: item,
      enabled_payments: [
        "credit_card",
        "mandiri_clickpay",
        "cimb_clicks",
        "bca_klikbca",
        "bca_klikpay",
        "bri_epay",
        "echannel",
        "indosat_dompetku",
        "mandiri_ecash",
        "permata_va",
        "bca_va",
        "bni_va",
        "other_va",
        "gopay",
        "kioson",
        "indomaret",
        "gci",
        "danamon_online",
      ],
      credit_card: {
        secure: true,
        bank: "bca",
        installment: {
          required: false,
          terms: {
            bni: [3, 6, 12],
            mandiri: [3, 6, 12],
            cimb: [3],
            bca: [3, 6, 12],
            offline: [6, 12],
          },
        },
        whitelist_bins: ["48111111", "41111111"],
      },
      bca_va: {
        va_number: "12345678911",
        free_text: {
          inquiry: [
            {
              en: "text in English",
              id: "text in Bahasa Indonesia",
            },
          ],
          payment: [
            {
              en: "text in English",
              id: "text in Bahasa Indonesia",
            },
          ],
        },
      },
      bni_va: {
        va_number: "12345678",
      },
      permata_va: {
        va_number: "1234567890",
        recipient_name: "SUDARSONO",
      },
      callbacks: {
        finish: "https://demo.midtrans.com",
      },
      expiry: {
        unit: "minute",
        duration: 60,
      },
      custom_field1: "custom field 1 content",
      custom_field2: "custom field 2 content",
      custom_field3: "custom field 3 content",
    };

    // create transaction
    snap
      .createTransaction(parameter)
      .then((transaction) => {
        let transactionRedirectUrl = transaction.redirect_url;
        res
          .status(200)
          .json({ data: transactionRedirectUrl, transcation_id: order._id });
      })
      .catch((e) => console.log("Error occured:", e.message));
  } catch (err) {
    console.log(err);
  }
});

route.get("/transaction/:id", async (req, res) => {
  try {
    const productInformation = await Invoice.findOne({ _id: req.params.id });
    res.status(200).json({ data: productInformation });
  } catch (err) {
    res.status(400).json({ err });
  }
});

module.exports = route;
