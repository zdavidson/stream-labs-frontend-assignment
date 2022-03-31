import "./StreamDisplay.scss";
import "./DisplayAdjustments.scss";
import { useShowScreenshareLarge } from "../context/CreateScreenshareContext";
import { useShowVideoFeedLarge } from "../context/CreateVideoFeedContext";
import { useState } from "react";

const StreamDisplay = () => {
  const showScreenshareLarge = useShowScreenshareLarge();
  const showVideoFeedLarge = useShowVideoFeedLarge();

  const [display, setDisplay] = useState("display1");

  const assignDisplay = (button) => {
    setDisplay(button);
  };

  return (
    <div id="display-container">
      <div id="stream-display">
        <div id="video-wrapper" className={display}>
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
                assignDisplay("display1");
                console.log(display);
              }}
            >
              Display 1
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                assignDisplay("display2");
                console.log(display);
              }}
            >
              Display 2
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                assignDisplay("display3");
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
              }}
            >
              Size 1
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              Size 2
            </button>{" "}
            <button>Size 3</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default StreamDisplay;
