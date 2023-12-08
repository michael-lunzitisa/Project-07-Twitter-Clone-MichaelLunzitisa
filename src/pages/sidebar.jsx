import birdTwitter from "./../images/BirdTwitter.svg";
import SidebarOption from "../components/sidebarOption";
import home from "../images/home.svg";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <img src={birdTwitter} alt="image bird twitter" />
      <SidebarOption Icon={home} text="Home" />
      <SidebarOption text="Explore" />
      <SidebarOption text="Notifications" />
      <SidebarOption text="Messages" />
      <SidebarOption text="Bookmarks" />
      <SidebarOption text="Lists" />
      <SidebarOption text="Profile" />
      <SidebarOption text="More" />
      <button className="sidebar__tweet">Tweet</button>
    </div>
  );
};

export default Sidebar;
