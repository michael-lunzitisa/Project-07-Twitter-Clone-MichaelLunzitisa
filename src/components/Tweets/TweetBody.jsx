import TweetTitle from "./TweetTitle";
import TweetText from "./TweetText";
import TweetImage from "./TweetImage";

const TweetBody = () => {
    return (
        <div className="flex flex-col gap-1/2">
            <TweetTitle />
            <TweetText />
            <TweetImage />
        </div>
    );
};

export default TweetBody;
