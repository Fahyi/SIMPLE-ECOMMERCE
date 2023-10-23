import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Spinner } from "flowbite-react";

export const Invoice = ({
  showModal,
  setShowModal,
  cart,
  setCostumerDetail,
  costumerDetail,
}) => {
  const baseUrl = "http://localhost:5000";
  const [isRotate, setIsRotate] = useState(false);
  const navigate = useNavigate();
  const Payment = async () => {
    setIsRotate(true);
    console.log(costumerDetail);
    await axios({
      method: "post",
      url: baseUrl + "/api/payment/checkout",
      headers: {},
      data: {
        costumerDetail,
        item: cart,
        total: totalPrice,
      },
    })
      .then(({ data }) => {
        navigate(`/transaksi/${data.transcation_id}`);
        window.open(data.data);
        localStorage.removeItem("item");
      })
      .catch((err) => console.log(err));
  };

  const informationChange = (e) => {
    console.log(e.target.name);
    setCostumerDetail((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  let totalPrice = cart.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0
  );
  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Detail Invoice</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto m-y">
                  <div className="">
                    <input
                      className="my-2"
                      id="username"
                      name="username"
                      type="text"
                      onChange={informationChange}
                      placeholder="Username"
                    />
                    <input
                      className="mb-5"
                      id="phoneNumber"
                      name="phoneNumber"
                      type="text"
                      onChange={informationChange}
                      placeholder="Phone Number"
                    />
                  </div>
                  <p>Produk:</p>
                  {cart.map((a) => (
                    <ul className="flex justify-around">
                      <li>{a.name}</li>
                      <li>Rp{a.price}</li>
                      <li>{a.quantity}x</li>
                    </ul>
                  ))}
                  <p className=" my-5">Total: {totalPrice}</p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className={`bg-emerald-500 ${
                      isRotate && "cursor-not-allowed"
                    } text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150`}
                    type="button"
                    onClick={Payment}
                  >
                    CheckOut
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};
