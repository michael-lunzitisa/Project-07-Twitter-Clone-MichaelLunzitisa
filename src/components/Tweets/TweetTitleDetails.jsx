import { useContext } from "react";
import { mappedContexte } from "./Tweet";

const TweetTitleDetails = () => {
    const tweet = useContext(mappedContexte);
    return <span className="tweet-title-details">{tweet.handle}</span>;
};

export default TweetTitleDetails;
