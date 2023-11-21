import React from "react";
import { StyledContainerRight } from "./style";
import { StyledTitle } from "../../fragments/Title/style";
import { StyledCardTransition } from "../CardTransition/style";
import { StyledButton } from "../../fragments/Button/style";

export const ContainerRight = () => {
  return (
    <StyledContainerRight>
      <div>
        <StyledTitle tag="h3" title="three" color="greyFour">
          Resumo financeiro:
        </StyledTitle>

        <StyledButton color="grey" type="submit">
          Todos
        </StyledButton>

        <StyledButton color="grey" type="submit">
          Entradas
        </StyledButton>

        <StyledButton color="grey" type="submit">
          Saídas
        </StyledButton>
        <ul>
          <StyledCardTransition
            description="descrição"
            type="outflow"
            uuid="isso é um uuid"
            value="R$ 3.300,00"
          />
          <StyledCardTransition
            description="descrição"
            type="outflow"
            uuid="isso é um uuid"
            value="R$ 3.300,00"
          />
          <StyledCardTransition
            description="descrição"
            type="outflow"
            uuid="isso é um uuid"
            value="R$ 3.300,00"
          />
          <StyledCardTransition
            description="descrição"
            type="outflow"
            uuid="isso é um uuid"
            value="R$ 3.300,00"
          />
          <StyledCardTransition
            description="descrição"
            type="outflow"
            uuid="isso é um uuid"
            value="R$ 3.300,00"
          />
        </ul>
      </div>
    </StyledContainerRight>
  );
};
