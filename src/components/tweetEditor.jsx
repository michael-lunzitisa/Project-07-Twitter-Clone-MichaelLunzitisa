import Avatar from "./Avatar";
import TweetEditorForm from "./TweetEditorForm";
import avataProfile from "../images/profile-photo.png";

const TweetEditor = () => {
    return (
        <div className="tweet-editor">
            <Avatar source={avataProfile} />
            <TweetEditorForm />
        </div>
    );
};

export default TweetEditor;
