import * as SC from "./Button.styled";

export const Button = ({ text, type, onClick }) => {
  return (
    <SC.Button
      onClick={onClick}
      type={type}
    >
      {text}
    </SC.Button>
  );
};
