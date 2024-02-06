import xIcon from "../../images/BirdTwitter.svg";
import SidebarOption from ".././sidebar/SidebarOption";
import home from "../../images/Home.svg";
import explore from "../../images/Explore.svg";
import notifications from "../../images/Notifications.svg";
import message from "../../images/Message.svg";
import bookmarks from "../../images/Bookmarks.svg";
import lists from "../../images/Lists.svg";
import profile from "../../images/Profil.svg";
import more from "../../images/More.svg";
import { NavLink, useParams } from "react-router-dom";
import ProfileSetting from "./ProfileSetting";

const Sidebar = () => {
    const { author } = useParams();
    console.log(useParams());
    const username = author || "Bradley Ortiz";
    console.log(username);

    return (
        <>
            <div className="sidebar">
                <img
                    src={xIcon}
                    alt="image bird twitter"
                    className="sidebar__icon__twitter"
                />
                <NavLink to="/" className={"navLink"}>
                    <SidebarOption
                        Icon={home}
                        text="Home"
                        className="navLink"
                    />
                </NavLink>
                <SidebarOption Icon={explore} text="Explore" />
                <SidebarOption Icon={notifications} text="Notifications" />
                <SidebarOption Icon={message} text="Messages" />
                <SidebarOption Icon={bookmarks} text="Bookmarks" />
                <SidebarOption Icon={lists} text="Lists" />
                <NavLink to={`/${username}`} className={"navLink"}>
                    <SidebarOption Icon={profile} text="Profile" />
                </NavLink>

                <SidebarOption Icon={more} text="More" />
                <button className="sidebar__tweet">Tweet</button>
            </div>
            <ProfileSetting />
        </>
    );
};

export default Sidebar;
