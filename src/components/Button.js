import "./Button.scss";

const Button = ({ text, color, onClick }) => {
  return (
    <button className={"button " + color} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
