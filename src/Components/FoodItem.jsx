import Foodcart from "./Foodcart";
import FoodData from "../data/FoodData";
import { useSelector } from "react-redux";

const FoodItem = () => {
  const selectedCategory = useSelector((state) => state.category.category);
  const search = useSelector((state) => state.search.search);

  return (
    <div className="flex flex-col lg:flex-row flex-wrap gap-3 mx-5 mt-5">
      {FoodData.filter((food) => {
        if (selectedCategory === "all") {
          return food.name.toLowerCase().includes(search.toLowerCase());
        } else {
          return (
            selectedCategory === food.category &&
            food.name.toLowerCase().includes(search.toLowerCase())
          );
        }
      }).map((food) => (
        <Foodcart key={food.id} {...food} />
      ))}
    </div>
  );
};

export default FoodItem;
