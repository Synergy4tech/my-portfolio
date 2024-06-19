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
                    <Typography color="primary" variant="h3" textAlign="center" pb={2} pt={4}>Sobre nós</Typography>
                    
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
                    Somos uma equipe diversa e dinâmica, composta por quatro estudantes determinados a conquistar o mercado. Entre nós, há dois estudantes de engenharia, um estudante de analise de desenvolvimento de sistemas e um estudante especializado em gestão de pessoas e marketing. Combinamos nossas habilidades e paixões para traçar caminhos inovadores. Nosso objetivo é crescer e evoluir continuamente, buscando desafios que nos impulsionem a alcançar resultados excepcionais. Estamos prontos para enfrentar as demandas do mercado e contribuir significativamente para o seu desenvolvimento.
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
