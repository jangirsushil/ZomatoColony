import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/CartSlice";
import toast, { Toaster } from "react-hot-toast";
import { FaCheckCircle } from "react-icons/fa";

const Foodcart = ({ name, img, price, desc, category, rating, id }) => {
  const dispatch = useDispatch();
  const notify = () =>
    toast(`${name} added to cart`, {
      icon: <FaCheckCircle className="text-green-500 font-bold ml-2 text-xl" />,
      style: {
        backgroundColor: "white",
        color: "#fff",
        fontSize: "12px",
        fontWeight: "normal",
        color: "black",
        padding: "2px",
        boxShadow: "5px",
      },
    });

  return (
    <div className="font-bold w-[280px] bg-white flex flex-col gap-2 rounded-lg shadow-lg">
      <img
        src={img}
        alt={name}
        className="w-full rounded-xl p-2 h-[230px] hover:scale-110 cursor-grab transition-transform duration-500 ease-in-out"
      />
      <div className="flex justify-between mx-3 relative">
        <h2 className="font-bold">
          {name.slice(0, 25)}
          {name.length > 25 ? "..." : ""}
        </h2>
        <span className="text-green-700">₹{price}</span>
      </div>
      <p className="mx-3 text-sm relative font-normal">
        {desc.slice(0, 30)}
        {desc.length > 30 ? "..." : ""}
      </p>
      <div className="flex justify-between items-center mx-3 pb-3">
        <span className="flex gap-1 items-center">
          <FaStar />
          {rating}
        </span>
        <button
          className="p-1 bg-green-500 text-white hover:bg-green-600 text-sm rounded-lg"
          aria-label={`Add ${name} to cart`}
          onClick={() => {
            dispatch(
              addToCart({
                id,
                name,
                img,
                price,
                desc,
                category,
                rating,
              })
            );
            notify();
          }}
        >
          Add to cart
        </button>
      </div>

      <Toaster />
    </div>
  );
};

export default Foodcart;
