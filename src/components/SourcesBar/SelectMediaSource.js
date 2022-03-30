import "./SelectMediaSource.scss";
import MediaSource from "./MediaSource";

const SelectMediaSource = () => {
  return (
    <div id="select-media-source">
      <h3>Add New Media Source</h3>
      <div id="media-sources">
        <MediaSource
          title={"Screenshare"}
          text={"Share your entire screen, window or a specific Chrome tab"}
        />
        <MediaSource
          title={"Video Feed"}
          text={
            "Share a feed of your in-built webcam and microphone. If you do not have a webcam, you can use a “virtual” webcam such as Streamlabs OBS virtual camera"
          }
        />
      </div>
    </div>
  );
};

export default SelectMediaSource;
