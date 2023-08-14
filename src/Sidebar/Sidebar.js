import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow/SidebarRow";

import Chat from "@mui/icons-material/Chat";
import People from "@mui/icons-material/People";
import LocalHospital from "@mui/icons-material/LocalHospital";
import MarketplaceIcon from "@mui/icons-material/Storefront";

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow
        src="https://avatars.githubusercontent.com/BeTKH"
        title="Beck Tkh"
      />
      <SidebarRow Icon={LocalHospital} title="Covid-19 Info Center" />
      <SidebarRow Icon={People} title="Friends" />
      <SidebarRow Icon={Chat} title="Messanger" />
      <Sidebar Icon={MarketplaceIcon} title="Marketplace" />
    </div>
  );
}

export default Sidebar;
