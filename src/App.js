import "./App.scss";
import StreamCanvas from "./components/StreamCanvas";
import MediaSourceModal from "./components/SourcesBar/MediaSourceModal";
import { ModalProvider } from "./context/AddMediaModalContext";
import { ScreenshareProvider } from "./context/CreateScreenshareContext";
import { VideoFeedProvider } from "./context/CreateVideoFeedContext";

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
