import styled from "@emotion/styled";

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  background-color: #393636;
`;

export const FlexContainer = styled.div`
  display: flex;
  gap: 98px;
  margin-top: 42px;
`;

export const FlexTable = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  flex-grow: 1;
`;

export const DriversGridContainer = styled.div`
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
