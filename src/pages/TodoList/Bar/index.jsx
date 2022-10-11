import React from 'react';
import {
  IconButton,
  AppBar,
  Toolbar,
  Box,
  SpeedDialIcon,
  SpeedDialAction,
  SpeedDial,
} from '@mui/material';
import { styled } from '@mui/material/styles';

import MenuIcon from '@mui/icons-material/Menu';
import ReplayIcon from '@mui/icons-material/Replay';

const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
  position: 'absolute',
  '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
    bottom: theme.spacing(-3),
    right: theme.spacing(-1.2),
    transform: "scale(.9)",
  },
  '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
    top: "-5px",
    right: ".3rem",
    transform: "scale(.9)",
  },
  '& button': {
    boxShadow: "none !important",
    backgroundColor: "#1876D1",
    color: "#ffffff",
  },
}));


const Index = () => {
  const actions = [
    { icon: <ReplayIcon />, name: 'Reload', onClick: () => window.location.reload() },
  ];
  return (
    <AppBar position="fixed" color="primary" sx={{ top: 0 }}>
      <Toolbar>
        <IconButton color="inherit" aria-label="open drawer">
          <MenuIcon />
        </IconButton>
        <Box sx={{ flexGrow: 1 }} />
        <StyledSpeedDial
          ariaLabel="SpeedDial playground example"
          icon={<SpeedDialIcon />}
          direction="down"
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              onClick={action.onClick}
            />
          ))}
        </StyledSpeedDial>
      </Toolbar>
    </AppBar>
  );
}

export default Index;
