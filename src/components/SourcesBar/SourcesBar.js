import "./SourcesBar.scss";
import Button from "../Button";
import MediaSource from "./AddMediaSource";
import {
  useShowScreenshare,
  useShowScreenshareLarge,
  useSetShowScreenshareLarge,
} from "../../context/CreateScreenshareContext";
import {
  useShowVideoFeed,
  useShowVideoFeedLarge,
  useSetShowVideoFeedLarge,
} from "../../context/CreateVideoFeedContext";
import { useModal } from "../../context/AddMediaModalContext";
import {
  hideOnStream,
  showOnStreamScreen,
  showOnStreamVideo,
} from "../../assets/functions";

const SourcesBar = () => {
  const showScreenshare = useShowScreenshare();
  const showVideoFeed = useShowVideoFeed();
  const showVideoFeedLarge = useShowVideoFeedLarge();
  const toggleVideoFeedLarge = useSetShowVideoFeedLarge();
  const showScreenshareLarge = useShowScreenshareLarge();
  const toggleScreenshareLarge = useSetShowScreenshareLarge();

  const toggleModal = useModal();
  let mediaDisplay = "inline";

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
          hideMediaSource();
        }}
      />

      {showVideoFeed || showScreenshare ? (
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
            hideMediaSource();
          }}
        />
      )}

      <div
        className="show-hide-stream"
        style={{ display: showVideoFeed ? "grid" : "none" }}
      >
        {showVideoFeedLarge ? (
          <Button
            text={"Hide on stream"}
            color={"white"}
            onClick={(e) => {
              e.preventDefault();
              hideOnStream(toggleVideoFeedLarge);
            }}
          />
        ) : (
          <Button
            text={"Show on stream"}
            color={"green"}
            onClick={(e) => {
              e.preventDefault();
              showOnStreamVideo(toggleVideoFeedLarge, showScreenshareLarge);
            }}
          />
        )}
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
        {showScreenshareLarge ? (
          <Button
            text={"Hide on stream"}
            color={"white"}
            onClick={(e) => {
              e.preventDefault();
              hideOnStream(toggleScreenshareLarge);
            }}
          />
        ) : (
          <Button
            text={"Show on stream"}
            color={"green"}
            onClick={(e) => {
              e.preventDefault();
              showOnStreamScreen(toggleScreenshareLarge, showVideoFeedLarge);
            }}
          />
        )}

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
