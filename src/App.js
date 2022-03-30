import "./App.scss";
import StreamCanvas from "./components/StreamCanvas";
import MediaSourceModal from "./components/SourcesBar/MediaSourceModal";
import { ModalProvider } from "./context/AddMediaModalContext";
import { ScreenshareProvider } from "./context/CreateScreenshareContext";
import { VideoFeedProvider } from "./context/CreateVideoFeedContext";

// Add whether or not screenshare has been allowed to context
// Add whether or not video feed has been allowed to context

// Fix context files
// Get small vid to duplicate on large
// Add placeholder buttons
// Add resizing
// Add multiple inputs simultaneously

// The stream should be a 16 x 9 aspect ratio and be responsive to the window size. The stream should be fully visible at all screen sizes.
// You can use basic HTML elements to render the stream. You do not need to use the <canvas/> HTML element to render.
// Users can add up to 2 images to the studio. One image will represent a video webcam feed while another image will represent a screenshare feed
// Users can add/remove both images to the stream. The layout should auto-adjust to render the new number of images on stream. More information on this is below.
// The positions of the images on the stream will vary depending on the number of images added. For a specific number of images, users can toggle different layouts as well.

// Users can add and remove images to the stream. When an image is added, it is rendered on stream with the coordinates, and dimensions determined by the stream layout. The percentages below are relative to the stream player size in Figma.
// When only the "webcam" image is added, there are 3 layouts - 100%, 80%, and 60% width & height.
// When only the "screen share" image is added, there is 1 layout, 100% width & height.
// When both the webcam and screen share images are added, there are 3 layouts:
// Screen share is 100% width & height and the webcam source is floating bottom right (height of 20%, aspect ratio 16:9)
// Screen share is 100% width & height and the webcam source is floating bottom left (height of 20%, aspect ratio 16:9)
// Screen share is 66% width and 80% height. The webcam source is 33% width and 80% height
// For each combination of added images, only the valid layout options are presented. For example, when the user has webcam source selected, they will see 3 layout options. When the user removed this webcam source and then selects a screen share source, they will see just one layout option.
// The images should never be cut off height-wise and maintain its original aspect ratio.

function App() {
  return (
    <ModalProvider>
      <ScreenshareProvider>
        <VideoFeedProvider>
          <MediaSourceModal />

          <div className="App">
            <StreamCanvas />
          </div>
        </VideoFeedProvider>
      </ScreenshareProvider>
    </ModalProvider>
  );
}

export default App;
