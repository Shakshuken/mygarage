/* @jsxImportSource @emotion/react */

import { Link } from "react-router-dom";
import {
  HeaderBox,
  LinkBox,
  LinkLabel,
  LoginLabel,
  Logo,
  NavBox,
} from "./styles";
import { css } from "@emotion/react";

const Header = () => {
  return (
    <HeaderBox>
      <NavBox>
        <Logo>
          <Link
            css={css`
              color: #f5f5f5;
              text-decoration: none;
            `}
            to='/'
          >
            GARAGE
          </Link>
        </Logo>
        <LinkBox>
          <LinkLabel>
            <Link
              css={css`
                color: #f5f5f5;
                text-decoration: none;
              `}
              to='/cars'
            >
              Cars
            </Link>
          </LinkLabel>
          <LinkLabel>
            <Link
              css={css`
                color: #f5f5f5;
                text-decoration: none;
              `}
              to='/drivers'
            >
              Drivers
            </Link>
          </LinkLabel>
          <LinkLabel>
            <Link
              css={css`
                color: #f5f5f5;
                text-decoration: none;
              `}
              to='/stats'
            >
              Stats
            </Link>
          </LinkLabel>
        </LinkBox>
      </NavBox>
      <Link
        css={css`
          display: flex;
          color: #f5f5f5;
          text-decoration: none;
        `}
        to='/login'
      >
        <LoginLabel>Login</LoginLabel>
        <img
          src='/icons/material-symbols_arrow-drop-down-rounded.svg'
          alt='arrow down'
        />
      </Link>
    </HeaderBox>
  );
};

export default Header;
