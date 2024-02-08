const TweetAvatar = ({ sourceAvatar }) => {
    return (
        <div className="avatar">
            <img src={sourceAvatar} alt="profile-photo" />
        </div>
    );
};

export default TweetAvatar;
