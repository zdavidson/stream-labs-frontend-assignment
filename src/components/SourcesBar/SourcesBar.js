import "./SourcesBar.scss";
import Button from "../Button";
import MediaSource from "./AddMediaSource";

const SourcesBar = () => {
  return (
    <div id="sources-bar">
      <Button text={"Add Source"} color={"green"} />
      <MediaSource
        text={"Add Media Source"}
        color={"gray"}
        addText={"Screenshare, Camera"}
        icon={"+"}
      />
    </div>
  );
};

export default SourcesBar;
