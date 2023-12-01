import TweetEditorButtons from "./tweetEditorButtons";
import TweetEditorInput from "./tweetEditorInput";
const TweetEditorForm = () => {
    return (
        <div className="tweet-editor-form">
            <TweetEditorInput />
            <TweetEditorButtons />
        </div>
    );
};

export default TweetEditorForm;
