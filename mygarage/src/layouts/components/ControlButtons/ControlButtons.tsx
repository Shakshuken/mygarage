/* @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { ButtonBox, ControlBtn } from "./styles";
import { Link } from "react-router-dom";

const ControlButtons = () => {
  return (
    <ButtonBox>
      <Link
        css={css`
          color: #f5f5f5;
          text-decoration: none;
        `}
        to='/create-driver'
      >
        <ControlBtn>Create New Driver</ControlBtn>
      </Link>

      <Link
        css={css`
          color: #f5f5f5;
          text-decoration: none;
        `}
        to='/create-car'
      >
        <ControlBtn>Create New Car</ControlBtn>
      </Link>
    </ButtonBox>
  );
};

export default ControlButtons;
