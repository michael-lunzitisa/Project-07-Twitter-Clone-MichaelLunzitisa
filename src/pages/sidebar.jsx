import birdTwitter from "./../images/BirdTwitter.svg";
import SidebarOption from "../components/sidebarOption";
import home from "../images/home.svg";
import explore from "../images/explore.svg";
import notifications from "../images/notifications.svg";
import message from "../images/message.svg";
import bookmarks from "../images/bookmarks.svg";
import lists from "../images/lists.svg";
import profile from "../images/profil.svg";
import more from "../images/more.svg";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <>
            <div className="sidebar">
                <img
                    src={birdTwitter}
                    alt="image bird twitter"
                    className="sidebar__icon__twitter"
                />
                <NavLink to="/">
                    <SidebarOption Icon={home} text="Home" />
                </NavLink>
                <SidebarOption Icon={explore} text="Explore" />
                <SidebarOption Icon={notifications} text="Notifications" />
                <SidebarOption Icon={message} text="Messages" />
                <SidebarOption Icon={bookmarks} text="Bookmarks" />
                <SidebarOption Icon={lists} text="Lists" />
                <NavLink to="/profile">
                    <SidebarOption Icon={profile} text="Profile" />
                </NavLink>
                <SidebarOption Icon={more} text="More" />
                <button className="sidebar__tweet">Tweet</button>
            </div>
        </>
    );
};

export default Sidebar;
