import { GoFileMedia } from "react-icons/go";
import { MdOutlineGifBox } from "react-icons/md";
import { MdSchedule } from "react-icons/md";
const TweetEditorActions = () => {
    return (
        <div className="tweet-editor-actions">
            <GoFileMedia />
            <MdOutlineGifBox />
            <MdSchedule />

            <span>Icons</span>
        </div>
    );
};

export default TweetEditorActions;
