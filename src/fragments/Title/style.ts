import styled, { css } from "styled-components";
import { Title } from ".";

interface IStyledText {
  color:
    | "primary"
    | "primaryTwo"
    | "secondary"
    | "greyFour"
    | "greyThree"
    | "greyTwo"
    | "greyOne";
  title: "one" | "two" | "three" | "four";
}

export const StyledTitle = styled(Title)<IStyledText>`
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

  ${({ title }) => {
    switch (title) {
      case "one":
        return css`
          font-weight: 700;
          font-size: 2.375rem;
        `;
      case "two":
        return css`
          font-weight: 700;
          font-size: 1.375rem;
        `;
      case "three":
        return css`
          font-weight: 700;
          font-size: 1rem;
        `;
      case "four":
        return css`
          font-weight: 400;
          font-size: 0.75rem;
        `;
    }
  }}
`;
