import "./SourcesBar.scss";
import Button from "../Button";
import MediaSource from "./AddMediaSource";
import { useShowScreenshare } from "../../context/CreateScreenshareContext";
import { useShowVideoFeed } from "../../context/CreateVideoFeedContext";
import { useModal } from "../../context/AddMediaModalContext";

const SourcesBar = () => {
  const showScreenshare = useShowScreenshare();
  const showVideoFeed = useShowVideoFeed();
  const toggleModal = useModal();
  let vidDisplay = "none";
  let mediaDisplay = "inline";

  const showVid = () => {
    vidDisplay = "inline";
  };

  const hideMediaSource = () => {
    mediaDisplay = "none";
  };

  return (
    <div id="sources-bar">
      <Button
        text={"Add Source"}
        color={"green"}
        onClick={(e) => {
          e.preventDefault();
          toggleModal();
          showVid();
          hideMediaSource();
        }}
      />

      {showVideoFeed ? (
        <div></div>
      ) : (
        <MediaSource
          text={"Add Media Source"}
          color={"gray"}
          addText={"Screenshare, Camera"}
          icon={"+"}
          display={mediaDisplay}
          onClick={(e) => {
            e.preventDefault();
            toggleModal();
            showVid();
            hideMediaSource();
          }}
        />
      )}

      <div
        className="show-hide-stream"
        style={{ display: showVideoFeed ? "grid" : "none" }}
      >
        <Button
          text={"Show on stream"}
          color={"green"}
          onClick={(e) => {
            e.preventDefault();
            console.log("inner button");
            const playbackElement = document.getElementById("side-video");
            const captureStream = playbackElement.captureStream();

            const newElement = document.getElementById("large-video");
            newElement.srcObject = captureStream;
            newElement.onloadedmetadata = function (e) {
              newElement.play();
            };

            playbackElement.play();
          }}
        />
        <p>My video feed</p>
        <video
          id="side-video"
          style={{
            height: "8rem",
            width: "15rem",
            zIndex: -2,
          }}
          autoPlay
        ></video>
      </div>

      <div
        className="show-hide-stream"
        style={{ display: showScreenshare ? "grid" : "none" }}
      >
        <Button
          text={"Show on stream"}
          color={"green"}
          onClick={(e) => {
            e.preventDefault();
            console.log("inner button");
            const playbackElement = document.getElementById("side-video");
            const captureStream = playbackElement.captureStream();

            const newElement = document.getElementById("large-video");
            newElement.srcObject = captureStream;
            newElement.onloadedmetadata = function (e) {
              newElement.play();
            };

            playbackElement.play();
          }}
        />
        <p>My screen feed</p>
        <video
          id="side-video-screen"
          style={{
            height: "8rem",
            width: "15rem",
            zIndex: -2,
          }}
          autoPlay
        ></video>
      </div>
    </div>
  );
};

export default SourcesBar;
