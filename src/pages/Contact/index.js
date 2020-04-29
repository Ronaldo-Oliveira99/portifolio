import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import NavBar from "../../components/Navbar";
import Maps from "../../components/Maps";
import styled from "styled-components";
import SocialIcons from "../../components/SocialIcons";
import { Container, makeStyles } from "@material-ui/core";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import EmailIcon from "@material-ui/icons/Email";
// import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  description: {
    // backgroundColor: "red",
    padding: "95px 0",
  },
}));

const Div = styled.div`
  display: flex;
  width: 100%;
  padding: 10px;
  flex-direction: column;
  @media screen and (max-width: 769px) {
    flex-direction: column;
    font-size: 36px;
  }
`;
const DivMap = styled.div`
  width: 100%;
  padding: 10px;
  box-shadow: 3px 3px 6px rgba(5, 5, 4, 0.5);
  @media screen and (max-width: 769px) {
    flex-direction: column;
    font-size: 36px;
  }
`;
const DivSection = styled.section`
  display: flex;
  min-width: 320px;
  padding: 95px 0;
  @media screen and (max-width: 769px) {
    flex-direction: column;
  }
`;
const DivContact = styled.div`
  display: flex;

  @media screen and (max-width: 769px) {
    flex-direction: column;
  }
`;
const Link = styled.a`
  display: flex;
  font-size: 22px;
  &:hover {
    transition: 0.25s;
    color: powderblue;
    text-decoration: none;
  }
  @media screen and (max-width: 769px) {
    flex-direction: column;
  }
`;

const Contact = () => {
  const classes = useStyles();
  const mysty = {
    fontSize: "60px",
    marginRight: "10px",
    color: "gray",
  };
  return (
    <>
      <NavBar />
      <Container className={classes.description} maxWidth="md">
        <Header />
        <DivSection>
          <Div>
            <h1>Onde me encontrar:</h1>
            <SocialIcons style={mysty} />
            <hr></hr>
            <DivContact>
              <EmailIcon />
              <h4>ronaldoluiz747@gmail.com </h4>
            </DivContact>
            <DivContact>
              <AttachFileIcon />
              <Link
                href="https://drive.google.com/file/d/1SPMD6ph4irlwnvNgK1YOeHT4xB_2sFsZ/view?usp=sharing"
                target="_blank"
              >
                Baixar Meu Curriculo
              </Link>
            </DivContact>
          </Div>
          <DivMap>
            <Maps />
          </DivMap>
        </DivSection>
      </Container>
      <Footer />
    </>
  );
};

export default Contact;
