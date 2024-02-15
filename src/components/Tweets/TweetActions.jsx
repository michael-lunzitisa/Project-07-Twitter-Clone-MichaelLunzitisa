import { useState } from "react";

import ReplyIcon from "../../images/Reply.svg";
import RetweetIcon from "../../images/Retweet.svg";
import likesIcon from "../../images/React.svg";
import TweetAction from "./TweetAction";
import RepliesIcon from "../../images/Tweet-Replies.svg";
import { useContext } from "react";
import { mappedContexte } from "./Tweet";

const TweetActions = ({ tweet }) => {
    const { likes, comments, retweet, share } = useContext(mappedContexte);
    const [like, setLikes] = useState(likes);

    const handleLikeClick = () => {
        console.log(likes);
        if (!like.liked) {
            setLikes((currentLikes) => {
                return { nb: currentLikes.nb + 1, liked: true };
            });
        } else {
            setLikes((currentLikes) => {
                return { nb: currentLikes.nb - 1, liked: false };
            });
        }
    };
    return (
        <div className="tweet-actions ">
            <TweetAction icon={ReplyIcon} reactions={comments} />
            <TweetAction icon={RetweetIcon} reactions={retweet} />
            <TweetAction
                icon={likesIcon}
                reactions={likes}
                handleClick={handleLikeClick}
                liked={true}
            />
            <TweetAction icon={RepliesIcon} reactions={share} />
        </div>
    );
};

export default TweetActions;
