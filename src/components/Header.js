import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

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
  color: black;
  justify-content: space-between;
  align-items: center;
`;

let Page = styled.div`
  padding: 0 15px;
  cursor: pointer;
  color: black;

  &:active {
    color: green;
  }
`;

const Header = (props) => {
  return (
    <NavigationBar>
      <NavLogo>Fruit Emporium</NavLogo>
      <NavLinks>
        <Page>
          <Link to={"/"}>Homepage</Link>
        </Page>
        <Page>
          <Link to={"/about"}>About</Link>
        </Page>
      </NavLinks>
    </NavigationBar>
  );
};
export default Header;
