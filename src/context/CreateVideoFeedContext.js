import React, { useContext, useState } from "react";

export const CreateVideoFeed = React.createContext();
export const ShowCreateVideoFeed = React.createContext();
export const ShowVideoFeedLarge = React.createContext();
export const SetShowVideoFeedLarge = React.createContext();

export const useVideoFeed = () => {
  return useContext(CreateVideoFeed);
};

export const useShowVideoFeed = () => {
  return useContext(ShowCreateVideoFeed);
};

export const useShowVideoFeedLarge = () => {
  return useContext(ShowVideoFeedLarge);
};

export const useSetShowVideoFeedLarge = () => {
  return useContext(SetShowVideoFeedLarge);
};

export const VideoFeedProvider = ({ children }) => {
  const [showVideoFeed, setShowVideoFeed] = useState(false);
  const [showVideoFeedLarge, setShowVideoFeedLarge] = useState(false);

  const toggleVideoFeed = () => {
    setShowVideoFeed(!showVideoFeed);
  };

  const toggleVideoFeedLarge = () => {
    setShowVideoFeedLarge(!showVideoFeedLarge);
  };

  return (
    <CreateVideoFeed.Provider value={toggleVideoFeed}>
      <ShowCreateVideoFeed.Provider value={showVideoFeed}>
        <ShowVideoFeedLarge.Provider value={showVideoFeedLarge}>
          <SetShowVideoFeedLarge.Provider value={toggleVideoFeedLarge}>
            {children}
          </SetShowVideoFeedLarge.Provider>
        </ShowVideoFeedLarge.Provider>
      </ShowCreateVideoFeed.Provider>
    </CreateVideoFeed.Provider>
  );
};
