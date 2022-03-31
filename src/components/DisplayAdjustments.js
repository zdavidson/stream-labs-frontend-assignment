import "./DisplayAdjustments.scss";
import { useShowScreenshareLarge } from "../context/CreateScreenshareContext";
import { useShowVideoFeedLarge } from "../context/CreateVideoFeedContext";

const DisplayAdjustments = () => {
  const showScreenshareLarge = useShowScreenshareLarge();
  const showVideoFeedLarge = useShowVideoFeedLarge();

  return (
    <div id="display-adjustments">
      {showVideoFeedLarge && showScreenshareLarge ? (
        <div id="video-and-screenshare-buttons">
          <button
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            Display 1
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            Display 2
          </button>

          <button>Display 3</button>
        </div>
      ) : (
        <div id="video-feed-buttons">
          <button
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            Size 1
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            Size 2
          </button>

          <button>Size 3</button>
        </div>
      )}
    </div>
  );
};

export default DisplayAdjustments;
