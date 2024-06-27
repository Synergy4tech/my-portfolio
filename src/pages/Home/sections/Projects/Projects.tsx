import { Container, Typography, styled } from "@mui/material";
import React from "react";
import ProjectBox from "../../../../components/ProjectBox/ProjectBox";
import { useTranslation } from "react-i18next";

const StyledProjects = styled("div")(() => ({
  backgroundColor: "#101626",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh", 
  textAlign: "center",
}));



const Projects = () => {
const { t } = useTranslation();
  return (
    <>
      <StyledProjects id="projects">
        <Container maxWidth="lg">
          <Typography color="#fff" variant="h3" textAlign="center" pb={4} pt={2}>
            {t('projetos')}
          </Typography>
          <ProjectBox />
        </Container>
      </StyledProjects>
    </>
  );
};

export default Projects;