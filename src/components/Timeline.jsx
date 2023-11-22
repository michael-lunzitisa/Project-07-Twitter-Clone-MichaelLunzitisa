import Header from "./Header";
import TweetEditor from "./TweetEditor";
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
