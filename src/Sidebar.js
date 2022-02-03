import React from "react";
import "./Sidebar.css";
import SidebarOption from "./sidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic"
import { useDataLayerValue } from "./DataLayer";
  

function Sidebar() {
  const [{ playlists }, dispatch] = useDataLayerValue();  
    return (
        <div className="sidebar">
        <img
        className="sidebar__logo"
          src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="" 

        />
        <SidebarOption Icon={HomeIcon} title= "Home" />
        <SidebarOption Icon={HomeIcon} title= "Search" />
        <SidebarOption Icon={LibraryMusicIcon} title= "Your Library" />
        <br />
        <strong className="sidebar__title"> PLAYLIST </strong>
        <hr />
        {playlists?.items?.map(playlist =>(
          <SidebarOption title={playlist.name} />
        ))}

        
        </div>
    );
}
export default Sidebar;