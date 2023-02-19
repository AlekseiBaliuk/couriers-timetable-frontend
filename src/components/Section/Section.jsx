import * as SC from "./Section.styled";

export const Section = ({ text, children }) => {
  return (
    <SC.Wrapper>
      <SC.Title>{text}</SC.Title>
      {children}
      {/* <BtnWrapper>{children}</BtnWrapper> */}
      {/* <SC.BtnWrapper> */}
      {/* </SC.BtnWrapper> */}
    </SC.Wrapper>
  );
};
