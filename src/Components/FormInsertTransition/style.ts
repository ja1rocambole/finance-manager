import styled from "styled-components";

export const StyledFormInsertTrasition = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 4px;

  width: 100%;
  max-width: 355px;
  max-height: 430px;

  padding: 20px 15px;

  form > * {
    width: 100%;
  }

  & > form {
    display: flex;
    flex-direction: column;
  }

  select {
    box-sizing: border-box;
    padding: 13px 16px;
    background: ${({ theme }) => theme.colors.greyOne};
    border: 2px solid ${({ theme }) => theme.colors.greyOne};
    border-radius: 8px;

    margin-bottom: 22px;
  }

  option {
    padding: 13px 16px;
    background: ${({ theme }) => theme.colors.greyOne};
    border: 2px solid ${({ theme }) => theme.colors.greyOne};
    border-radius: 8px;
  }
`;
