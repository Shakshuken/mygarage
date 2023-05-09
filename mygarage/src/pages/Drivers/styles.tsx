import styled from "@emotion/styled";

export const DriverGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 403px);
  grid-row-gap: 20px;
  grid-column-gap: 12px;
  margin-top: 30px;
`;

export const DriverCardBox = styled.div`
  display: flex;
  width: calc(100% - 30px);
  max-width: 403px;
  height: 207px;
  background-color: #393636;
  padding: 10px 15px;
  border-radius: 12px;
  position: relative;
`;

export const DriverImg = styled.img`
  position: absolute;
  top: 10px;
  right: 15px;
  height: 69px;
  width: 69px;
  border-radius: 6px;
`;

export const DriverContentBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: calc(87px + 10px);
`;
