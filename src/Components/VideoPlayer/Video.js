import React from "react";
import PlayCircleOutlineRoundedIcon from "@material-ui/icons/PlayCircleOutlineRounded";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import Forward10Icon from "@material-ui/icons/Forward10";
import Replay10Icon from "@material-ui/icons/Replay10";
import VolumeUpSharpIcon from "@material-ui/icons/VolumeUpSharp";
import VolumeOffSharpIcon from "@material-ui/icons/VolumeOffSharp";
import FullscreenSharpIcon from "@material-ui/icons/FullscreenSharp";
import FullscreenExitSharpIcon from "@material-ui/icons/FullscreenExitSharp";
import SettingsSharpIcon from "@material-ui/icons/SettingsSharp";
import SpeedIcon from "@material-ui/icons/Speed";
import Video from "./../../Req Video/[MV] MOMOLAND(모모랜드) _ BAAM.mp4";
import "./../CSS/Video.css";

export default function VideoH() {
  const PlayPause = async function (e) {
    if (document.getElementById("video").paused) {
      document.getElementById("video").play();
      document.getElementById("pause").style.display = "flex";
      document.getElementById("play").style.display = "none";
    } else {
      document.getElementById("video").pause();
      document.getElementById("play").style.display = "flex";
      document.getElementById("pause").style.display = "none";
    }
  };

  const VideoBar = async function (e) {
    var pos =
      document.getElementById("video").currentTime /
      document.getElementById("video").duration;
    document.getElementById("orangeBarJuiceID").style.width = pos * 100 + "%";
  };

  const Time = async function (e) {
    var minutes = Math.floor(
      Math.floor(document.getElementById("video").duration) / 60
    );
    var seconds = Math.floor(
      Math.floor(document.getElementById("video").duration) % 60
    );
    document.getElementById("totalTime").innerHTML = minutes + ":" + seconds;

    var minutes1 = 0,
      second1 = 0;

    minutes1 = Math.floor(document.getElementById("video").currentTime / 60);
    second1 = Math.floor(document.getElementById("video").currentTime % 60);

    if (second1 < 10) {
      document.getElementById("currentTime").innerHTML =
        minutes1 + ":0" + second1;
    } else {
      document.getElementById("currentTime").innerHTML =
        minutes1 + ":" + second1;
    }
  };

  const plusTemS = async function (e) {
    document.getElementById("video").currentTime += 10;
  };

  const subTemS = async function (e) {
    document.getElementById("video").currentTime -= 10;
  };

  const MuteBtn = async function (e) {
    if (document.getElementById("video").muted == false) {
      document.getElementById("video").muted = true;
      document.getElementById("mute").style.display = "flex";
      document.getElementById("notMute").style.display = "none";
      document.getElementById("volumeID").style.visibility = "hidden";
    } else {
      document.getElementById("video").muted = false;
      document.getElementById("mute").style.display = "none";
      document.getElementById("notMute").style.display = "flex";
      document.getElementById("volumeID").style.visibility = "visible";
    }
  };

  const volumeScroll = async function (e) {
    console.log("Scrolled");
  };

  const setting = async function (e) {};

  const fullScreenReq = async function (e) {
    document.getElementById("video").requestFullscreen();
  };

  var q = 1;
  const Speed = async function (e) {
    q++;
    if (q % 2 === 0) {
      document.getElementById("speedDivID").style.display = "flex";
    } else {
      document.getElementById("speedDivID").style.display = "none";
    }
  };

  var s = 1;
  const Settings = async function (e) {
    s++;
    if (s % 2 === 0) {
      document.getElementById("MoreSettingsA").style.display = "flex";
    } else {
      document.getElementById("MoreSettingsA").style.display = "none";
    }
  };

  var speed;
  const SpeedValue = async function (e) {
    speed = e.target.innerHTML;
    document.getElementById("video").playbackRate = speed;
  };
  return (
    <div className="PlayerCssmDiv">
      <div className="videoDiv">
        <div onClick={PlayPause}>
          <video
            src={Video}
            className="PlayerCssvideoTag"
            id="video"
            onTimeUpdate={() => {
              Time();
              VideoBar();
            }}
          ></video>
        </div>
        <div className="VideoControls">
          <div className="orangeBar">
            <div className="orangeBarJuice" id="orangeBarJuiceID"></div>
          </div>
          <div className="buttons" id="playPauseDiv" onClick={PlayPause}>
            <button className="playBtn" id="play">
              <PlayCircleOutlineRoundedIcon fontSize="large" />
            </button>
            <button className="playBtn" id="pause">
              <PauseCircleOutlineIcon fontSize="large" />
            </button>
          </div>
          <div className="videoDuration">
            <p id="currentTime">0</p>
            <p id="diff">/</p>
            <p id="totalTime">00</p>
          </div>
          <div className="psTenS">
            <div className="plusTemS">
              <Forward10Icon fontSize="large" onClick={plusTemS} />
            </div>
            <div className="subTemS">
              <Replay10Icon fontSize="large" onClick={subTemS} />
            </div>
          </div>
          <div className="speed" onClick={Speed}>
            <SpeedIcon fontSize="large" />
          </div>
          <div className="speedDiv" id="speedDivID">
            <p onClick={SpeedValue}> 0.25 </p>
            <p onClick={SpeedValue}> 0.50 </p>
            <p onClick={SpeedValue}> 0.75 </p>
            <p onClick={SpeedValue}> 1.00 </p>
            <p onClick={SpeedValue}> 1.25 </p>
            <p onClick={SpeedValue}> 1.50 </p>
            <p onClick={SpeedValue}> 1.75 </p> <p onClick={SpeedValue}> 2 </p>
          </div>
          <div className="IconsColl">
            <div className="muteDiv">
              <div className="volume" id="volumeID" onScroll={volumeScroll}>
                <div id="netVol"> </div>
              </div>
              <div className="volumeIconsDiv" onClick={MuteBtn}>
                <div id="notMute">
                  <VolumeUpSharpIcon fontSize="large" />
                </div>
                <div id="mute">
                  <VolumeOffSharpIcon fontSize="large" />
                </div>
              </div>
            </div>
            <div className="settingsDiv" onClick={setting}>
              <SettingsSharpIcon fontSize="large" onClick={Settings} />
            </div>
            <div className="MoreSettings" id="MoreSettingsA">
              hello world!
            </div>
            <div className="fullScreenDiv" onClick={fullScreenReq}>
              <div id="fullScreen">
                <FullscreenSharpIcon fontSize="large" />
              </div>
              <div id="ExitFullScreen">
                <FullscreenExitSharpIcon fontSize="large" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
