import React, { useContext, useState } from "react";

export const CreateVideoFeed = React.createContext();
export const ShowCreateVideoFeed = React.createContext();

export const useVideoFeed = () => {
  return useContext(CreateVideoFeed);
};

export const useShowVideoFeed = () => {
  return useContext(ShowCreateVideoFeed);
};

export const VideoFeedProvider = ({ children }) => {
  const [showVideoFeed, setShowVideoFeed] = useState(false);

  const toggleVideoFeed = () => {
    setShowVideoFeed(!showVideoFeed);
  };

  return (
    <CreateVideoFeed.Provider value={toggleVideoFeed}>
      <ShowCreateVideoFeed.Provider value={showVideoFeed}>
        {children}
      </ShowCreateVideoFeed.Provider>
    </CreateVideoFeed.Provider>
  );
};
