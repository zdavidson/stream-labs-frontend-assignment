import "./MediaSourceModal.scss";
import { useModal, useShowModal } from "../../context/AddMediaModalContext";

const MediaSourceModal = () => {
  const showModal = useShowModal();
  const toggleModal = useModal();

  if (!showModal) {
    return <div></div>;
  }
  return (
    <div id="media-source-modal">
      <button
        onClick={(e) => {
          e.preventDefault();
          toggleModal();
        }}
      >
        Close Modal
      </button>
    </div>
  );
};

export default MediaSourceModal;
