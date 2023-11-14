import React from "react";
import { StyledHeader } from "./style";
import { StyledTitle } from "../../fragments/Title/style";

export const Header = () => {
  return (
    <StyledHeader>
      <div className="container">
        <StyledTitle color="greyFour" tag="h1" title="one">
          <span>Finance</span> Manager
        </StyledTitle>
      </div>
    </StyledHeader>
  );
};
