import TweetBody from "./TweetBody";
import TweetActions from "./TweetActions";

const TweetContent = () => {
    return (
        <div className="tweet-content">
            <TweetBody />
            <TweetActions />
        </div>
    );
};

export default TweetContent;
