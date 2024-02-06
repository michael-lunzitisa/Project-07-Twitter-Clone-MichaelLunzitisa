import PageTitle from "../components/pageTitle";
import TopTweet from "./TopTweet";

const Header = () => {
    return (
        <div className="header">
            <PageTitle />
            <TopTweet />
        </div>
    );
};

export default Header;
