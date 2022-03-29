import SourcesBar from "./SourcesBar";
import DisplayContainer from "./DisplayContainer";
import StreamModesBar from "./StreamModesBar";
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
