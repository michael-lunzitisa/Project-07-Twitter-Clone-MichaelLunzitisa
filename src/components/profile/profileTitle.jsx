import arrawBack from "../../images/arrow-back.svg";
import user from "../../datas/user";
const ProfileTitle = () => {
    return (
        <div className="profile__title">
            <div className="arraw__back">
                <img src={arrawBack} alt="icon arraw-back" />
            </div>
            <div>
                <h2>{user.name}</h2>
                <p className="trends__text__small">{user.post} posts</p>
            </div>
        </div>
    );
};

export default ProfileTitle;
