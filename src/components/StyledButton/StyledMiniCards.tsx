import React, { ReactNode } from 'react';
import { Grid, styled } from '@mui/material';

interface StyledMiniCardProps {
    children: ReactNode;
}

// Definindo o componente estilizado fora da função
const StyledMiniCardButton = styled('button')(({ theme }) => ({
    backgroundColor: 'transparent',
    border: '1px solid #232323',
    borderRadius: '3px',
    padding: '5px 15px',
    width: '150px',
    '&:hover': {
        backgroundColor: theme.palette.secondary.light,
    },
}));

const StyledMiniCard: React.FC<StyledMiniCardProps> = ({ children }) => {
    return <StyledMiniCardButton>{children}</StyledMiniCardButton>;
};

const items = [
    'Python', 'Javascript', 'Typescript', 'React',
    'Git', 'HTML', 'CSS', 'Java', 
];

const GridContainer = () => {
    return (
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} display="flex" justifyContent="center" alignItems="center" pb={5}>
            {items.map((item, index) => (
                <Grid key={index} item xs={6} sm={3} md={3} container justifyContent="center" alignItems="center">
                    <StyledMiniCard>{item}</StyledMiniCard>
                </Grid>
            ))}
        </Grid>
    );
};

export default GridContainer;
