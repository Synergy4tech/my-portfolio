import { Container, Typography, styled } from "@mui/material";
import ProjectBox from "../../../../components/ProjectBox/ProjectBox";


const StyledProjects = styled("div")(() => ({
  backgroundColor: "#101626",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh", 
  textAlign: "center",
}));



const Projects = () => {

  return (
    <>
      <StyledProjects id="projects">
        <Container maxWidth="lg">
          <Typography color="#fff" variant="h3" textAlign="center" pb={4} pt={2}>
              Projetos
          </Typography>
          <ProjectBox />
        </Container>
      </StyledProjects>
    </>
  );
};

export default Projects;