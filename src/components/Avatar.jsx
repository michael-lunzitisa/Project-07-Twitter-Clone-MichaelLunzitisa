import avatar from "./../images/profile-photo.png";

const Avatar = () => {
    return (
        <div className="avatar">
            <img src={avatar} alt="image-profile-photo" />
        </div>
    );
};

export default Avatar;
