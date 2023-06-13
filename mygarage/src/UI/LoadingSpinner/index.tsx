/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

const LoadingSpinner = () => {
  return (
    <div
      css={css`
        position: fixed;
        top: calc(50% - 40px);
        left: 50%;
        border: 5px solid #f3f3f3;
        border-top: 5px solid transparent;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        animation: spin 1s linear infinite;

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}
    />
  );
};

export default LoadingSpinner;
