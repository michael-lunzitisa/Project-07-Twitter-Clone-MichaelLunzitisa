import { useState } from "react";

import ReplyIcon from "../images/Reply.svg";
import RetweetIcon from "../images/Retweet.svg";
import likesIcon from "../images/React.svg";
import TweetAction from "../components/tweetAction";
import RepliesIcon from "../images/Tweet-Replies.svg";

const TweetActions = ({ tweet }) => {
    const [likes, setLikes] = useState(tweet.likes);

    const handleLikeClick = () => {
        console.log(likes);
        if (!likes.liked) {
            setLikes((currentLikes) => {
                return { nb: currentLikes.nb + 1, liked: true };
            });
            console.log(likes);
        } else {
            setLikes((currentLikes) => {
                return { nb: currentLikes.nb - 1, liked: false };
            });
        }
    };
    return (
        <div className="tweet-actions ">
            <TweetAction icon={ReplyIcon} reactions={tweet.comments} />
            <TweetAction icon={RetweetIcon} reactions={tweet.retweet} />
            <TweetAction
                icon={likesIcon}
                reactions={likes}
                handleClick={handleLikeClick}
                liked={true}
            />
            <TweetAction icon={RepliesIcon} reactions={tweet.share} />
        </div>
    );
};

export default TweetActions;
