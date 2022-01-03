import React from "react";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import NavCss from "./CSS/Nav.module.css";

export default function Nav() {
  return (
    <div className={NavCss.mDivN}>
      <div className={NavCss.iconDiv}>
        <PlayCircleFilledIcon />
        <p>Video </p>
      </div>
    </div>
  );
}
