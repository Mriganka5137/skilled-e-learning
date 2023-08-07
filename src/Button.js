import styles from "./Button.module.css";
function Button({ children, backgroundColor, color, hoverColor }) {
  const btnStyles = { backgroundColor: backgroundColor, color: color };
  const hoverStyle = { backgroundColor: hoverColor };
  return (
    <button style={{ ...btnStyles, ...hoverStyle }} className=".btn">
      {children}
    </button>
  );
}

export default Button;
