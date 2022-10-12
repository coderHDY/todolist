import React from 'react';
import styles from "./index.module.css";
import {
  Card,
  Box,
  Typography,
  CardContent,
} from '@mui/material';
import useWeather from '../../../hooks/useWeather';

const Weather = (props) => {
  const { hide, setHide } = props;
  const { today, later } = useWeather();
  const toggleHide = () => setHide(c => !c);
  return (
    <Card className={`${styles.container} ${hide ? styles.hide : ""}`} onClick={toggleHide}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent className={styles.today}>
          <Typography className={styles.todayWeather}>
            <span className={styles.todayTemp}> {`${today.temperature ?? ""}℃`}</span>
            <span className={styles.todayWind}> {`${today.windDirection ?? ""}风 ${today.windPower}级`}</span>
          </Typography>
          <Typography className={styles.cityInfo} variant="subtitle1" color="text.secondary" component="div">
            <span className={styles.city}>{`${today.city ?? "大连"}`}</span>
            <span className={styles.humidity}>{`湿度: ${today.humidity ?? "60"}°`}</span>
          </Typography>
        </CardContent>
        <Box className={styles.after}>
          {later.forecasts?.slice(1).map(item => (
            <div className={styles.afterDay} key={item.date}>
              <div className={styles.afterDate}>{item?.date.slice(5)}</div>
              <div className={styles.afterTemp}>{`${item?.nightTemp}℃`} - {`${item?.dayTemp}℃`}</div>
            </div>
          ))}
        </Box>
      </Box>
    </Card>
  );
}

export default Weather;
