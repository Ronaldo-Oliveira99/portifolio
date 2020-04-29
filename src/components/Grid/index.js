import React from "react";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";

const Link = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px 10px;
  /* background: papayawhip; */
  color: palevioletred;
`;

const H3 = styled.p`
  font-size: 20px;
  transition: 0.25s;

  ${Link}:hover & {
    color: rebeccapurple;
    font-size: 20.5px;
    text-decoration: none;
  }
`;

const P = styled.p`
  font-size: 15px;
`;

const Grids = ({ dates, styleCard, styleList, styleImg, href }) => {
  return (
    <>
      <Grid container justify="center">
        {dates.map((tile, key) => (
          <Grid
            key={key}
            className={styleList}
            item
            xs={10}
            sm={6}
            md={4}
            lg={4}
          >
            <div className={styleCard}>
              <Link
                style={{ textDecoration: "none" }}
                href={tile.src}
                target="_blank"
              >
                <img src={tile.img} alt={tile.title} className={styleImg} />
                <H3>{tile.title}</H3>
              </Link>
              <P>
                <span>{tile.author}</span>
              </P>
            </div>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Grids;
