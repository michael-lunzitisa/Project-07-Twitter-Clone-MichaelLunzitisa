import TweetAvatar from "./TweetAvatar";
import TweetContent from "./TweetContent";
import data from "../datas/data";
import { useNavigate } from "react-router-dom";

const Tweet = () => {
    const tweets = data.map((tweet) => ({
        id: tweet.id,
        ...tweet,
    }));

    return (
        <>
            {tweets.map((tweet) => (
                <div
                    className="tweet"
                    key={tweet.id}
                    onClick={() => navigateToProfile(tweet.id)}
                >
                    <TweetAvatar sourceAvatar={tweet.avatar} />
                    <TweetContent tweet={tweet} />
                </div>
            ))}
        </>
    );
};

const navigateToProfile = (id) => {
    useNavigate("/profiles/" + id);
};
// const Tweet = () => {
//     return (
//         <>
//             {data.map((tweet) => (
//                 <div className="tweet" key={tweet.id}>
//                     <TweetAvatar sourceAvatar={tweet.avatar} />
//                     <TweetContent tweet={tweet} />
//                 </div>
//             ))}
//         </>
//     );
// };

export default Tweet;
