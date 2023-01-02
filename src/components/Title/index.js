import React from "react";
import styled from "styled-components";

const DivHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: powderblue;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 3px 3px 6px rgba(5, 5, 4, 0.5);
`;

const Desc = styled.p`
  font-size: 20px;
  text-align: start;
  line-height: 37px;
  padding: 10px;
`;

const TagSobre = styled.div`
  padding: 35px;
`;
const Plogo = styled.h1`
  font-family: "Rock Salt", cursive;
  font-size: 64px;
  color: ghostwhite;
  padding: 5px 20px;
`;
const P = styled.p`
  padding-left: 20px;
  font-size: 24px;
  font-family: "Overpass Mono", monospace;
`;

const Title = () => {
  return (
    <DivHeader>
      <Plogo>Ronaldo</Plogo>
      <Plogo>Luiz</Plogo>
      <P>Um aprendiz FrontEnd 2</P>
    </DivHeader>
  );
};

const Description = () => {
  return (
    <TagSobre>
      <h2>Sobre Mim</h2>
      <Desc>
        Olá, Seja bem vindo ao meu site!<br></br> Me chamo Ronaldo de Oliveira
        Luiz, sou nascido e criado na capital de São Paulo e tenho formação em
        Tecnólogo em informática para gestão de negócio na Fatec Jundiaí.
        <br></br>Em minha trajetória profissional, atuei na área de suporte, mas
        o desenvolvimento web sempre foi uma atividade amadora para mim.
        Arriscava uns sites no antigo dreamweaver mas nada muito profissional.
        Porém o tempo passou e agora entrei de cabeça no desenvolvimento web.
        Nesta nova etapa, comecei estudando Javascript e logo após conheci o
        React e me interessei bastante neste Framework. No começo de 2020
        participei do AceleraDev da codenation, onde adquiri atraves dos estudos
        e desafios, um aprendizado mais profundo adicionando redux e styled
        components no meu workflow. <br></br>Mas tenho muito que aprender. Desenvolvi este
        site e peço desculpas pois ele ainda está em obras e melhorias, mas meus
        poucos projetos precisavam de um lugar para morar rs, então abriguei
        eles aqui com pouco acabamento mesmo. Porém conforme irei aprendendo
        novas técnicas vou aplicando aqui e deixar mais apresentável. <br></br>
        No desenvolvimento deste site aprendi a usar Material-ui, gostei
        bastante dos recursos de estilização e Grids. Aprendi também a utilizar
        mapas através do Leaflet, achei bem simples a utilização, e também
        porque o Google estava pedindo cartão de credito e o meu não aceitou rs.
        Há males que vem para o bem. Coloquei nos Mapas meus Endereços fisícos,
        caso alguem queira me contratar :). O projetos Apresentados aqui foram
        feitos no aceleraDev e no bootcamp online freeCodeCamp.org. Mas ainda
        colocarei mais projetos por aqui!!<br></br> Agradeço a sua visita e
        volte sempre!!
      </Desc>
    </TagSobre>
  );
};

export { Title, Description };
