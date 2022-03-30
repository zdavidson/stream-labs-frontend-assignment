import "./MediaSource.scss";
import {
  useScreenshare,
  useSetNewScreenshare,
} from "../../context/CreateScreenshareContext";
import { useVideoFeed } from "../../context/CreateVideoFeedContext";
import { useModal } from "../../context/AddMediaModalContext";

const MediaSource = ({ title, text }) => {
  const createScreenshare = useScreenshare();
  const createVideoFeed = useVideoFeed();
  const toggleModal = useModal();
  const setNewScreenshare = useSetNewScreenshare();

  // Media Stream
  const askForPermission = () => {
    const constraints = { audio: true, video: true };

    if (title === "Screenshare") {
      navigator.mediaDevices
        .getUserMedia(constraints)
        .then((stream) => {
          const video = document.querySelector("video");
          video.srcObject = stream;
          video.onloadedmetadata = function (e) {
            video.play();
          };
          setNewScreenshare(stream);
          createScreenshare();
          toggleModal();
        })
        .catch(function (err) {
          /* handle the error */
        });
    }

    if (title === "Video Feed") {
      navigator.mediaDevices
        .getDisplayMedia(constraints)
        .then((stream) => {
          const video = document.querySelector("video");
          video.srcObject = stream;
          video.onloadedmetadata = function (e) {
            video.play();
          };
          createVideoFeed();
          toggleModal();
        })
        .catch(function (err) {
          /* handle the error */
        });
    }
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
