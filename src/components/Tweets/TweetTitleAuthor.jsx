import { mappedContexte } from "./Tweet";
import { useContext } from "react";

const TweetTitleAuthor = () => {
    const { author } = useContext(mappedContexte);
    return <span className="tweet-title-author">{author}</span>;
};

export default TweetTitleAuthor;
