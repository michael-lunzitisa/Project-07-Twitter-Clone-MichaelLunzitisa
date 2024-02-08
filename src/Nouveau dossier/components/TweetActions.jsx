import ReplyIcon from "../images/Reply.svg";
import RetweetIcon from "../images/Retweet.svg";
import likesIcon from "../images/React.svg";
import TweetAction from "./tweetAction";
import RepliesIcon from "../images/Tweet-Replies.svg";
import data from "../datas/data";
const TweetActions = () => {
    return (
        <div className="tweet-actions">
            <TweetAction icon={ReplyIcon} />
            <TweetAction icon={RetweetIcon} />
            <TweetAction icon={likesIcon} />
            <TweetAction icon={RepliesIcon} />
        </div>
    );
};

export default TweetActions;
