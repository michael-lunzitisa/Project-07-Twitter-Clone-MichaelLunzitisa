import TweetAvatar from "./TweetAvatar";
import TweetContent from "./TweetContent";
// import data from "../../datas/data";
import { Link } from "react-router-dom";
import { dataContexte } from "../../context/DataContext";
import { useContext } from "react";
import { createContext } from "react";

export const mappedContexte = createContext();
const Tweet = () => {
    const { tweets } = useContext(dataContexte);

    return (
        <>
            {tweets.map((tweet) => (
                <div className="tweet" key={tweet.id}>
                    <mappedContexte.Provider value={tweet}>
                        <Link to={`/${tweet.author}`}>
                            <TweetAvatar />
                        </Link>
                        <TweetContent />
                    </mappedContexte.Provider>
                </div>
            ))}
        </>
    );
};

export default Tweet;
