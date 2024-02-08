import TweetBody from "./TweetBody";
import TweetActions from "./TweetActions";

const TweetContent = ({ author, pseudo, date, text }) => {
    return (
        <div className="tweet-content">
            <TweetBody
                author={author}
                pseudo={pseudo}
                date={date}
                text={text}
            />
            <TweetActions />
        </div>
    );
};

export default TweetContent;
