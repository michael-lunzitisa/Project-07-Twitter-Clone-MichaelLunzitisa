import { useContext } from "react";
import { mappedContexte } from "./Tweet";
const TweetAvatar = () => {
    const tweet = useContext(mappedContexte);

    return (
        <div className="avatar">
            <img src={tweet.profilePicture} alt="Imade du profile" />
        </div>
    );
};

export default TweetAvatar;
