import styled from "@emotion/styled";
import { Container, Divider, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import SchoolIcon from '@mui/icons-material/School';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import StyledCard from "../../../../components/StyledButton/StyledCard";
import GridContainer from "../../../../components/StyledButton/StyledMiniCards";


const About = () => {
    const StyledAbout = styled("div")(() => ({
        
        backgroundColor: "#fff",
        display: "flex",
        alignItems: "center",
    }));

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.5
            }
        }
    };

    const itemLeftVariants = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 }
    };

    const itemRightVariants = {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x:  0}
    };

    

    

    return (
        <>
            <StyledAbout id="about">
                <Container maxWidth="lg" >
                    <Typography color="primary" variant="h3" textAlign="center" pb={2} pt={4}>About us</Typography>
                    
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ amount: 0.5 }}
                        variants={containerVariants}
                    >
                        <Grid container display="flex" justifyContent="center" spacing={0.5} pt={3} pb={4}>
                            <Grid item xs={12} md={2} display="flex" justifyContent="center">

                                <motion.div variants={itemLeftVariants}>
                                    <StyledCard>
                                        <WorkspacePremiumIcon />
                                        <Typography color="primary">Experience</Typography>
                                        <Typography color="primary">Full Stack Developers</Typography>
                                    </StyledCard>
                                </motion.div>
                            </Grid>

                            <Grid item xs={12} md={2} display="flex" justifyContent="center">
                                <motion.div variants={itemRightVariants}>
                                    <StyledCard>
                                        <SchoolIcon />
                                        <Typography color="primary">Education</Typography>
                                        <Typography color="primary">Engineering Students</Typography>
                                        
                                    </StyledCard>
                                </motion.div>
                            </Grid>
                        </Grid>
                    </motion.div>
                   
                    <Typography color="primary"  align="justify" pb={2} fontSize={16}>
                    We are a diverse and dynamic team, consisting of four determined students ready to conquer the market. Among us, there are two engineering students, one data scientist, and one student specializing in people and marketing management. We combine our skills and passions to chart innovative paths. Our goal is to grow and evolve continuously, seeking challenges that drive us to achieve exceptional results. We are ready to tackle market demands and contribute significantly to its development.
                    </Typography>

                    <Divider/>
                    <div id="skills">
                        <Typography color="primary" variant="h3" textAlign="center" pb={2} pt={4}>Skills</Typography>
                        <GridContainer/>
                    </div>

                    

                </Container>
            </StyledAbout>
        </>
    );
}

export default About;
