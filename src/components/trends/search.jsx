import search from "../../images/Search.svg";
const Search = () => {
    return (
        <div className="trends__search">
            <img src={search} alt="icon search" />
            <input placeholder="Search Twitter" type="text" />
        </div>
    );
};

export default Search;
