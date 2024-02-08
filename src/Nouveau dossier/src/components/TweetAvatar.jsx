import avatar from "./../images/profile-photo.png";

const TweetAvatar = () => {
    return (
        <div className="avatar">
            <img src={avatar} alt="profile-photo" />
        </div>
    );
};

export default TweetAvatar;
