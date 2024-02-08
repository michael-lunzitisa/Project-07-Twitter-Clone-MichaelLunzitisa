import Header from "../components/Header/Header";
import Tweet from "./tweet";
import TweetEditor from "./tweetEditor";

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
