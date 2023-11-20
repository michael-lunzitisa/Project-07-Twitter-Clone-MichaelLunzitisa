import PageTitle from "./PageTitle";
import TopTweets from "./topTweets";

const Header = () => {
    return (
        <div className="header">
            <PageTitle />
            <TopTweets />
        </div>
    );
};

export default Header;
