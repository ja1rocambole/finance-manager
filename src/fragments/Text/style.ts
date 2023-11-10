import styled, { css } from "styled-components";
import { Text } from ".";

interface IStyledText {
  color:
    | "primary"
    | "primaryTwo"
    | "secondary"
    | "greyFour"
    | "greyThree"
    | "greyTwo"
    | "greyOne";
  text: "one" | "two";
}

export const StyledText = styled(Text)<IStyledText>`
  ${({ color }) => {
    switch (color) {
      case "primary":
        return css`
          color: ${({ theme }) => theme.colors.primary};
        `;
      case "primaryTwo":
        return css`
          color: ${({ theme }) => theme.colors.primaryTwo};
        `;
      case "secondary":
        return css`
          color: ${({ theme }) => theme.colors.secondary};
        `;
      case "greyFour":
        return css`
          color: ${({ theme }) => theme.colors.greyFour};
        `;
      case "greyThree":
        return css`
          color: ${({ theme }) => theme.colors.greyThree};
        `;
      case "primaryTwo":
        return css`
          color: ${({ theme }) => theme.colors.greyTwo};
        `;
      case "greyOne":
        return css`
          color: ${({ theme }) => theme.colors.greyOne};
        `;

      default:
        break;
    }
  }}

  ${({ text }) => {
    switch (text) {
      case "one":
        return css`
          font-weight: 400;
          font-size: 1rem;
        `;
      case "two":
        return css`
          font-weight: 400;
          font-size: 0.75rem;
        `;

      default:
        break;
    }
  }}
`;
