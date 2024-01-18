import userProfile from "../../images/profile-photo.png";
import privateIcon from "../../images/Private.svg";
import moreIcon from "../../images/More-2.svg";
const ProfileSetting = () => {
    return (
        <div className="user-profil">
            <img src={userProfile} className="user-avatar" alt="icone" />
            <div className="user-detail">
                <h4>
                    Bradley Ortiz <img src={privateIcon} alt="icone" />
                </h4>
                <p className="small-text">@bradley_</p>
            </div>
            <img src={moreIcon} className="more-2" alt="icone" />
        </div>
    );
};

export default ProfileSetting;
