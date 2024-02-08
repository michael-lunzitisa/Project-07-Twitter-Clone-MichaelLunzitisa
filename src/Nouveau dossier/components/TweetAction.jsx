import React from "react";

const TweetAction1 = ({ icon, reactions }) => {
    return (
        <div>
            <img src={icon} alt="image icône" />
            {reactions}
        </div>
    );
};

export default TweetAction1;
