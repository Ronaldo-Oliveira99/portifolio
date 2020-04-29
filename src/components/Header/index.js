import React from "react";
import styled from "styled-components";
import { Title } from "../../components/Title";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
`;

const Header = () => {
  return (
    <Div>
      <Title />
    </Div>
  );
};

export default Header;
