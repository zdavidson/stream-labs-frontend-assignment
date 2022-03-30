import React, { useContext, useState } from "react";

export const CreateScreenshare = React.createContext();
export const ShowCreateScreenshare = React.createContext();

export const useScreenshare = () => {
  return useContext(CreateScreenshare);
};

export const useShowScreenshare = () => {
  return useContext(ShowCreateScreenshare);
};

export const ScreenshareProvider = ({ children }) => {
  const [showScreenshare, setShowScreenshare] = useState(false);

  const toggleScreenshare = () => {
    setShowScreenshare(!showScreenshare);
  };

  return (
    <CreateScreenshare.Provider value={toggleScreenshare}>
      <ShowCreateScreenshare.Provider value={showScreenshare}>
        {children}
      </ShowCreateScreenshare.Provider>
    </CreateScreenshare.Provider>
  );
};
