import { useContext } from "react";
import { mappedContexte } from "./Tweet";
const TweetImage = () => {
    const { tweetImage } = useContext(mappedContexte);

    if (tweetImage) {
        return (
            <div className="tweet-image">
                <img src={tweetImage} alt="Image du tweet" />
            </div>
        );
    }
};

export default TweetImage;
