import "./App.scss";
import StreamCanvas from "./components/StreamCanvas";
import MediaSourceModal from "./components/SourcesBar/MediaSourceModal";
import { ModalProvider } from "./context/AddMediaModalContext";

function App() {
  return (
    <ModalProvider>
      <MediaSourceModal />

      <div className="App">
        <StreamCanvas />
      </div>
    </ModalProvider>
  );
}

export default App;
