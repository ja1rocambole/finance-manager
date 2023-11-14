import styled, { css } from "styled-components";
import { Button } from ".";

interface IStyledButton {
  sizeFull?: boolean;
  color: "primary" | "grey";
}

export const StyledButton = styled(Button)<IStyledButton>`
  font-weight: 400;
  font-size: 1rem;
  padding: 13px 20px;
  border-radius: 8px;

  ${({ color }) => {
    switch (color) {
      case "primary":
        return css`
          border: 2px solid ${({ theme }) => theme.colors.primary};
          background-color: ${({ theme }) => theme.colors.primary};
          color: ${({ theme }) => theme.colors.greyOne};
        `;
      case "grey":
        return css`
          border: 2px solid ${({ theme }) => theme.colors.greyTwo};
          background-color: ${({ theme }) => theme.colors.greyTwo};
          color: ${({ theme }) => theme.colors.greyFour};
        `;
      default:
        break;
    }
  }}

  ${({ sizeFull }) =>
    sizeFull &&
    css`
      width: 100%;
    `}

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryTwo};
    border: 2px solid ${({ theme }) => theme.colors.primaryTwo};
    color: ${({ theme }) => theme.colors.greyTwo};
  }
`;
