import "./MediaSource.scss";

const MediaSource = ({ title, text }) => {
  const askForPermission = () => {
    const constraints = { audio: true, video: true };

    navigator.mediaDevices
      .getUserMedia(constraints)
      .then(function (stream) {
        /* use the stream */
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
