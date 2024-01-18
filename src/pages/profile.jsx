import PageTitle from "../components/profile/profileTitle";
import UserImage from "../components/profile/userImage";
import UserAbpout from "../components/profile/userAbout";
import ProfileNav from "../components/profile/profileNav";
import UserDetails from "../components/profile/UserDetails";

const Profile = () => {
    return (
        <div className="timeline">
            <PageTitle />
            <UserImage />
            <UserDetails />
            <UserAbpout />
            <ProfileNav />
        </div>
    );
};

export default Profile;
