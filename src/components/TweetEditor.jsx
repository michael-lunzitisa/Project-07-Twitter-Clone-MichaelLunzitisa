import TweetEditorForm from "./TweetEditorForm";
import TweetEditorInput from "./TweetEditorInput";
import Avatar from "./Avatar";
import TweetEditorButtons from "./TweetEditorButtons";
const TweetEditor = () => {
    return (
        <div className="tweet-editor">
            <Avatar />
            <TweetEditorInput />
            <TweetEditorForm />
            <TweetEditorButtons />
        </div>
    );
};

export default TweetEditor;
