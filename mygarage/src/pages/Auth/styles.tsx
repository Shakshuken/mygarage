import styled from "@emotion/styled";

export const GlassBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  max-width: calc(432px - 40px);
  width: 100%;
  top: calc(272px - 59px);
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  padding: 30px 20px;
  background: linear-gradient(
    121.09deg,
    rgba(0, 0, 0, 0.564) 30.34%,
    rgba(79, 79, 79, 0.556166) 45.04%,
    rgba(46, 46, 46, 0.54) 59.74%,
    rgba(20, 20, 20, 0.54) 74.44%,
    rgba(14, 14, 14, 0.54) 89.14%,
    rgba(0, 0, 0, 0.54) 103.85%
  );
  backdrop-filter: blur(3px);
  border-radius: 12px;
`;

export const LoginLabel = styled.p`
  font-family: "Zen Dots";
  color: #f5f5f5;
  font-size: 64px;
  margin: 0;
  text-align: center;
  padding-bottom: 30px;
`;

export const LoginBtn = styled.button`
  width: 100%;
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  border-radius: 12px;
  background-color: #8c2c2c;
  border: 1px solid#A34242;
  color: #f5f5f5;
  font-family: "Barlow Condensed";
  font-size: 24px;
  font-weight: 600;
  cursor: pointer;
`;
