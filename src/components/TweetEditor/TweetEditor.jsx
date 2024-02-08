import Avatar from "../TweetEditor/Avatar";
import TweetEditorForm from "../TweetEditor/TweetEditorForm";
import avataProfile from "../../images/profile-photo.png";

const TweetEditor = () => {
    return (
        <div className="tweet-editor">
            <Avatar source={avataProfile} />
            <TweetEditorForm />
        </div>
    );
};

export default TweetEditor;
