/* @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { FC, PropsWithChildren } from "react";
import Header from "./components/Header/Header";

const AppLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />

      <div
        css={css`
          position: relative;
          height: calc(100vh - 59px);
          width: 100%;
        `}
      >
        <div
          css={css`
            background: url("/icons/wp10166268-cargo-van-wallpapers.jpg");
            filter: brightness(0.5);
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            position: absolute;
            height: 100%;
            width: 100%;
            z-index: -1;
          `}
        />
        <div
          css={css`
            margin-top: 59px;
            padding-top: 30px;
            padding-bottom: 30px;
            padding-left: 100px;
            padding-right: 100px;
            height: calc(100vh - 119px);
            position: relative;
          `}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default AppLayout;
