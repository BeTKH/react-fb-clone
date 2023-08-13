import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow/SidebarRow.js";

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow />
      <SidebarRow />
      <SidebarRow />
      <SidebarRow />
    </div>
  );
}

export default Sidebar;
