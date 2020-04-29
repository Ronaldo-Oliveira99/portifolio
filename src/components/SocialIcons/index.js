import React from "react";
import styled from "styled-components";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";

const DivIcons = styled.div`
  display: flex;
  padding: 10px;
  min-width: 100px;
`;

const IconsSocial = ({ style }) => {
  return (
    <DivIcons>
      <a
        href="https://www.facebook.com/ronaldo.oliveira.98434997"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FacebookIcon style={style} />
      </a>
      <a
        href="https://www.linkedin.com/in/rluiz99"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedInIcon style={style} />
      </a>
      <a
        href="https://github.com/Ronaldo-Oliveira99"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHubIcon style={style} />
      </a>
      <a
        href="http://api.whatsapp.com/send?1=pt_BR&phone=5532999750781"
        target="_blank"
        rel="noopener noreferrer"
      >
        <WhatsAppIcon style={style} />
      </a>
    </DivIcons>
  );
};
export default IconsSocial;
