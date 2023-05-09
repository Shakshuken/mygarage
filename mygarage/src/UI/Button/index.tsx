/* @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { FC, PropsWithChildren } from "react";

type ButtonProps = { color: "default" | "danger" };

const colorToCodeMap = {
  default: "#53B6F5",
  danger: "#D74B4B",
};

const CustomButton = styled.button`
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
`;

const Button: FC<PropsWithChildren<ButtonProps>> = ({ children, color }) => {
  const colorCode = colorToCodeMap[color];

  return (
    <CustomButton
      css={css`
        background-color: ${colorCode};
      `}
    >
      {children}
    </CustomButton>
  );
};

export default Button;
