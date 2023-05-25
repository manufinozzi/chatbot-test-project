import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchBar = (props) => {
  return (
    <div className="flex items-center bg-gray-100 p-3 rounded-lg">
      <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#808080"}} />
      <input type="text" placeholder="Cerca..." onChange={props.filteredSearch} className="w-[90%] mx-2 px-2 bg-transparent placeholder:text-gray-500 !outline-none" />
    </div>
  );
}
 
export default SearchBar;