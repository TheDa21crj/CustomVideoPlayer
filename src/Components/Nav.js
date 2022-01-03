import React from "react";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import NavCss from "./CSS/Nav.module.css";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className={NavCss.mDivN}>
      <Link to="/" className={NavCss.LinkH}>
        <div className={NavCss.iconDiv}>
          <PlayCircleFilledIcon />
          <p>Video </p>
        </div>
      </Link>
    </div>
  );
}
