import styled from "styled-components";

export const StyledFieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 0.3125rem;
  width: 20rem;
  height: 6.25rem;

  & > input {
    height: 3.125rem;
    background-color: ${({ theme }) => theme.colors.greyOne};
    border: solid 2px ${({ theme }) => theme.colors.greyOne};
    padding: 0px 16px 0px 16px;
    border-radius: 8px;
  }
  & > input::placeholder {
    color: ${({ theme }) => theme.colors.greyThree};
  }
`;
