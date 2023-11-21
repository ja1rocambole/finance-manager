import styled from "styled-components";

export const StyledTotalValues = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 4px;

  width: 100%;
  max-width: 355px;
  max-height: 96px;

  padding: 20px 15px;

  display: flex;
  justify-content: space-between;

  & > div {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  & > p {
    font-weight: 700;
  }
`;
