import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, Button, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { useTheme, useMediaQuery } from '@mui/material';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md')); // Check if the screen is small

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const menuItems = ['Home', 'About Us', 'Services', 'Bookings', 'Reviews', 'Contact Info', 'Profile'];

  return (
    <AppBar position="static" sx={{ backgroundColor: 'black', padding: '10px 0' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Branding or Logo */}
        <Typography
          variant="h6"
          sx={{
            color: '#f5f5f5', // Sea salt color
            fontWeight: 'bold',
            cursor: 'pointer',
          }}
        >
          MyApp
        </Typography>

        {isMobile ? (
          // Mobile View
          <>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
              sx={{ color: '#f5f5f5' }}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={handleDrawerToggle}
              sx={{
                '& .MuiDrawer-paper': {
                  backgroundColor: 'black',
                  color: '#f5f5f5',
                },
              }}
            >
              <List>
                {menuItems.map((item, index) => (
                  <ListItem key={index} disablePadding>
                    <ListItemButton
                      component={Link}
                      to={`/${item.toLowerCase().replace(/ /g, '-')}`}
                      onClick={handleDrawerToggle}
                    >
                      <ListItemText
                        primary={item}
                        sx={{
                          textAlign: 'center',
                          '& .MuiTypography-root': {
                            fontSize: '18px',
                            color: '#f5f5f5',
                          },
                        }}
                      />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </>
        ) : (
          // Desktop View
          <Box
            sx={{
              display: 'flex',
              gap: '20px',
            }}
          >
            {menuItems.map((item, index) => (
              <Button
                key={index}
                component={Link}
                to={`/${item.toLowerCase().replace(/ /g, '-')}`}
                sx={{
                  color: '#f5f5f5',
                  position: 'relative',
                  textTransform: 'none',
                  fontSize: '16px',
                  fontWeight: '500',
                  '&:hover': {
                    color: '#f5f5f5',
                  },
                  '&:hover::after': {
                    content: '""',
                    position: 'absolute',
                    left: 0,
                    bottom: '-2px',
                    height: '2px',
                    width: '100%',
                    backgroundColor: '#f5f5f5',
                    transform: 'scaleX(1)',
                    transition: 'transform 0.3s ease',
                  },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    left: 0,
                    bottom: '-2px',
                    height: '2px',
                    width: '100%',
                    backgroundColor: '#f5f5f5',
                    transform: 'scaleX(0)',
                    transition: 'transform 0.3s ease',
                  },
                }}
              >
                {item}
              </Button>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
