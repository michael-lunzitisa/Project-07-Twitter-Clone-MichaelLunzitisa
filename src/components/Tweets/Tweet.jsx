import TweetAvatar from "./TweetAvatar";
import TweetContent from "./TweetContent";
import data from "../../datas/data";
import { Link } from "react-router-dom";

const Tweet = () => {
    return (
        <>
            {data.map((tweet) => (
                <div className="tweet" key={tweet.id}>
                    <Link to={`/${tweet.author}`}>
                        <TweetAvatar sourceAvatar={tweet.avatar} />
                    </Link>
                    <TweetContent tweet={tweet} />
                </div>
            ))}
        </>
    );
};

export default Tweet;
