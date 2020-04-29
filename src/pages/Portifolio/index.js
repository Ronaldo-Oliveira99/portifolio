import React from "react";
import { Container, makeStyles } from "@material-ui/core";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import NavBar from "../../components/Navbar";
import Grid from "../../components/Grid";
import tileData from "../../data/jobs.js";

const useStyles = makeStyles((theme) => ({
  gridList: {
    textAlign: "center",
    color: theme.palette.text.secondary,
  },

  gridImg: {
    padding: theme.spacing(1),
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
    fontSize: "10px",
    boxShadow: "3px 3px 6px rgba(5,5,4,0.5)",
  },
  title: {
    textAlign: "center",
    fontWeight: "bolder",
    backgroundColor: "white",
    marginTop: "25px",
  },
  description: {
    // backgroundColor: "red",
    padding: "95px 0",
  },
}));

const Portifolio = () => {
  const classes = useStyles();
  return (
    <>
      <NavBar />
      <Container className={classes.description} maxWidth="md">
        <Header />
        <h2 className={classes.title}>Alguns Trabalhos</h2>
        <Grid
          dates={tileData}
          styleCard={classes.gridCard}
          styleList={classes.gridList}
          styleImg={classes.gridImg}
        />
      </Container>
      <Footer />
    </>
  );
};

export default Portifolio;
