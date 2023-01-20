import React, { useState, useEffect, memo } from 'react';
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
import styles from "./index.module.css";
import MenuIcon from '@mui/icons-material/Menu';
import ReplayIcon from '@mui/icons-material/Replay';
import useQuotes from "./useQuotes";
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

// 滚动名人名言
const Quotes = memo(() => {
  const [showIdx, setShowIdx] = useState(0);
  const { quotes } = useQuotes();
  const isOnlyOneLine = (val) => val.length <= 14 && !val.includes("<br");

  useEffect(() => {
    const interval = setInterval(() => {
      setShowIdx(i => i < quotes.length - 1 ? i + 1 : 0);
    }, 10000);
    return () => {
      clearTimeout(interval);
    };
  }, [quotes.length]);
  return (
    <div className={styles.quotes}>
      {
        quotes.map((item, i) =>
          <div
            key={i}
            className={`
              ${styles.quote}
              ${showIdx === i ? styles.active : ''}
              ${isOnlyOneLine(item) ? styles["one-line"] : ""}
            `}
            dangerouslySetInnerHTML={{ __html: item }}
          ></div>
        )
      }
    </div>
  );
});


const TopBar = () => {

  // 右上下拉操作列表
  const actions = [
    { icon: <ReplayIcon />, name: 'Reload', onClick: () => window.location.reload() },
  ];

  return (
    <AppBar position="fixed" color="primary" sx={{ top: 0 }}>
      <Toolbar>
        <IconButton color="inherit" aria-label="open drawer">
          <MenuIcon />
        </IconButton>
        <Box sx={{ flexGrow: 1 }}>
          <Quotes />
        </Box>
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

export default TopBar;
