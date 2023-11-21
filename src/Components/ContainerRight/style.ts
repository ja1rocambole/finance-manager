import styled from "styled-components";

export const StyledContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 20px;

  & > div {
    width: 100%;

    max-width: 355px;
  }
  & > div > h3 {
    margin: 16px 0 16px 0;
  }
  & > div > button {
    font-size: 0.75rem;
    padding: 6px 10px;
    margin: 0 6px 10px 0;
  }
  & > div > ul {
    display: flex;
    flex-direction: column;
    gap: 13px;
  }

  @media screen and (min-width: 500px) {
    width: 60%;
    align-items: start;

    & > div {
      width: 100%;
      max-width: none;
    }
  }
`;
