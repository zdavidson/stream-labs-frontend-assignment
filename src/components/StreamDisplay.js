import "./StreamDisplay.scss";
import "./DisplayAdjustments.scss";
import { useShowScreenshareLarge } from "../context/CreateScreenshareContext";
import { useShowVideoFeedLarge } from "../context/CreateVideoFeedContext";
import { useState } from "react";

import selectedImage from "../assets/images/selected-video-feed.png";
import unselectedImage from "../assets/images/unselected-video-feed.png";
import display1Image from "../assets/images/display-1.png";
import display2Image from "../assets/images/display-2.png";
import display3Image from "../assets/images/display-3.png";

const StreamDisplay = () => {
  const showScreenshareLarge = useShowScreenshareLarge();
  const showVideoFeedLarge = useShowVideoFeedLarge();

  const [display, setDisplay] = useState("display1");
  const [size, setSize] = useState("size1");

  return (
    <div id="display-container">
      <div id="stream-display">
        <div
          id="video-wrapper"
          className={
            showVideoFeedLarge && showScreenshareLarge ? display : size
          }
        >
          <video id="large-video" className="large-video" autoPlay></video>
          <video id="small-video" className="small-video" autoPlay></video>
        </div>
      </div>
      <div id="display-adjustments">
        {showVideoFeedLarge && showScreenshareLarge ? (
          <div id="video-and-screenshare-buttons">
            <img
              alt="display1"
              src={display1Image}
              onClick={(e) => {
                e.preventDefault();
                setDisplay("display1");
              }}
            />
            <img
              alt="display2"
              src={display2Image}
              onClick={(e) => {
                e.preventDefault();
                setDisplay("display2");
              }}
            />
            <img
              alt="display3"
              src={display3Image}
              onClick={(e) => {
                e.preventDefault();
                setDisplay("display3");
              }}
            />
          </div>
        ) : (
          <div id="video-feed-buttons">
            <img
              alt="size1"
              src={size === "size1" ? selectedImage : unselectedImage}
              onClick={(e) => {
                e.preventDefault();
                setSize("size1");
              }}
            />

            <img
              alt="size2"
              src={size === "size2" ? selectedImage : unselectedImage}
              onClick={(e) => {
                e.preventDefault();
                setSize("size2");
              }}
            />

            <img
              alt="size3"
              src={size === "size3" ? selectedImage : unselectedImage}
              onClick={(e) => {
                e.preventDefault();
                setSize("size3");
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default StreamDisplay;
