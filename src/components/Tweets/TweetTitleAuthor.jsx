import { mappedContexte } from "./Tweet";
import { useContext } from "react";

const TweetTitleAuthor = () => {
    const tweet = useContext(mappedContexte);
    return <span className="tweet-title-author">{tweet.name}</span>;
};

export default TweetTitleAuthor;
