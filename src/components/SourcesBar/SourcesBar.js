import "./SourcesBar.scss";
import Button from "../Button";
import MediaSource from "./AddMediaSource";
import { useShowScreenshare } from "../../context/CreateScreenshareContext";

const SourcesBar = () => {
  const showScreenshare = useShowScreenshare();
  console.log(showScreenshare);
  return (
    <div id="sources-bar">
      <Button text={"Add Source"} color={"green"} />

      {showScreenshare ? (
        <div></div>
      ) : (
        <MediaSource
          text={"Add Media Source"}
          color={"gray"}
          addText={"Screenshare, Camera"}
          icon={"+"}
        />
      )}
    </div>
  );
};

export default SourcesBar;
