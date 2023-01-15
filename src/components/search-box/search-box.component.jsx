import "../search-box/search-box.styles.css";

const SearchBox = ({className, placeholder, onChangeHandler}) => (
            <input 
        type="search"
        className={`search-box ${className}`}
        onChange={onChangeHandler}
        placeholder={ placeholder}
        >
        </input>
);



export default SearchBox;