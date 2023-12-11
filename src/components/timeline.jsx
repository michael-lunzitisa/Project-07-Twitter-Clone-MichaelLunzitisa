import Header from "./header";
import TweetEditor from "./tweetEditor";
import Tweets from "./tweets";
import Profile from "./profile";

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
