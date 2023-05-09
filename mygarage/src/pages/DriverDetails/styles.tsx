import styled from "@emotion/styled";

export const DriverContainer = styled.div`
  display: flex;
  gap: 40px;
  margin-top: 40px;
  margin-bottom: 4px;
`;

export const DriverImg = styled.img`
  height: 300px;
  width: 300px;
  border-radius: 12px;
  box-shadow: 0px 10px 20px 3px rgba(0, 0, 0, 0.5);
`;

export const GridContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 63px;
`;

export const TableGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  background-color: #393636;
`;

export const TableElement = styled.div`
  color: white;
  padding-left: 16px;
  padding-top: 5px;
  padding-bottom: 5px;
  border-bottom: 1px solid #595959;
  border-right: 1px solid #595959;
`;
