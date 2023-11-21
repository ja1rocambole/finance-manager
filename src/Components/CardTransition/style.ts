import styled, { css } from "styled-components";
import { CardTrasition } from ".";

export const StyledCardTransition = styled(CardTrasition)`
  ${({ type }) => {
    switch (type) {
      case "inflow":
        return css`
          background-color: ${({ theme }) => theme.colors.primary};
        `;
      case "outflow":
        return css`
          background-color: ${({ theme }) => theme.colors.greyTwo};
        `;

      default:
        break;
    }
  }}

  & {
    width: 100%;

    max-width: 355px;
    padding: 14px 12px;
    box-sizing: border-box;
    background: ${({ theme }) => theme.colors.greyOne};
    position: relative;

    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  &:hover {
    box-shadow: 0px 0px 32px -12px rgba(0, 0, 0, 0.25);
  }

  & > div:nth-of-type(1) {
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 4px 0 0 4px;
    height: 100%;
    width: 4px;
    background-color: ${({ theme }) => theme.colors.secondary};
  }

  & > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  & > div:nth-child(3) {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  & > div > button {
    width: 48px;
    height: 20px;

    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
  }

  @media screen and (min-width: 500px) {
    & {
      max-width: none;
      flex-direction: row;
      justify-content: space-between;
    }

    & > div:nth-child(2) {
      margin-bottom: 18px;
    }
    & > div:nth-child(3) {
      justify-content: flex-end;
      gap: 5px;
    }
  }
`;
