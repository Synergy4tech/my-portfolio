import { Box, Grid, Typography, styled } from "@mui/material";
import StyledButton from "../StyledButton/StyledButton";
import { motion } from "framer-motion";

const StyledImg = styled("img")(() => ({
  width: "80%",
  maxWidth: "200px",
  objectFit: "contain",
}));

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
};

const itemVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const ProjectBox = ({
  title,
  dateRange,
  imageUrl,
  description,
  technologies,
  viewProjectUrl,
  viewCodeUrl,
}: {
  title: string;
  dateRange: string;
  imageUrl: string;
  description: string;
  technologies: string;
  viewProjectUrl: string;
  viewCodeUrl: string;
}) => (
  <Grid item xs={12} md={5}>
    <motion.div variants={itemVariants}>
      <Box
        sx={{
          border: "1px solid grey",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          minHeight: "400px",
          maxHeight: "600px",
          overflow: "hidden",
        }}
        p={2}
      >
        <Typography color="#fff" variant="h6" noWrap>{title}</Typography>
        <Typography color="#fff" fontSize={12} noWrap>{dateRange}</Typography>
        <Box textAlign="center" flex="1" display="flex" alignItems="center" justifyContent="center">
          <StyledImg src={imageUrl} alt={title} />
        </Box>
        <Typography color="#fff" pb={2} pl={2} fontSize={14} style={{ overflow: "hidden", textOverflow: "ellipsis" }}>
          {description}
        </Typography>
        <Typography color="#fff" pb={2} pl={2} fontSize={14} noWrap>
          Technologies: {technologies}
        </Typography>
        <Grid container display="flex" justifyContent="center" spacing={3}>
          <Grid item xs={12} md={6} display="flex" justifyContent="center">
            <StyledButton onClick={() => window.open(viewProjectUrl, "_blank")}>
              <Typography fontSize={12}>View Project</Typography>
            </StyledButton>
          </Grid>
          <Grid item xs={12} md={6} display="flex" justifyContent="center">
            <StyledButton onClick={() => window.open(viewCodeUrl, "_blank")}>
              <Typography fontSize={12}>View Code</Typography>
            </StyledButton>
          </Grid>
        </Grid>
      </Box>
    </motion.div>
  </Grid>
);

const ProjectBoxes = () => {
  const projectData = [
    {
      title: "Bot linkedIn",
      dateRange: "jun 2024 - jun 2024",
      imageUrl: "https://raw.githubusercontent.com/Synergy4tech/Bot-LinkedIn/main/src/assets/preview.jpg",
      description:
        "Este é um bot desenvolvido em Python usando Selenium para automatizar o processo de conexões no LinkedIn. Ele é projetado para ajudar a expandir sua rede de contatos de maneira eficiente e sem esforço manual.",
      technologies: "Python, Selenium, CustomTkinter",
      viewProjectUrl: "https://github.com/Synergy4tech/Bot-LinkedIn/releases/tag/bot",
      viewCodeUrl: "https://github.com/Synergy4tech/Bot-LinkedIn",
    },
    
  ];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.5 }}
      variants={containerVariants}
    >
      <Grid container display="flex" justifyContent="center" spacing={2} marginBottom={3}>
        {projectData.map((project, index) => (
          <ProjectBox key={index} {...project} />
        ))}
      </Grid>
    </motion.div>
  );
};

export default ProjectBoxes;
