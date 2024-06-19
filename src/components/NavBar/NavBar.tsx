import React, { useState } from 'react';
import { AppBar, Drawer, IconButton, List, ListItem, ListItemText, Toolbar, styled, MenuItem, Box } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

const NaviBar: React.FC = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const StyledToolbar = styled(Toolbar)(() => ({
        display: "flex",
        justifyContent: "space-between",
    }));

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    const scrollToSection = (id: string) => {
        const targetElement = document.getElementById(id);
        if (targetElement) {
            smoothScrollTo(targetElement.offsetTop, 800);
        }
    };

    const smoothScrollTo = (targetPosition: number, duration: number) => {
        const startPosition = window.scrollY;
        const distance = targetPosition - startPosition;
        let startTime: number | null = null;

        const animation = (currentTime: number) => {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };

        const ease = (t: number, b: number, c: number, d: number) => {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };

        requestAnimationFrame(animation);
    };

    const list = (
        <div
            role="presentation"
            onClick={toggleDrawer}
            onKeyDown={toggleDrawer}
        >
            <List>
                <ListItem button key="about" onClick={() => scrollToSection('about')}>
                    <ListItemText primary="About" />
                </ListItem>
                <ListItem button key="skills" onClick={() => scrollToSection('skills')}>
                    <ListItemText primary="Skills" />
                </ListItem>
                <ListItem button key="projects" onClick={() => scrollToSection('projects')}>
                    <ListItemText primary="Projects" />
                </ListItem>
            </List>
        </div>
    );

    return (
        <>
            <AppBar position="absolute">
                <StyledToolbar>
                    <div>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            onClick={toggleDrawer}
                            sx={{ display: { xs: 'block', sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                    </div>
                    <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
                        <MenuItem onClick={() => scrollToSection('about')}>Sobre nós</MenuItem>
                        <MenuItem onClick={() => scrollToSection('skills')}>Skills</MenuItem>
                        <MenuItem onClick={() => scrollToSection('projects')}>Projetos</MenuItem>
                    </Box>
                </StyledToolbar>
            </AppBar>
            <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={toggleDrawer}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
                }}
            >
                {list}
            </Drawer>
        </>
    );
}

export default NaviBar;
