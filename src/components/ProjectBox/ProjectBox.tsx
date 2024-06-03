import { Box, Grid, Typography, styled } from "@mui/material";
import StyledButton from "../StyledButton/StyledButton";
import { motion } from "framer-motion";

const StyledImg = styled("img")(() => ({
  height: "100%",
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

const ProjectBox = ({ title, dateRange, imageUrl, description, technologies, viewProjectUrl, viewCodeUrl }: { 
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
      <Box sx={{ border: "1px solid grey", display: "flex", flexDirection: "column", height: "100%" }} p={2}>
        <Typography color="#fff" variant="h6">{title}</Typography>
        <Typography color="#fff" fontSize={12}>{dateRange}</Typography>
        <Box textAlign="center">
          <StyledImg src={imageUrl} alt={title} style={{ width: "80%", maxWidth: "300px" }} />
        </Box>
        <Typography color="#fff" pb={2} pl={2} fontSize={14} flex="1">
          {description}
        </Typography>
        <Typography color="#fff" pb={2} pl={2} fontSize={14}>
          Technologies: {technologies}
        </Typography>
        <Grid container display="flex" justifyContent="center" spacing={3}>
          <Grid item xs={12} md={6} display="flex" justifyContent="center">
            <StyledButton onClick={() => window.open(viewProjectUrl, '_blank')}>
              <Typography fontSize={12}>View Project</Typography>
            </StyledButton>
          </Grid>
          <Grid item xs={12} md={6} display="flex" justifyContent="center">
            <StyledButton onClick={() => window.open(viewCodeUrl, '_blank')}>
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
      title: "Project Example 1",
      dateRange: "jun 2023 - dec 2023",
      imageUrl: "https://via.placeholder.com/150",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus vel voluptate enim quibusdam ab impedit dolorem, facere velit dicta id possimus quis, nesciunt distinctio veritatis dolorum. Minima explicabo assumenda similique.",
      technologies: "JavaScript, Html, css",
      viewProjectUrl: "#",
      viewCodeUrl: "#",
    },
    {
      title: "Project Example 2",
      dateRange: "jun 2023 - dec 2023",
      imageUrl: "https://via.placeholder.com/150",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus vel voluptate enim quibusdam ab impedit dolorem, facere velit dicta id possimus quis, nesciunt distinctio veritatis dolorum. Minima explicabo assumenda similique.",
      technologies: "JavaScript, Html, css",
      viewProjectUrl: "#",
      viewCodeUrl: "#",
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
