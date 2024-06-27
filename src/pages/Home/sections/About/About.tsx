import styled from "@emotion/styled";
import { Container, Divider, Typography } from "@mui/material";
import GridContainer from "../../../../components/StyledButton/StyledMiniCards";
import StyledCard from "../../../../components/StyledButton/StyledCard";


const StyledAbout = styled.div(() => ({
  backgroundColor: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",  
}));

const About = () => {



  return (
    <>
      <StyledAbout id="about">
        <Container maxWidth="lg">
          <Typography color="primary" variant="h3" textAlign="center" pb={2} pt={4}>
             Sobre mim
          </Typography>

          <StyledCard />

          <Typography color="primary" align="justify" pb={2} fontSize={16}>
              Somos uma equipe diversificada e dinâmica, composta por quatro estudantes determinados a conquistar o mercado. Entre nós, há dois estudantes de engenharia, um cientista de dados e um estudante especializado em gestão de pessoas e marketing. Combinamos nossas habilidades e paixões para traçar caminhos inovadores. Nosso objetivo é crescer e evoluir continuamente, buscando desafios que nos impulsionem a alcançar resultados excepcionais. Estamos prontos para enfrentar as demandas do mercado e contribuir significativamente para o seu desenvolvimento.
          </Typography>

          <Divider />
          <div id="skills">
            <Typography color="primary" variant="h3" textAlign="center" pb={2} pt={4}>
              Skills
            </Typography>
            <GridContainer />
          </div>
        </Container>
      </StyledAbout>
    </>
  );
};

export default About;