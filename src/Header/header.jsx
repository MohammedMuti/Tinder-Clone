import React from "react";
import "./header.css";
import PersonIcon from "@mui/icons-material/Person";
import IconButton from "@mui/material/IconButton/IconButton";
import ForumIcon from "@mui/icons-material/Forum";

const Header = () => {
  return (
    <React.Fragment>
      <div className="header">
        <div className="header_person-icon">
          <IconButton>
            <PersonIcon />
          </IconButton>
        </div>
        <div className="header_tinder-logo">
          <img src={require("../images/tinder.png")} alt="" />
        </div>
        <div className="header_messages-logo">
          <IconButton>
            <ForumIcon />
          </IconButton>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
