import Badge from "../Badge";
import TweetTitleAuthor from "./TweetTitleAuthor";
import TweetTitleDetails from "./TweetTitleDetails";

const TweetTitle = ({ author, pseudo, date }) => {
    return (
        <div className="tweet-title">
            <TweetTitleAuthor author={author} />
            <Badge />
            <TweetTitleDetails value={pseudo} />
            <TweetTitleDetails value="." />
            <TweetTitleDetails value={date} />
        </div>
    );
};

export default TweetTitle;
