import { useState } from "react";

import ReplyIcon from "../../images/Reply.svg";
import RetweetIcon from "../../images/Retweet.svg";
import likesIcon from "../../images/React.svg";
import TweetAction from "./TweetAction";
import RepliesIcon from "../../images/Tweet-Replies.svg";
import { useContext } from "react";
import { mappedContexte } from "./Tweet";

const TweetActions = () => {
    const { favoriteCount, retweetCount, repliesCount } =
        useContext(mappedContexte);
    const [likeCount, setLikeCount] = useState(favoriteCount);
    const [isLiked, setIsLiked] = useState(false);

    const handleLikeClick = () => {
        if (!isLiked) {
            setLikeCount((currentLinke) => currentLinke + 1);
            setIsLiked(true);
        } else {
            setLikeCount((dislikes) => dislikes - 1);
            setIsLiked(false);
        }
    };

    return (
        <div className="tweet-actions ">
            <TweetAction icon={ReplyIcon} reactions={repliesCount} />
            <TweetAction icon={RetweetIcon} reactions={retweetCount} />
            <TweetAction
                icon={likesIcon}
                reactions={likeCount}
                handleClick={handleLikeClick}
            />
            <TweetAction icon={RepliesIcon} reactions="" />
        </div>
    );
};

export default TweetActions;
