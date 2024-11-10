import { useDispatch } from "react-redux";
import { setSearch } from "../redux/SearchSlice";

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <nav className="flex flex-col lg:flex-row justify-between items-center py-2 px-10">
      <div className="flex flex-col mb-4 lg:mb-0">
        <h2 className="text-gray-1000 text-sm mb-2 font-semibold">
          {new Date().toUTCString().slice(0, 16)}
        </h2>
        <h3 className="text-xl font-bold text-gray-800">ZomatoColony</h3>
      </div>
      <div>
        <input
          onChange={(e) => dispatch(setSearch(e.target.value))}
          type="search"
          name="search"
          autoComplete="off"
          placeholder="Search here"
          className="px-4 py-1 border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
    </nav>
  );
};

export default Navbar;
