import Header from "./header";
import TweetEditor from "./tweetEditor";
import Tweets from "./tweets";

const Timeline = () => {
    return (
        <div className="timeline">
            <Header />
            <TweetEditor />
            <Tweets />
        </div>
    );
};

export default Timeline;
