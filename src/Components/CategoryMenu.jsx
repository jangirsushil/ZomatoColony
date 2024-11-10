import { useEffect, useState } from "react";
import FoodData from "../data/FoodData";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/Category";

const CategoryMenu = () => {
  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.category.category);
  const searchItem = useSelector((state) => state.search.search);

  useEffect(() => {
    const totalCategories = Array.from(
      new Set(FoodData.map((food) => food.category))
    );
    setCategories(totalCategories);
  }, []);

  return (
    <div className="ml-7 mt-5">
      <div className="mb-3">
        <h3>Find the best food here</h3>
      </div>
      <div className="flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden">
        <button
          onClick={() => dispatch(setCategory("all"))}
          className={`${
            selectedCategory === "all"
              ? "bg-green-700 text-white"
              : "bg-gray-200"
          } px-2 py-1 rounded-lg hover:bg-green-500 hover:text-white transition-all duration-500`}
        >
          All
        </button>
        {categories.map((category, index) => (
          <button
            onClick={() => dispatch(setCategory(category))}
            key={index}
            className={`${
              selectedCategory === category
                ? "bg-green-700 text-white"
                : "bg-gray-200"
            } px-2 py-1 rounded-lg hover:bg-green-500 hover:text-white transition-all duration-500`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryMenu;
