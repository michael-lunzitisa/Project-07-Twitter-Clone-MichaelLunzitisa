import Badge from "../Badge";
import TweetTitleAuthor from "./TweetTitleAuthor";
import TweetTitleDetails from "./TweetTitleDetails";

const TweetTitle = () => {
    return (
        <div className="flex flex-row gap-2 text-lg">
            <TweetTitleAuthor />
            <Badge />
            <TweetTitleDetails />
            {/* <TweetTitleDetails value="." />
            <TweetTitleDetails /> */}
        </div>
    );
};

export default TweetTitle;
