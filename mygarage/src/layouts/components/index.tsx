/* @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

export const ControlButtons = () => {
  return (
    <div
      css={css`
        display: flex;
        gap: 11px;
        justify-content: flex-end;
      `}
    >
      <button
        css={css`
          display: flex;
          align-items: center;
          justify-content: center;
          width: 196px;
          padding: 10px 20px;
          border-radius: 12px;
          background-color: #8c2c2c;
          border: 1px solid#A34242;
          color: #f5f5f5;
          font-family: "Barlow Condensed";
          font-size: 24px;
          font-weight: 400;
          cursor: pointer;
        `}
      >
        Create New Driver
      </button>
      <button
        css={css`
          display: flex;
          align-items: center;
          justify-content: center;
          width: 196px;
          padding: 10px 20px;
          border-radius: 12px;
          background-color: #8c2c2c;
          border: 1px solid#A34242;
          color: #f5f5f5;
          font-family: "Barlow Condensed";
          font-size: 24px;
          font-weight: 400;
          cursor: pointer;
        `}
      >
        Create New Car
      </button>
    </div>
  );
};
