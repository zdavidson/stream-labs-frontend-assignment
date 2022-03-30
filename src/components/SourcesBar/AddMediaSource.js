import "./AddMediaSource.scss";
import { useModal } from "../../context/AddMediaModalContext";

const AddMediaSource = ({ text, color, addText, icon, display }) => {
  const toggleModal = useModal();

  return (
    <div style={{ display: display }}>
      <button
        className={"add-media-source " + color}
        onClick={(e) => {
          e.preventDefault();
          toggleModal();
        }}
      >
        <div className="icon">{icon}</div>
        {text}
        <div className="add-text">{addText}</div>
      </button>
    </div>
  );
};

export default AddMediaSource;
