import React, { useContext, useState } from "react";

export const CreateScreenshare = React.createContext();
export const ShowCreateScreenshare = React.createContext();
export const ShowScreenShareLarge = React.createContext();
export const SetShowScreenshareLarge = React.createContext();

export const useScreenshare = () => {
  return useContext(CreateScreenshare);
};

export const useShowScreenshare = () => {
  return useContext(ShowCreateScreenshare);
};

export const useShowScreenshareLarge = () => {
  return useContext(ShowScreenShareLarge);
};

export const useSetShowScreenshareLarge = () => {
  return useContext(SetShowScreenshareLarge);
};

export const ScreenshareProvider = ({ children }) => {
  const [showScreenshare, setShowScreenshare] = useState(false);

  const [showScreenshareLarge, setShowScreenshareLarge] = useState(false);

  const toggleScreenshare = () => {
    setShowScreenshare(!showScreenshare);
  };

  const toggleScreenshareLarge = () => {
    setShowScreenshareLarge(!showScreenshareLarge);
  };

  return (
    <CreateScreenshare.Provider value={toggleScreenshare}>
      <ShowCreateScreenshare.Provider value={showScreenshare}>
        <ShowScreenShareLarge.Provider value={showScreenshareLarge}>
          <SetShowScreenshareLarge.Provider value={toggleScreenshareLarge}>
            {children}
          </SetShowScreenshareLarge.Provider>
        </ShowScreenShareLarge.Provider>
      </ShowCreateScreenshare.Provider>
    </CreateScreenshare.Provider>
  );
};
