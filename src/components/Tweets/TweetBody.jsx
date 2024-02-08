import TweetTitle from "./TweetTitle";
import TweetText from "./TweetText";
import TweetImage from "./TweetImage";

const TweetBody = ({ author, pseudo, date, text, source }) => {
    return (
        <div className="tweet-body">
            <TweetTitle author={author} pseudo={pseudo} date={date} />
            <TweetText text={text} />
            <TweetImage source={source} />
        </div>
    );
};

export default TweetBody;
