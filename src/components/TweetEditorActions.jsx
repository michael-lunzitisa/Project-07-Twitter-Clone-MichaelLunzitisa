import media from "./../images/Media.svg";
import gif from "./../images/Gif.svg";
import poll from "./../images/Poll.svg";
import emoji from "./../images/Emoji.svg";
import schedule from "./../images/Schedule.svg";
const TweetEditorActions = () => {
    return (
        <div className="tweet-editor-actions">
            <img src={media} alt="media" />
            <img src={gif} alt="gif" />
            <img src={poll} alt="poll" />
            <img src={emoji} alt="emoji" />
            <img src={schedule} alt="schedule" />
        </div>
    );
};

export default TweetEditorActions;
