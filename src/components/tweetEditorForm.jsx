import TweetEditorInput from "../components/tweetEditorInput";
import TweetEditorButtons from "./tweetEditorButtons";

const TweetEditorForm = () => {
  return (
    <div className="tweet-editor-form">
      <TweetEditorInput />
      <TweetEditorButtons />
    </div>
  );
};

export default TweetEditorForm;
