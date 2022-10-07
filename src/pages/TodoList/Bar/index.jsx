import React from 'react';
import {
  IconButton,
  AppBar,
  Toolbar,
  Box,
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import MoreIcon from '@mui/icons-material/MoreVert';

const Index = () => {
  return (
    <AppBar position="fixed" color="primary" sx={{ top: 0 }}>
      <Toolbar>
        <IconButton color="inherit" aria-label="open drawer">
          <MenuIcon />
        </IconButton>
        <Box sx={{ flexGrow: 1 }} />
        <IconButton color="inherit">
          <MoreIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Index;
