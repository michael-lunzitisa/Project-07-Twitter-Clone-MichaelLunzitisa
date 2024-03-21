import { useContext } from "react";
import { mappedContexte } from "./Tweet";

const TweetTitleDetails = () => {
    const tweet = useContext(mappedContexte);
    const tweetDate = tweet && tweet.createdAt ? tweet.createdAt : null;

    const formatTweetDate = (dateStr) => {
        if (!dateStr) return null;

        const date = new Date(dateStr);
        const options = {
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            hour12: false,
        };

        return date.toLocaleDateString("fr-FR", options);
    };

    const formattedDate = tweetDate ? formatTweetDate(tweetDate) : null;
    return (
        <span className="tweet-title-details">
            {tweet.handle} {formattedDate}
        </span>
    );
};

export default TweetTitleDetails;
