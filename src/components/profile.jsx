import ProfileTitle from "./profileTitle";
import UserImage from "./userImage";
import UserAbout from "./userAbout";
import ProfileNav from "./ProfileNav";

const Profile = () => {
    return (
        <div className="timeline">
            <ProfileTitle />
            <UserImage />
            <UserAbout />
            <ProfileNav />
        </div>
    );
};

export default Profile;
