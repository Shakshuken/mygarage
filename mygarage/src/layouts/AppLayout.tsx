/* @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { FC, PropsWithChildren } from "react";

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

const Header = () => {
  return (
    <div
      css={css`
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
      `}
    >
      <div
        css={css`
          display: flex;
          align-items: center;
          justify-content: center;
        `}
      >
        <p
          css={css`
            font-family: "Zen Dots";
            color: #f5f5f5;
            font-size: 24px;
            cursor: pointer;
            margin-right: 60px;
          `}
        >
          GARAGE
        </p>
        <div
          css={css`
            display: flex;
            gap: 30px;
          `}
        >
          <p
            css={css`
              font-family: "Zen Dots";
              color: #f5f5f5;
              font-size: 20px;
              cursor: pointer;
            `}
          >
            Cars
          </p>
          <p
            css={css`
              font-family: "Zen Dots";
              color: #f5f5f5;
              font-size: 20px;
              cursor: pointer;
            `}
          >
            Drivers
          </p>
          <p
            css={css`
              font-family: "Zen Dots";
              color: #f5f5f5;
              font-size: 20px;
              cursor: pointer;
            `}
          >
            Stats
          </p>
        </div>
      </div>
      <div
        css={css`
          display: flex;
          cursor: pointer;
        `}
      >
        <p
          css={css`
            font-family: "Barlow";
            font-size: 20px;
            font-weight: 600;
            color: #f5f5f5;
          `}
        >
          Login
        </p>
        <img
          src='/icons/material-symbols_arrow-drop-down-rounded.svg'
          alt='arrow down'
        />
      </div>
    </div>
  );
};

export default AppLayout;
