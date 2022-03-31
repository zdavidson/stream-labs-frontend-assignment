export const showOnStreamVideo = (toggleFunction) => {
  const playbackElement = document.getElementById("side-video");
  const captureStream = playbackElement.captureStream();
  const newElement = document.getElementById("large-video");
  newElement.srcObject = captureStream;
  toggleFunction();
};

export const showOnStreamScreen = (toggleFunction) => {
  const playbackElement = document.getElementById("side-video-screen");
  const captureStream = playbackElement.captureStream();
  const newElement = document.getElementById("large-video");
  newElement.srcObject = captureStream;
  toggleFunction();
};

export const hideOnStream = (toggleFunction) => {
  const newElement = document.getElementById("large-video");
  newElement.srcObject = null;
  toggleFunction();
};
