import React from "react";

const SidebarOption = ({ text, Icon }) => {
    return (
        <div className="sidebarOption">
            <img src={Icon} alt=" icon home" />
            <h2>{text}</h2>
        </div>
    );
};

export default SidebarOption;
