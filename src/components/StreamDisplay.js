import "./StreamDisplay.scss";

const StreamDisplay = () => {
  return (
    <div id="stream-display">
      <div id="video-wrapper">
        <video id="large-video" autoPlay></video>
        <video id="small-video" autoPlay></video>
      </div>
    </div>
  );
};

export default StreamDisplay;
