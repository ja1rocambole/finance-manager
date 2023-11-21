import React from "react";
import { StyledTotalValues } from "./style";
import { StyledText } from "../../fragments/Text/style";
import { StyledTitle } from "../../fragments/Title/style";

export const TotalValues = () => {
  return (
    <StyledTotalValues>
      <div>
        <StyledTitle tag="h3" title="three" color="greyFour">
          Valor Total:
        </StyledTitle>

        <StyledText tag="span" text="two" color="greyThree">
          O valor se refere ao saldo
        </StyledText>
      </div>

      <StyledText tag="p" text="one" color="primary">
        R$13,00
      </StyledText>
    </StyledTotalValues>
  );
};
