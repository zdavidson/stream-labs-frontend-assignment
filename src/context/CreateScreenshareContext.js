import React, { useContext, useState } from "react";

export const CreateScreenshare = React.createContext();
export const ShowCreateScreenshare = React.createContext();
export const NewScreenshare = React.createContext();
export const SetNewScreenshare = React.createContext();

export const useScreenshare = () => {
  return useContext(CreateScreenshare);
};

export const useShowScreenshare = () => {
  return useContext(ShowCreateScreenshare);
};

export const useNewScreenshare = () => {
  return useContext(NewScreenshare);
};

export const useSetNewScreenshare = () => {
  return useContext(SetNewScreenshare);
};

export const ScreenshareProvider = ({ children }) => {
  const [showScreenshare, setShowScreenshare] = useState(false);
  const [newScreenShare, setNewScreenshare] = useState("");

  const toggleScreenshare = () => {
    setShowScreenshare(!showScreenshare);
  };

  return (
    <CreateScreenshare.Provider value={toggleScreenshare}>
      <ShowCreateScreenshare.Provider value={showScreenshare}>
        <NewScreenshare.Provider value={newScreenShare}>
          <SetNewScreenshare.Provider value={setNewScreenshare}>
            {children}
          </SetNewScreenshare.Provider>
        </NewScreenshare.Provider>
      </ShowCreateScreenshare.Provider>
    </CreateScreenshare.Provider>
  );
};
