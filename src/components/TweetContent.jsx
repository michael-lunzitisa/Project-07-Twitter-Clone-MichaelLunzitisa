import TweetBody from "./TweetBody";
import TweetActions from "./TweetActions";

const TweetContent = ({ tweet }) => {
  return (
    <div className="tweet-content">
      <TweetBody
        author={tweet.author}
        pseudo={tweet.pseudo}
        date={tweet.date}
        text={tweet.text}
        source={tweet.source}
      />
      <TweetActions tweet={tweet} />
    </div>
  );
};

export default TweetContent;
