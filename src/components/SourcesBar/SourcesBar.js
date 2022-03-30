import "./SourcesBar.scss";
import Button from "../Button";
import MediaSource from "./AddMediaSource";
import { useShowScreenshare } from "../../context/CreateScreenshareContext";
import { useShowVideoFeed } from "../../context/CreateVideoFeedContext";
import { useModal } from "../../context/AddMediaModalContext";

import ShowHideOnStream from "./ShowHideOnStream";

const SourcesBar = () => {
  const showScreenshare = useShowScreenshare();
  const showVideoFeed = useShowVideoFeed();
  const toggleModal = useModal();

  return (
    <div id="sources-bar">
      <Button
        text={"Add Source"}
        color={"green"}
        onClick={(e) => {
          e.preventDefault();
          toggleModal();
        }}
      />

      {showVideoFeed ? (
        <ShowHideOnStream type={"video"} />
      ) : (
        <MediaSource
          text={"Add Media Source"}
          color={"gray"}
          addText={"Screenshare, Camera"}
          icon={"+"}
        />
      )}

      {showScreenshare ? <ShowHideOnStream type={"screen"} /> : <div></div>}
    </div>
  );
};

export default SourcesBar;
