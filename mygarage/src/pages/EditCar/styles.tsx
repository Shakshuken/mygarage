import styled from "@emotion/styled";

export const ButtonBox = styled.div`
  margin-top: 5px;
`;

export const MainBox = styled.div`
  margin-top: 30px;
  padding: 0 200px;
  width: calc(100% - 400px);
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Button = styled.button`
  width: 86px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 5px 10px;
  color: #f5f5f5;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  background-color: #53b6f5;
`;
