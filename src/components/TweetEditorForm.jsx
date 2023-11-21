import TweetEditorButtons from "./TweetEditorButtons";
import TweetEditorInput from "./TweetEditorInput";
const TweetEditorForm = () => {
    return (
        <div className="tweet-editor-form">
            <TweetEditorInput />
            <TweetEditorButtons />
        </div>
    );
};

export default TweetEditorForm;
