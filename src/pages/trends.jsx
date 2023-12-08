import Search from "../components/search";
import TrendsCard from "../components/trendsCard";
import Follow from "../components/follow";
import Policy from "../components/policy";
const Trends = () => {
    return ( 
        <div className="trends">
            <Search/>
            <TrendsCard/>
            <Follow/>
            <Policy/>
           
        </div>
     );
}
 
export default Trends;