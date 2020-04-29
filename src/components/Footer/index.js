import React, { Fragment } from "react";
import styled from "styled-components";
import SocialIcons from "../SocialIcons";

const MyFooter = styled.footer`
  background-color: #1f1f1f;
  display: flex;
  justify-content: space-between;
  padding: 100px;

  @media screen and (max-width: 770px) {
    flex-direction: column-reverse;
    padding: 15px;
  }
`;
const RightFooter = styled.footer`
  color: white;
  display: flex;
  flex-direction: column;
  align-self: center;
  text-align: center;
  @media screen and (max-width: 770px) {
    justify-content: center;
  }
`;
const LeftFooter = styled.footer`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 770px) {
    align-self: center;
  }
`;
const Footer = () => {
  const myStyle = {
    fontSize: "40px",
    marginRight: "10px",
    color: "white",
  };
  return (
    <Fragment>
      <MyFooter>
        <LeftFooter>
          <SocialIcons style={myStyle} />
        </LeftFooter>
        <RightFooter>
          <p>© 2020 Ronaldo Luiz - Desenvolvedor Front End</p>
          <p>Desenvolvido em: React | Styled Components | Material-ui</p>
        </RightFooter>
      </MyFooter>
    </Fragment>
  );
};

export default Footer;
