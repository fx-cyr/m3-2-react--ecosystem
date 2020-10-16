import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import "./Header.css";

let NavigationBar = styled.div`
  margin: 65px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  color: black;
`;

let NavLogo = styled.div`
  font-weight: bolder;
  font-size: 28px;
`;

let NavLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

let Page = styled.div`
  padding: 0 15px;
  cursor: pointer;
  text-decoration: underline none;
`;

const Header = (props) => {
  return (
    <NavigationBar>
      <NavLogo>Fruit Emporium</NavLogo>
      <NavLinks>
        <Page>
          <NavLink
            exact
            to={"/"}
            className="un-ActiveLink"
            activeClassName="activeLink"
          >
            Homepage
          </NavLink>
        </Page>
        <Page>
          <NavLink
            exact
            to={"/about"}
            className="un-ActiveLink"
            activeClassName="activeLink"
          >
            About
          </NavLink>
        </Page>
      </NavLinks>
    </NavigationBar>
  );
};
export default Header;
