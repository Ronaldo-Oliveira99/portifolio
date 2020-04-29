import React from "react";
import { Container, makeStyles } from "@material-ui/core";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import NavBar from "../../components/Navbar";
import Grid from "../../components/Grid";
import iconsData from "../../data/techs.js";
import { Description } from "../../components/Title";

const useStyles = makeStyles((theme) => ({
  gridList: {
    textAlign: "center",
    color: theme.palette.text.secondary,
  },

  gridImg: {
    padding: theme.spacing(3),
    textAlign: "center",
    color: theme.palette.text.secondary,
    backgroundColor: "ghostwhite",
    borderRadius: "5px",
    marginBotton: "15px",
    height: "200px",
    width: "200px",
  },
  gridCard: {
    margin: "5px",
    padding: "20px",
    borderRadius: "5px",
    backgroundColor: "white",
    boxShadow: "3px 3px 6px rgba(5,5,4,0.5)",
  },
  title: {
    textAlign: "center",
    fontWeight: "bolder",
    backgroundColor: "white",
  },
  description: {
    // backgroundColor: "red",
    padding: "95px 0",
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <>
      <NavBar />
      <Container className={classes.description} maxWidth="md">
        <Header />
        <Description className={classes.description} />
        <h2 className={classes.title}>Alguns Conhecimentos</h2>
        <Grid
          dates={iconsData}
          styleCard={classes.gridCard}
          styleList={classes.gridList}
          styleImg={classes.gridImg}
        />
      </Container>
      <Footer />
    </>
  );
};

export default Home;
