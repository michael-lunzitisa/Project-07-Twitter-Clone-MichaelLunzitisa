import Header from "../components/Header/Header";
import Tweet from "../components/Tweets/Tweet";
import TweetEditor from "../components/TweetEditor/TweetEditor";

const Timeline = () => {
    return (
        <div className="timeline">
            <Header />
            <TweetEditor />
            <Tweet />
        </div>
    );
};

export default Timeline;
