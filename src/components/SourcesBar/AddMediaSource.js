import "./AddMediaSource.scss";
import { useModal } from "../../context/AddMediaModalContext";

const AddMediaSource = ({ text, color, addText, icon }) => {
  const toggleModal = useModal();

  return (
    <>
      <button
        className={"add-media-source " + color}
        onClick={(e) => {
          e.preventDefault();
          toggleModal();
          console.log("clicked");
        }}
      >
        <div className="icon">{icon}</div>
        {text}
        <div className="add-text">{addText}</div>
      </button>
    </>
  );
};

export default AddMediaSource;
