import { useContext } from "react";
import { mappedContexte } from "./Tweet";
const TweetAvatar = () => {
    const { avatar } = useContext(mappedContexte);
    console.log(useContext(mappedContexte));
    return (
        <div className="avatar">
            <img src={avatar} alt="Imade du profile" />
        </div>
    );
};

export default TweetAvatar;
