import Cart from "./components/Cart";
import Transaction from "./components/Transaction";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Cart />} />
          <Route path="/transaksi/:id" element={<Transaction />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
