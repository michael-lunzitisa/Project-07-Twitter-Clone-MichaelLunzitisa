import reply from "./../images/Reply.svg";
import retweet from "./../images/Retweet.svg";
import favorite from "./../images/React.svg";
import tweetReplies from "./../images/Tweet-Replies.svg";
const TweetAction = ({
    valueReply,
    valueRetweet,
    valueFavorite,
    valuereReolies,
}) => {
    return (
        <div className="tweet-actions">
            <div className="tweet-action">
                <img src={reply} alt="image-reply" />
                {valueReply}
            </div>
            <div className="tweet-action">
                <img src={retweet} alt="image-retweet" />
                {valueRetweet}
            </div>
            <div className="tweet-action">
                <img src={favorite} alt="image-favorite" />
                {valueFavorite}
            </div>
            <div className="tweet-action">
                <img src={tweetReplies} alt="image-tweetReplies" />
                {valuereReolies}
            </div>
        </div>
    );
};

export default TweetAction;
