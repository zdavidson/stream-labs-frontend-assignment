import React, { useContext, useState } from "react";

export const AddMediaModalContext = React.createContext();
export const ShowAddMediaModalContext = React.createContext();

export const useModal = () => {
  return useContext(AddMediaModalContext);
};

export const useShowModal = () => {
  return useContext(ShowAddMediaModalContext);
};

export const ModalProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <AddMediaModalContext.Provider value={toggleModal}>
      <ShowAddMediaModalContext.Provider value={showModal}>
        {children}
      </ShowAddMediaModalContext.Provider>
    </AddMediaModalContext.Provider>
  );
};
