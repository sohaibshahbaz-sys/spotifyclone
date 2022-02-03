import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { useDataLayerValue } from "./DataLayer";


function Header() {
    const [{user} , dispatch] = useDataLayerValue();
    return (
    <div className="header">
        <div className="header__left">
        <SearchIcon />
        <input
          placeholder="Search for Artists, Songs, or Podcasts "
          type="text"
        />
        </div>
        <div className="header__right">
          <h4>Sohaib Shahbaz</h4>
        </div>
    </div>
    )
}

export default Header;