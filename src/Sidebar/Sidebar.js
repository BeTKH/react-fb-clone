import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow/SidebarRow";
import Chat from "@mui/icons-material/Chat";
import People from "@mui/icons-material/People";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow
        src="https://avatars.githubusercontent.com/BeTKH"
        title="Beck Tkh"
      />
      <SidebarRow Icon={People} title="Friends" />
      <SidebarRow Icon={Chat} title="Messanger" />
      <SidebarRow Icon={VideoLibraryOutlinedIcon} title="Videos" />
      <SidebarRow Icon={StorefrontOutlinedIcon} title="Marketplace" />
      <SidebarRow Icon={ExpandMoreOutlinedIcon} />
    </div>
  );
}

export default Sidebar;
