import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../../index.css";

const Div = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  background-color: ghostwhite;
  height: 10%;
  width: 100%;
  color: powderblue;
`;
const MenuLink = styled(Link)`
  border-radius: 5px;
  font-weight: 700;
  font-size: 22px;
  margin: 8px;
  padding: 8px;
  color: rebeccapurple;
  &:hover {
    transition: 0.35s;
    /* color: rebeccapurple; */
    background-color: rebeccapurple;
    text-decoration: none;
    color: white;
  }
`;

const NavBar = () => {
  return (
    <Div>
      <MenuLink to="/">Sobre </MenuLink>
      <MenuLink to="/portifolio">Portifolio </MenuLink>
      <MenuLink to="/contact">Contato </MenuLink>
    </Div>
  );
};

export default NavBar;
