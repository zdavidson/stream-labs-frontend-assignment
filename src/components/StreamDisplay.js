import "./StreamDisplay.scss";
import "./DisplayAdjustments.scss";
import { useShowScreenshareLarge } from "../context/CreateScreenshareContext";
import { useShowVideoFeedLarge } from "../context/CreateVideoFeedContext";
import { useState } from "react";

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
            size
            // showVideoFeedLarge && showScreenshareLarge ? display : size
          }
        >
          <video id="large-video" className="large-video" autoPlay></video>
          <video id="small-video" className="small-video" autoPlay></video>
        </div>
      </div>
      <div id="display-adjustments">
        {showVideoFeedLarge && showScreenshareLarge ? (
          <div id="video-and-screenshare-buttons">
            <button
              onClick={(e) => {
                e.preventDefault();
                setDisplay("display1");
                console.log(display);
              }}
            >
              Display 1
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                setDisplay("display2");
                console.log(display);
              }}
            >
              Display 2
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                setDisplay("display3");
                console.log(display);
              }}
            >
              Display 3
            </button>
          </div>
        ) : (
          <div id="video-feed-buttons">
            <button
              onClick={(e) => {
                e.preventDefault();
                setSize("size1");
                console.log(size);
              }}
            >
              Size 1
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                setSize("size2");
                console.log(size);
              }}
            >
              Size 2
            </button>{" "}
            <button
              onClick={(e) => {
                e.preventDefault();
                setSize("size3");
                console.log(size);
              }}
            >
              Size 3
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default StreamDisplay;
