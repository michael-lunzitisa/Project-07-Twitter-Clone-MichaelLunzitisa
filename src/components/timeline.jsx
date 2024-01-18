import Header from "./Header";
import Tweet from "./Tweet";
import TweetEditor from "./TweetEditor";

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
