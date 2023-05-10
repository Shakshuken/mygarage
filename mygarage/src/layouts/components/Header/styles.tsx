import styled from "@emotion/styled";

export const HeaderBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 0;
  left: 0%;
  height: 59px;
  width: calc(100% - 200px);
  padding: 0 100px;
  background-color: #a34242;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const NavBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.p`
  font-family: "Zen Dots";
  color: #f5f5f5;
  font-size: 24px;
  cursor: pointer;
  margin-right: 60px;
`;

export const LinkBox = styled.div`
  display: flex;
  gap: 30px;
`;

export const LinkLabel = styled.p`
  font-family: "Zen Dots";
  color: #f5f5f5;
  font-size: 20px;
  cursor: pointer;
`;

export const LoginLabel = styled.p`
  font-family: "Barlow";
  font-size: 20px;
  font-weight: 600;
  color: #f5f5f5;
`;
