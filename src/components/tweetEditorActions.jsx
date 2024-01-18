import mediaIcon from "./../images/Media.svg";
import gifIcon from "./../images/Gif.svg";
import pollIcon from "./../images/Poll.svg";
import emojiIcon from "./../images/Emoji.svg";
import scheduleIcon from "./../images/Schedule.svg";

const TweetEditorActions = () => {
    return (
        <div className="tweet-editor-actions">
            <img src={mediaIcon} alt="media" />
            <img src={gifIcon} alt="gif" />
            <img src={pollIcon} alt="poll" />
            <img src={emojiIcon} alt="emoji" />
            <img src={scheduleIcon} alt="schedule" />
        </div>
    );
};

export default TweetEditorActions;
