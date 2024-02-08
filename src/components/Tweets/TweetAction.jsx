import React from "react";

const TweetAction = ({ icon, reactions, handleClick, liked = false }) => {
    // console.log(reactions, "Tweet action");
    return (
        <div className="tweet-action">
            <img
                src={icon}
                alt="image icône"
                onClick={handleClick}
                className="likes-icon"
            />
            <span>{liked ? reactions.nb : reactions}</span>
        </div>
    );
};

export default TweetAction;
