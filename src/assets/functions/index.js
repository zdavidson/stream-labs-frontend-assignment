export const showOnStreamVideo = (toggleFunction, screenshareStatus) => {
  if (!screenshareStatus) {
    const playbackElement = document.getElementById("side-video");
    const captureStream = playbackElement.captureStream();
    const newElement = document.getElementById("large-video");
    newElement.srcObject = captureStream;
    toggleFunction();
  } else {
    const playbackElement = document.getElementById("side-video");
    const captureStream = playbackElement.captureStream();
    const newElement = document.getElementById("small-video");
    newElement.srcObject = captureStream;
    toggleFunction();
  }
};

export const showOnStreamScreen = (toggleFunction, videofeedStatus) => {
  if (!videofeedStatus) {
    const playbackElement = document.getElementById("side-video-screen");
    const captureStream = playbackElement.captureStream();
    const newElement = document.getElementById("large-video");
    newElement.srcObject = captureStream;
    toggleFunction();
  } else {
    const playbackElement = document.getElementById("side-video-screen");
    const captureStream = playbackElement.captureStream();
    const newElement = document.getElementById("large-video");
    newElement.srcObject = captureStream;

    const playbackElement2 = document.getElementById("side-video");
    const captureStream2 = playbackElement2.captureStream();
    const newElement2 = document.getElementById("small-video");
    newElement2.srcObject = captureStream2;

    toggleFunction();
  }
};

export const hideOnStream = (toggleFunction) => {
  const newElement = document.getElementById("large-video");
  newElement.srcObject = null;
  toggleFunction();
};
