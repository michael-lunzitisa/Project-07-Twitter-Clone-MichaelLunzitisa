import TweetTitle from "./TweetTitle";
import TweetText from "./TweetText";
import TweetImage from "./TweetImage";

const TweetBody = () => {
    return (
        <div className="tweet-body">
            <TweetTitle />
            <TweetText />
            <TweetImage />
        </div>
    );
};

export default TweetBody;
