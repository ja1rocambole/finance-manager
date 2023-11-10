import styled, { css } from "styled-components";
import { Button } from ".";

interface IStyledButton {
  sizeFull?: boolean;
}

export const StyledButton = styled(Button)<IStyledButton>`
  font-weight: 400;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.greyOne};
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 13px 20px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 8px;

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
