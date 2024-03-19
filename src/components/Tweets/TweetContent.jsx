import TweetBody from "./TweetBody";
import TweetActions from "./TweetActions";

const TweetContent = () => {
    return (
        <div className="flex flex-col items-start justify-start gap-4 w-full">
            <TweetBody />
            <TweetActions />
        </div>
    );
};

export default TweetContent;
