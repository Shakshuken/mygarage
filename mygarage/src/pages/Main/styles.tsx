/* @jsxImportSource @emotion/react */

import styled from "@emotion/styled";

export const Greeting = styled.p`
  font-family: "Zen Dots";
  color: #f5f5f5;
  font-size: 64px;
  margin: 0;
`;

export const GlassBox = styled.div`
  position: absolute;
  max-width: calc(888px - 40px);
  width: 100%;
  top: calc(420px - 59px);
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  padding: 20px;
  background: linear-gradient(
    121.09deg,
    rgba(0, 0, 0, 0.376) 30.34%,
    rgba(79, 79, 79, 0.370778) 45.04%,
    rgba(46, 46, 46, 0.36) 59.74%,
    rgba(20, 20, 20, 0.36) 74.44%,
    rgba(14, 14, 14, 0.36) 89.14%,
    rgba(0, 0, 0, 0.36) 103.85%
  );
  backdrop-filter: blur(3px);
  border-radius: 12px;
`;
