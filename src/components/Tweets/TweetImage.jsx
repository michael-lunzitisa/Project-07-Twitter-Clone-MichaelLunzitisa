import { useContext } from "react";
import { mappedContexte } from "./Tweet";
const TweetImage = () => {
    const { media } = useContext(mappedContexte);

    if (media != "") {
        return (
            <div className="tweet-image">
                <img src={media} alt="Image du tweet" />
            </div>
        );
    }
};

export default TweetImage;
