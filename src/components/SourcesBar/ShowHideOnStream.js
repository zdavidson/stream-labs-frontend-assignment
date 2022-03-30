import "./ShowHideOnStream.scss";
import Button from "../Button";

const ShowHideOnStream = ({ type }) => {
  return (
    <div className={"show-hide-stream " + type}>
      <Button text={"Show on stream"} color={"green"} />
      <p>My {type} feed</p>
    </div>
  );
};

export default ShowHideOnStream;
