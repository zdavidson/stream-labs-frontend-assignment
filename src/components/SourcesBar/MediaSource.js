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
    const constraints = {
      audio: false,
      video: true,
    };

    if (title === "Video Feed") {
      navigator.mediaDevices
        .getUserMedia(constraints)
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

    if (title === "Screenshare") {
      navigator.mediaDevices
        .getDisplayMedia(constraints)
        .then((stream) => {
          const video = document.getElementById("side-video-screen");
          video.srcObject = stream;
          video.onloadedmetadata = function (e) {
            video.play();
          };
          createScreenshare();
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
