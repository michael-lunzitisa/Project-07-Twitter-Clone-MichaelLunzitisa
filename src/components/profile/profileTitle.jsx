import arrawBack from "../../images/arrow-back.svg";

const ProfileTitle = ({ name, post }) => {
    return (
        <div className="profile__title">
            <div className="arraw__back">
                <img src={arrawBack} alt="icon arraw-back" />
            </div>
            <div>
                <h2>{name}</h2>
                <p className="trends__text__small">{post} posts</p>
            </div>
        </div>
    );
};

export default ProfileTitle;
