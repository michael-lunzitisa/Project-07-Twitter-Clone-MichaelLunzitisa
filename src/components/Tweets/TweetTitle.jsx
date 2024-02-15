import Badge from "../Badge";
import TweetTitleAuthor from "./TweetTitleAuthor";
import TweetTitleDetails from "./TweetTitleDetails";

const TweetTitle = () => {
    return (
        <div className="tweet-title">
            <TweetTitleAuthor />
            <Badge />
            <TweetTitleDetails />
            <TweetTitleDetails value="." />
            <TweetTitleDetails />
        </div>
    );
};

export default TweetTitle;
