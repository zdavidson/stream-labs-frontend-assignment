import SourcesBar from "./SourcesBar/SourcesBar";
import DisplayContainer from "./Display/DisplayContainer";
import StreamModesBar from "./StreamModesBar/StreamModesBar";
import "./StreamCanvas.scss";

const StreamCanvas = () => {
  return (
    <div id="stream-canvas">
      <SourcesBar />
      <DisplayContainer />
      <StreamModesBar />
    </div>
  );
};

export default StreamCanvas;
