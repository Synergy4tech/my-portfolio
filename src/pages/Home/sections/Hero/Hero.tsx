import { Box, Container, Grid, Typography, styled } from "@mui/material"
import Avatar from "..//../../../assets/images/avatar.png"
import EmailIcon from '@mui/icons-material/Email';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import Background from "../../../../components/animatedbackrground/Background";






const Hero = () => {
    const StyledHero = styled("div")(({theme}) => ({
        paddingBottom: "20px",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.up("xs")]: {
            paddingTop: "100px",
        },
        [theme.breakpoints.up("md")]: {
            paddingTop: "0",
        }

    }))

    const StyledImg = styled("img")(({theme}) => ({
        width: "75%",
        borderRadius: "50%",
        border: `1px solid ${theme.palette.primary.contrastText}`,
    }))


    return (
        <>
            <StyledHero>
           
                <Container maxWidth="lg">
                <Background/>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={5} container>
                            <Box position="relative">
                                <Box position="relative" textAlign= "center" >
                                    <StyledImg src={Avatar} />
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <Typography color="primary.contrastText" variant="h1" textAlign="center" pb={2}>Synergy 4 Tech</Typography>
                            <Typography color="secondary" variant="h2" textAlign="center">Potencializando suas ideias</Typography>

                            <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
                                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                    <StyledButton onClick={() => window.location.href = "mailto:synergyivtech2@gmail.com"}>
                                        <EmailIcon/>
                                       <Typography> CONTATE-ME</Typography>
                                    </StyledButton>
                                </Grid>
                            </Grid>
                            
                            
                        </Grid>
                        
                    </Grid>
                    
                </Container>

            </StyledHero>
            
            
        </>
       
    )
  }
  
  export default Hero
  