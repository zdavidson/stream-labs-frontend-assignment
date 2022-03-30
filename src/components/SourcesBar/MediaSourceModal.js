import "./MediaSourceModal.scss";
import SelectMediaSource from "./SelectMediaSource";
import { useModal, useShowModal } from "../../context/AddMediaModalContext";

const MediaSourceModal = () => {
  const showModal = useShowModal();
  const toggleModal = useModal();

  if (!showModal) {
    return <div></div>;
  }
  return (
    <div
      id="media-source-modal"
      onClick={(e) => {
        e.preventDefault();
        // toggleModal();
      }}
    >
      <SelectMediaSource />
    </div>
  );
};

export default MediaSourceModal;
