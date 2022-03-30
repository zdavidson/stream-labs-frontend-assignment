import "./Button.scss";

const Button = ({ text, color }) => {
  return <button className={"button " + color}>{text}</button>;
};

export default Button;
