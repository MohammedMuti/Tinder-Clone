import React from "react";
import "./footer.css";
import ReplayIcon from "@mui/icons-material/Replay";
import CloseIcon from "@mui/icons-material/Close";
import StarRateIcon from "@mui/icons-material/StarRate";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import IconButton from "@mui/material/IconButton/IconButton";

const Footer = () => {
  return (
    <React.Fragment>
      <div className="footer">
        <IconButton>
          <ReplayIcon className="replay" />
        </IconButton>
        <IconButton>
          <CloseIcon className="close" />
        </IconButton>
        <IconButton>
          <StarRateIcon className="star" />
        </IconButton>
        <IconButton>
          <FavoriteIcon className="favorite" />
        </IconButton>
        <IconButton>
          <FlashOnIcon className="flash" />
        </IconButton>
      </div>
    </React.Fragment>
  );
};

export default Footer;
