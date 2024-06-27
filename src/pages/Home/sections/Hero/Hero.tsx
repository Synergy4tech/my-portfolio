import { Backdrop, Box, Container, Fade, Grid, Modal, Typography, styled } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import Background from "../../../../components/animatedbackrground/Background";
import { useState } from "react";
import Avatar from "../../../../assets/images/avatar.png";


const StyledHero = styled("div")(({ theme }) => ({
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  [theme.breakpoints.up("xs")]: {
    paddingTop: "100px",
    paddingBottom: "20px",
  },
  [theme.breakpoints.up("md")]: {
    paddingTop: "0",
    paddingBottom: "0",
  },
}));

const StyledImg = styled("img")(() => ({
  width: "75%",
  borderRadius: "50%",
  border: '1px solid #548C6C'
}));

const Hero = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <>
      <StyledHero>
        <Container maxWidth="lg">
          <Background />
          <Grid container spacing={2} justifyContent="center" alignItems="center">
            <Grid item xs={12} md={5} container justifyContent="center">
              <Box position="relative">
                <Box position="relative" textAlign="center">
                  <StyledImg src={Avatar} />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={7} container direction="column" alignItems="center">
              <Typography color="primary.contrastText" variant="h1" textAlign="center" pb={2}>
              Synergy 4 Tech
              </Typography>
              <Typography color="secondary" variant="h2" textAlign="center">
              Potencializando suas ideias
              </Typography>
              <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                  <StyledButton onClick={handleOpen}>
                    <EmailIcon />
                    <Typography>CONTATE-ME</Typography>
                  </StyledButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </StyledHero>

      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          }}>
            <Typography variant="h6" component="h2">
              Entre em contato comigo:
            </Typography>
            <Typography sx={{ mt: 2 }}>
              Email:  <a href="mailto:synergyivtech@gmail.com">Synergyivtech@gmail.com</a>
            </Typography>
            <Typography sx={{ mt: 2 }}>
              <a href="https://www.linkedin.com/company/103588723/admin/feed/posts/?feedType=following" target="_blank" rel="noopener noreferrer">Linkedin</a>
            </Typography>
            <Typography sx={{ mt: 2 }}>
              <a href="https://github.com/Synergy4tech" target="_blank" rel="noopener noreferrer">Github</a>
            </Typography>
          </Box>
        </Fade>
      </Modal>

      
    </>
  );
}

export default Hero;