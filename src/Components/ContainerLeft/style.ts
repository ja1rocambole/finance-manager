import styled from "styled-components";

export const StyledContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  @media screen and (min-width: 500px) {
    & {
      width: 35%;
    }
  }
`;
