import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { MdShoppingCart } from "react-icons/md";

import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [activeCart, setActiveCart] = useState(false);
  const navigate = useNavigate();
  const cartData = useSelector((state) => state.cart.cartItems);
  console.log(cartData);

  const totalAmount = Array.isArray(cartData)
    ? cartData.reduce((acc, item) => acc + item.price * item.quantity, 0)
    : 0;

  const totalQty = cartData.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      <div
        className={`${
          activeCart
            ? "translate-x-0"
            : "translate-x-full transition-all duration-500"
        } fixed right-0 top-0 w-full lg:w-[18rem] p-5 h-full bg-white`}
      >
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-gray-800">My Order</span>
          <AiOutlineClose
            onClick={() => setActiveCart(!activeCart)}
            className="font-bold border-2 border-gray-800 text-gray-700 p-1 text-2xl rounded-lg cursor-pointer hover:border-red-600 hover:text-red-700"
          />
        </div>

        <div className="overflow-y-auto max-h-[430px]">
          {cartData && cartData.length > 0 ? (
            cartData.map((item) => <CartItem key={item.id} {...item} />)
          ) : (
            <span>Your Cart is empty</span>
          )}
        </div>

        <div className="absolute left-5 bottom-2 w-full">
          <h3 className="font-bold">Items: {totalQty}</h3>
          <h3 className="font-bold">Total Amount: ₹{totalAmount}</h3>
          <hr className="border-t border-gray-400 my-2" />

          <button
            onClick={() => totalQty > 0 && navigate("/success")}
            className="bg-green-500 font-semibold p-1 rounded-lg outline-none text-white w-[18rem] active:scale-95 transition transform duration-300"
          >
            CheckOut
          </button>
        </div>
      </div>

      {!activeCart && (
        <div>
          <MdShoppingCart
            onClick={() => setActiveCart(!activeCart)}
            className={`fixed bottom-4 right-2 rounded-full bg-white shadow-md text-7xl p-3 ${
              totalQty > 0 && "animate-bounce transition-all duration-500"
            }`}
          />
        </div>
      )}
    </>
  );
};

export default Cart;
