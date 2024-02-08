const TweetImage = ({ source }) => {
    if (source) {
        return (
            <div className="tweet-image">
                <img src={source} alt="Image du tweet" />
            </div>
        );
    }
};

export default TweetImage;
