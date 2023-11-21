import React from "react";
import { StyledContainerLeft } from "./style";
import { FormInsertTrasition } from "../FormInsertTransition";
import { TotalValues } from "../TotalValues";

export const ContainerLeft = () => {
  return (
    <StyledContainerLeft>
      <FormInsertTrasition />
      <TotalValues />
    </StyledContainerLeft>
  );
};
