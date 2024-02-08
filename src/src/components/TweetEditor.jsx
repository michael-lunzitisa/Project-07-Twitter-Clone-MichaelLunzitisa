import TweetAvatar from "./TweetAvatar";
import TweetEditorForm from "./TweetEditorForm";

const TweetEditor = () => {
    return (
        <div className="tweet-editor">
            <TweetAvatar />
            <TweetEditorForm />
        </div>
    );
};

export default TweetEditor;
