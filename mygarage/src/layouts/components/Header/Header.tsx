/* @jsxImportSource @emotion/react */

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  HeaderBox,
  LinkBox,
  LinkLabel,
  LoginLabel,
  Logo,
  NavBox,
} from "./styles";
import { css } from "@emotion/react";
import { logoutSuccess, selectIsAuthenticated } from "../../../store/authSlice";
import useLogout from "../../../hooks/useLogout";

const Header = () => {
  const dispatch = useDispatch();
  const { logout } = useLogout();
  const isAuthenticated = useSelector(selectIsAuthenticated);

  const navigate = useNavigate();

  const handleLogout = () => {
    if (!isAuthenticated) {
      return;
    } else {
      logout();
      dispatch(logoutSuccess());
      localStorage.clear();
    }
  };

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
        onClick={isAuthenticated ? handleLogout : () => navigate("/login")}
      >
        <LoginLabel>{isAuthenticated ? "Logout" : "Login"}</LoginLabel>
        <img
          src='/icons/material-symbols_arrow-drop-down-rounded.svg'
          alt='arrow down'
        />
      </Link>
    </HeaderBox>
  );
};

export default Header;
