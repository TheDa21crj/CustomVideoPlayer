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
    } else {
      document.getElementById("video").muted = false;
      document.getElementById("mute").style.display = "none";
      document.getElementById("notMute").style.display = "flex";
    }
  };

  const VolVal = async function (e) {
    if (document.getElementById("netVol").value == 0) {
      document.getElementById("notMute").style.display = "none";
      document.getElementById("mute").style.display = "flex";
    } else {
      document.getElementById("video").volume =
        document.getElementById("netVol").value / 100;
    }
  };

  const volumeScroll = async function (e) {
    console.log("Scrolled");
  };

  const setting = async function (e) {};

  const fullScreenReq = async function (e) {
    if (document.getElementById("doc").requestFullscreen) {
      document.getElementById("doc").requestFullscreen();
    } else if (document.getElementById("doc").msRequestFullscreen) {
      document.getElementById("doc").msRequestFullscreen();
    } else if (document.getElementById("doc").mozRequestFullScreen) {
      document.getElementById("doc").mozRequestFullScreen();
    } else if (document.getElementById("doc").webkitRequestFullscreen) {
      document.getElementById("doc").webkitRequestFullscreen();
    }
  };

  var speed;
  const SpeedValue = async function (e) {
    speed = e.target.innerHTML;
    document.getElementById("video").playbackRate = speed;
  };

  const proVideo = async function (e) {
    var x = ((e.screenX - 231) / 800) * 100;
    document.getElementById("orangeBarJuiceID").style.width = x + "%";
    document.getElementById("video").currentTime =
      document.getElementById("video").duration * (x / 100);
  };

  const keySortCut = async function (e) {
    document.onkeyup = function (e) {
      if (e.which == 77) {
        MuteBtn();
      } else if (e.which == 32) {
        PlayPause();
      } else if (e.which == 76) {
        plusTemS();
      } else if (e.which == 74) {
        subTemS();
      } else if (e.which == 39) {
        if (document.getElementById("video").playbackRate < 2)
          document.getElementById("video").playbackRate += 0.25;
      } else if (e.which == 37) {
        if (document.getElementById("video").playbackRate > 0.25)
          document.getElementById("video").playbackRate -= 0.25;
      } else if (e.which == 187) {
        document.getElementById("video").playbackRate = 1;
      } else if (e.which == 70) {
        fullScreenReq();
      }
    };
  };

  return (
    <div className="PlayerCssmDiv" onClick={keySortCut}>
      <div className="videoDiv" id="doc">
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
          <div className="orangeBar" id="o" onClick={proVideo}>
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
          <div className="IconsColl">
            <div className="speed">
              <SpeedIcon fontSize="large" />
              <div className="speedDiv" id="speedDivID">
                <p onClick={SpeedValue}> 0.25 </p>
                <p onClick={SpeedValue}> 0.50 </p>
                <p onClick={SpeedValue}> 0.75 </p>
                <p onClick={SpeedValue} id="speedCur">
                  1.00
                </p>
                <p onClick={SpeedValue}> 1.25 </p>
                <p onClick={SpeedValue}> 1.50 </p>
                <p onClick={SpeedValue}> 1.75 </p>
                <p onClick={SpeedValue}> 2 </p>
              </div>
            </div>
            <div className="muteDiv">
              <div className="volumeIconsDiv">
                <div id="notMute">
                  <VolumeUpSharpIcon fontSize="large" onClick={MuteBtn} />
                  <div className="volume" id="volumeID" onScroll={volumeScroll}>
                    <input type="range" name="" id="netVol" onChange={VolVal} />
                  </div>
                </div>
                <div id="mute">
                  <VolumeOffSharpIcon fontSize="large" onClick={MuteBtn} />
                </div>
              </div>
            </div>
            <div className="settingsDiv" onClick={setting}>
              <SettingsSharpIcon fontSize="large" />
              <div className="MoreSettings" id="MoreSettingsA">
                hello world!
              </div>
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
