import React from "react";

export const Tabs = ({ children, buttons, ButtonContainer = 'menu' }) => {
    // const ButtonContainer = buttonsContainer;
  return (
    <>
      <ButtonContainer >
        {buttons}
      </ButtonContainer>
      {children}
    </>
  );
};
