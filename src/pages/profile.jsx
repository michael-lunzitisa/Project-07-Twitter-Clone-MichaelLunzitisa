import PageTitle from "../components/profile/profileTitle";
import UserImage from "../components/profile/userImage";
import UserAbpout from "../components/profile/userAbout";
import ProfileNav from "../components/profile/profileNav";
import UserDetails from "../components/profile/UserDetails";

import { useParams } from "react";

const Profile = () => {
    // const { id } = useParams();
    // const user = data.users.find((user) => user.id === id);
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
