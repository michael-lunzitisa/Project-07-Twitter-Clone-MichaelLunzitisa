import twitterIcon from "../images/twitter.svg";
import SidebarOption from "../components/sidebarOption";
import home from "../images/Home.svg";
import explore from "../images/Explore.svg";
import notifications from "../images/Notifications.svg";
import message from "../images/Message.svg";
import bookmarks from "../images/Bookmarks.svg";
import lists from "../images/Lists.svg";
import profile from "../images/Profil.svg";
import more from "../images/More.svg";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <img
          src={twitterIcon}
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
