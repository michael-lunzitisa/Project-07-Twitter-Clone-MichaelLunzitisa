import Search from "./Search";
import TrendsCard from "./TrendsCard";
import Follow from "./follow";
import Policy from "./policy";
const Trends = () => {
    return (
        <div className="trends">
            <Search />
            <TrendsCard />
            <Follow />
            <Policy />
        </div>
    );
};

export default Trends;
