import Search from "../../components/trends/search";
import TrendsCard from "../../components/trends/trendsCard";
import Follow from "../../components/trends/follow";
import Policy from "../../components/trends/policy";
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
