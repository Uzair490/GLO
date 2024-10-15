import PropTypes from "prop-types";
import SearchIcon from "../../../assets/images/navbar/searchIcon.svg";

export default function SearchBar({ placeholder, width }) {
  return (
    <div
      className={`relative bg-[#FDFBFF] w-full border border-[#E0E5F2] rounded-xl h-[48px] flex items-center`}
      style={{ maxWidth: width ? width : "430px" }}
    >
      <input
        placeholder={placeholder || "Search here"}
        aria-label="input-search"
        className="text-[#969BA0] w-full pr-10 pl-3 h-full focus:outline-none rounded-xl"
      />
      <div className="h-full absolute pointer-events-none flex items-center justify-center outline-none top-0 right-3">
        <img src={SearchIcon} alt="" />
      </div>
    </div>
  );
}

SearchBar.propTypes = {
  placeholder: PropTypes.string,
  width: PropTypes.string,
};

SearchBar.defaultProps = {
  placeholder: "Search here",
  width: "430px",
};
