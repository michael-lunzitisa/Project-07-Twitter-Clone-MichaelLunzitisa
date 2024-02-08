import TweetTitle from "./TweetTitle";
import TweetText from "./TweetText";
import TweetImage from "./TweetImage";

const TweetBody = ({ author, pseudo, date, text }) => {
    return (
        <div className="tweet-body">
            <TweetTitle author={author} pseudo={pseudo} date={date} />
            <TweetText text={text} />
            <TweetImage />
        </div>
    );
};

export default TweetBody;
