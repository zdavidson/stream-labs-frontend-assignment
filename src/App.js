import "./App.scss";
import StreamCanvas from "./components/StreamCanvas";
import MediaSourceModal from "./components/SourcesBar/MediaSourceModal";
import { ModalProvider } from "./context/AddMediaModalContext";
import { ScreenshareProvider } from "./context/CreateScreenshareContext";
import { VideoFeedProvider } from "./context/CreateVideoFeedContext";

// Add whether or not screenshare has been allowed to context
// Add whether or not video feed has been allowed to context

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
