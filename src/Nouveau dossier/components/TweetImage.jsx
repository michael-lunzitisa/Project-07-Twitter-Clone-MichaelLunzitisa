const TweetImage = ({ source }) => {
    if (source != "") {
        return (
            <div className="tweet-image">
                <img src={source} alt="image tweet" />
            </div>
        );
    }
};

export default TweetImage;
