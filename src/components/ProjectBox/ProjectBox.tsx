import { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Grid, Box, Button } from '@mui/material';
import { styled, keyframes } from '@mui/system';
const projectsData = [
  {
    name: "Bot LinkedIn",
    date: "06-06-2024",
    image: "https://raw.githubusercontent.com/Synergy4tech/Bot-LinkedIn/main/src/assets/preview.jpg",
    description: "Bot em Python com Selenium para automação de conexões no LinkedIn, facilitando a expansão da rede de contatos de forma eficiente e automatizada.",
    technology: "Python, Selenium, CustomTkinter",
    codeLink: "https://github.com/Synergy4tech/Bot-LinkedIn",
    projectLink: "https://github.com/Synergy4tech/Bot-LinkedIn/tags",
  },
  {
    name: "Calculadora de IMC",
    date: "10-07-2023",
    image: "https://raw.githubusercontent.com/Rafael-Damasceno/calculadora-de-imc/main/src/.github/Preview.png",
    description: "Site em React desenvolvido para calcular o IMC, criado como parte do curso da B7Web. O projeto visa aplicar conceitos de React para criar uma aplicação.",
    technology: "TypeScript, React",
    codeLink: "https://github.com/Rafael-Damasceno/calculadora-de-imc",
    projectLink: "https://calculadora-de-imc-three.vercel.app",
  },
  {
    name: "Comprar pizzas",
    date: "03-01-2023",
    image: "https://raw.githubusercontent.com/Rafael-Damasceno/Comprar-pizzas/main/.github/Preview.png",
    description: "Um site de compra de pizzas criado como exercício durante o curso da B7Web, focando no estudo e prática de JavaScript para funcionalidades interativas.",
    technology: "HTML, CSS, JavaScript",
    codeLink: "https://github.com/Rafael-Damasceno/Comprar-pizzas",
    projectLink: "https://rafael-damasceno.github.io/Comprar-pizzas/",
  },
  {
    name: "Validador de Formulários",
    date: "01-02-2023",
    image: "https://raw.githubusercontent.com/Rafael-Damasceno/Validador-de-Formularios/main/.github/Preview.png",
    description: "Site desenvolvido para validar um formulário de cadastro usando JavaScript, focando na implementação de verificações e feedback ao usuário.",
    technology: "HTML, CSS, JavaScript",
    codeLink: "https://github.com/Rafael-Damasceno/Validador-de-Formularios",
    projectLink: "https://rafael-damasceno.github.io/Validador-de-Formularios/",
  },
  {
    name: "Medicenter",
    date: "30-12-2022",
    image: "https://raw.githubusercontent.com/Rafael-Damasceno/Medicenter/main/.github/preview.png",
    description: "Desenvolvi um site sobre uma clínica médica como exercício durante o curso da B7Web, focando em práticas de design responsivo e usabilidade",
    technology: "HTML, CSS, JavaScript",
    codeLink: "https://github.com/Rafael-Damasceno/Medicenter",
    projectLink: "https://rafael-damasceno.github.io/Medicenter/",
  },
  {
    name: "Site do Starbucks",
    date: "30-12-2022",
    image: "https://github.com/Rafael-Damasceno/Starbucks/blob/main/.github/preview.png?raw=true",
    description: "Clone do site da Starbucks desenvolvido utilizando HTML e CSS, criado para praticar habilidades de front-end e replicar o design original.",
    technology: "HTML, CSS",
    codeLink: "https://github.com/Rafael-Damasceno/Starbucks?tab=readme-ov-file",
    projectLink: "https://rafael-damasceno.github.io/Starbucks/",
  },
  {
    name: "Clone da landing page de pesquisa do Google",
    date: "30-12-2022",
    image: "https://github.com/Rafael-Damasceno/Google/blob/main/.github/preview.png?raw=true",
    description: "Clone da página de pesquisa do Google, recriado para praticar, focando em replicar o design e a funcionalidade da landing page original.",
    technology: "HTML, CSS",
    codeLink: "https://github.com/Rafael-Damasceno/Google",
    projectLink: "https://rafael-damasceno.github.io/Google/",
  },
  {
    name: "Calculadora",
    date: "17-09-2022",
    image: "https://raw.githubusercontent.com/Rafael-Damasceno/Calculadora/master/.github/Preview.png",
    description: "Projeto desenvolvido para treinar funções avançadas em JavaScript, implementando animações complexas e interativas utilizando CSS.",
    technology: "HTML, CSS, JavaScript",
    codeLink: "https://github.com/Rafael-Damasceno/Calculadora?tab=readme-ov-file",
    projectLink: "https://rafael-damasceno.github.io/Calculadora/",
  },

  
];

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const AnimatedCard = styled(Card)<{ animate: boolean }>(({ animate }) => ({
  minWidth: 300,
  textAlign: 'center',
  border: '1px solid #fff',  
  backgroundColor: 'transparent',
  animation: animate ? `${fadeIn} 0.5s ease-out` : 'none',
  transition: 'transform 0.2s, box-shadow 0.2s',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },
}));

const WhiteButton = styled(Button)(({ theme }) => ({
  color: '#fff', 
  border: '1px solid #fff',
  '&:hover': {
    backgroundColor: theme.palette.secondary.dark
  }
}));

const ProjectBox = () => {
  const [animate, setAnimate] = useState(false);
  const [visibleProjects, setVisibleProjects] = useState(2); 
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentRef = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
        } else {
          setAnimate(false);
        }
      },
      { threshold: 0.1 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  
  const handleLoadMore = () => {
    setVisibleProjects(prev => prev + 2); 
  };


  return (
    <div ref={sectionRef} id="projects">
      <Grid container spacing={4} justifyContent="center" pb={2}>
        {projectsData.slice(0, visibleProjects).map((project, index) => (
          <Grid item key={index} xs={12} sm={6}>
            <AnimatedCard animate={animate}>
              <CardMedia
                component="img"
                alt={project.name}
                height="200"
                image={project.image}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" color="#fff">
                  {project.name}
                </Typography>
                <Typography color="#fff">
                  {project.date}
                </Typography>
                <Typography color="#fff" paragraph>
                  {project.description}
                </Typography>
                <Typography color="#fff">
                  <strong>Tecnologias usadas:</strong> {project.technology}
                </Typography>
                <Box mt={2}>
                  <WhiteButton variant="contained" sx={{ mr: 2 }}>
                    <a href={project.codeLink} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                    Ver Código
                    </a>
                  </WhiteButton>
                  <WhiteButton variant="contained">
                    <a href={project.projectLink} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                    Ver Projeto
                    </a>
                  </WhiteButton>
                </Box>
              </CardContent>
            </AnimatedCard>
          </Grid>
        ))}
      </Grid>
      {visibleProjects < projectsData.length && (
        <Box textAlign="center" mt={4} pb={2}>
          <WhiteButton variant="contained" onClick={handleLoadMore}>
            Carregar mais projetos
          </WhiteButton>
        </Box>
      )}
    </div>
  );
};

export default ProjectBox;