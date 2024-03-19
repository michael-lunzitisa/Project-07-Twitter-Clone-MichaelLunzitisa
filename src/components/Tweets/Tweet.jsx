import TweetAvatar from "./TweetAvatar";
import TweetContent from "./TweetContent";
import { Link } from "react-router-dom";
import { dataContexte } from "../../context/DataContext";
import { useContext } from "react";
import { createContext } from "react";

export const mappedContexte = createContext();
const Tweet = () => {
    const { data, loading } = useContext(dataContexte);

    return (
        <>
            {loading &&
                data.map((tweet) => (
                    <div className="tweet" key={tweet.id}>
                        <mappedContexte.Provider value={tweet}>
                            <Link to={`/${tweet.name}`}>
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
