import TweetAvatar from "./TweetAvatar";
import TweetContent from "./TweetContent";
import data from "../datas/data";

const Tweet = () => {
    return (
        <>
            {data.map((tweet) => (
                <div className="tweet" key={tweet.id}>
                    <TweetAvatar sourceAvatar={tweet.avatar} />
                    <TweetContent
                        author={tweet.author}
                        pseudo={tweet.pseudo}
                        date={tweet.date}
                        text={tweet.text}
                        TweetImage={tweet.tweetImage}
                    />
                </div>
            ))}
        </>
    );
};

export default Tweet;
