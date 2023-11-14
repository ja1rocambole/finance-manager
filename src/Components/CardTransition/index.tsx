import React from "react";
import { StyledCardTransition } from "./style";
import { StyledTitle } from "../../fragments/Title/style";
import { StyledText } from "../../fragments/Text/style";
import { Button } from "../../fragments/Button";
import { StyledButton } from "../../fragments/Button/style";

interface ICardTransition {
  uuid: string;
  type: "inflow" | "outflow";
  description: string;
  value: string;
  className?: string;
  // children: React.ReactNode;
}

export const CardTrasition = ({
  uuid,
  type,
  description,
  value,
  className,
}: ICardTransition) => {
  return (
    <li className={className} id={uuid}>
      <div></div>

      <div>
        <StyledTitle color="greyFour" tag="h3" title="two">
          {" "}
          {description}{" "}
        </StyledTitle>
        <StyledText color="greyThree" tag="span" text="two">
          {" "}
          {type}
        </StyledText>
      </div>

      <div>
        <StyledText color="greyFour" tag="span" text="two">
          {value}
        </StyledText>

        <StyledButton color="grey">Excluir</StyledButton>
      </div>
    </li>
  );
};
