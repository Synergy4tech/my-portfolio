import { Container, Typography, styled } from "@mui/material";
import ProjectBoxs from "../../../../components/ProjectBox/ProjectBox";


const Projects = () => {
  const StyledProjects = styled("div")(() => ({
    backgroundColor: "#091033",
    
    display: "flex",
    alignItems: "center",
  }));

  

  return (
    <>
      <StyledProjects id="projects">
        <Container maxWidth="lg">
            <Typography color="#fff" variant="h3" textAlign="center" pb={2} pt={4}>Projetos</Typography>
            <ProjectBoxs/>
        </Container>
      </StyledProjects>
    </>
  );
};

export default Projects;
