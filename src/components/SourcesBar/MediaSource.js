import "./MediaSource.scss";
import { useScreenshare } from "../../context/CreateScreenshareContext";
import { useVideoFeed } from "../../context/CreateVideoFeedContext";
import { useModal } from "../../context/AddMediaModalContext";

const MediaSource = ({ title, text }) => {
  const createScreenshare = useScreenshare();
  const createVideoFeed = useVideoFeed();
  const toggleModal = useModal();

  // Media Stream
  const askForPermission = () => {
    const constraints = { audio: true, video: true };

    navigator.mediaDevices
      .getUserMedia(constraints)
      .then((stream) => {
        if (title === "Screenshare") {
          createScreenshare();
          toggleModal();
        }

        if (title === "Video Feed") {
          createVideoFeed();
          toggleModal();
        }

        /// if screen add one image, if video add another
        // then delay, then close modal
      })
      .catch(function (err) {
        /* handle the error */
      });
  };

  return (
    <button
      className="media-source"
      onClick={(e) => {
        e.preventDefault();
        askForPermission();
      }}
    >
      <h3>{title}</h3>
      <p>{text}</p>
    </button>
  );
};

export default MediaSource;
