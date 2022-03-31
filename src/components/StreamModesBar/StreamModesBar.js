import Button from "../Button";
import "./StreamModesBar.scss";

const StreamModesBar = () => {
  return (
    <div id="stream-modes-bar">
      <Button text={"Chat"} color={"gray"} />
      <Button text={"Record"} color={"gray"} />
      <Button text={"Go Live"} color={"green"} />
    </div>
  );
};

export default StreamModesBar;
