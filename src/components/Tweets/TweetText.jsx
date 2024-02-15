import { useContext } from "react";
import { mappedContexte } from "./Tweet";
const TweetText = () => {
    const { text } = useContext(mappedContexte);
    return <span className="tweet-text">{text}</span>;
};

export default TweetText;
