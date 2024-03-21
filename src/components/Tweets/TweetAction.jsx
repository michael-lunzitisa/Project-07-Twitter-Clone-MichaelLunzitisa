import React from "react";

const TweetAction = ({ icon, reactions, handleClick }) => {
    // console.log(reactions, "Tweet action");
    return (
        <div className="tweet-action">
            <img
                src={icon}
                alt="image icône"
                onClick={handleClick}
                className="likes-icon"
            />
            <span>{reactions}</span>
        </div>
    );
};

export default TweetAction;
