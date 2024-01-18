import Avatar from "../components/avatar";
import TweetEditorForm from "../components/tweetEditorForm";
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
