import { useState } from "react";
import { IoAdd } from "react-icons/io5";
import { FiMinus } from "react-icons/fi";
import { RiDeleteBin4Fill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../redux/CartSlice";
import { incrementQuantity, decrementQuantity } from "../redux/CartSlice";
import toast, { Toaster } from "react-hot-toast";
import { MdOutlineDeleteForever } from "react-icons/md";

const CartItem = ({ price, name, img, id, quantity }) => {
  const dispatch = useDispatch();

  const notify = () => {
    toast(`${name} removed`, {
      icon: <MdOutlineDeleteForever className="text-red-500 text-2xl" />,
      style: {
        style: {
          backgroundColor: "white",
          fontWeight: "normal",
          fontSize: "3px",
        },
      },
    });
  };

  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="flex gap-4 items-center shadow-md rounded-lg bg-white relative mt-2">
      <div>
        <img src={img} alt={name} className="w-[80px] h-[80px] " />
      </div>

      <div className="flex flex-col flex-1">
        <div className="flex justify-between items-center mx-2">
          <h2 className="font-bold text-gray-800">
            {name.slice(0, 8)}
            {name.length > 8 ? "..." : ""}
          </h2>
          <div
            onMouseOver={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            className="relative"
          >
            <RiDeleteBin4Fill
              onClick={() => {
                dispatch(removeFromCart({ id }));
                notify();
              }}
              className="cursor-pointer text-red-600 hover:text-red-800 transition-all duration-300"
            />
            {showTooltip && (
              <span className="absolute top-6 -right-10 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded-md py-1 px-2 shadow-md">
                Remove
              </span>
            )}
          </div>
        </div>
        <div className="flex justify-between items-center text-center mx-2">
          <span className="text-green-500 font-bold pt-2 text-xl">
            ₹{price}
          </span>
          <div className="flex items-center gap-2 mt-2">
            <IoAdd
              onClick={() => dispatch(incrementQuantity({ id }))}
              className="cursor-pointer border-2 border-gray-600 text-xl rounded-full hover:border-red-600 hover:text-black transition-all duration-500 active:scale-110 active:bg-red-600 active:text-black"
            />
            <span className="font-semibold text-gray-700">{quantity}</span>
            <FiMinus
              onClick={() => dispatch(decrementQuantity({ id }))}
              className=" cursor-pointer border-2 border-gray-600 text-xl rounded-full hover:border-red-600 hover:text-black transition-all duration-500 active:scale-110 active:bg-red-600 active:text-black"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
