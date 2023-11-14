import styled from "styled-components";

export const StyledHeader = styled.header`
  margin-bottom: 35px;

  background: ${({ theme }) => theme.colors.greyOne};
  box-shadow: 0px 4px 32px -12px rgba(0, 0, 0, 0.25);

  h1 > span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
