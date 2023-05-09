import styled from "@emotion/styled";

export const CarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 390px);
  grid-column-gap: 29px;
  grid-row-gap: 20px;
  margin-top: 30px;
`;

export const CarCardBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 390px;
  height: 375px;
`;

export const CarImg = styled.img`
  height: 268px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`;

export const CardContentBox = styled.div`
  background-color: #393636;
  padding: 10px 15px;
`;

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 30px;
`;
