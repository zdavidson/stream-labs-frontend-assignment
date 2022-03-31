import "./DisplayContainer.scss";
import StreamDisplay from "./StreamDisplay";
import DisplayAdjustments from "./DisplayAdjustments";

const DisplayContainer = () => {
  return (
    <div id="display-container">
      <StreamDisplay />
      <DisplayAdjustments />
    </div>
  );
};

export default DisplayContainer;
