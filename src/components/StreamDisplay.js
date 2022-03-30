import "./StreamDisplay.scss";

const StreamDisplay = () => {
  return (
    <div id="stream-display">
      <div id="video-wrapper">
        <video autoPlay controls></video>
      </div>
    </div>
  );
};

export default StreamDisplay;
