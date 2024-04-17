import React from "react";
import styles from "./index.module.css";
import { Card, Box, Typography, CardContent } from "@mui/material";
import useWeather from "../../../hooks/useWeather";

const Weather = (props) => {
  const { hide, setHide } = props;
  const { today, later } = useWeather();
  const toggleHide = () => setHide((c) => !c);
  return (
    <Card
      className={`${styles.container} ${hide ? styles.hide : ""}`}
      onClick={toggleHide}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent className={styles.today}>
          <Typography className={styles.todayWeather}>
            <span className={styles.weather}>
              {" "}
              {today.weather ? `${today.weather}` : " "}
            </span>
            <span className={styles.todayTemp}>
              {" "}
              {today.temperature ? `${today.temperature}℃` : " "}
            </span>
            <span className={styles.todayWind}>
              {" "}
              {today.windDirection
                ? `${today.windDirection}风 ${today.windPower}级`
                : " "}
            </span>
          </Typography>
          <Typography
            className={styles.cityInfo}
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            <span className={styles.city}>{`${today.city ?? ""}`}</span>
            <span className={styles.humidity}>
              {today.humidity ? `湿度: ${today.humidity}°` : ""}
            </span>
          </Typography>
        </CardContent>
        <Box className={styles.after}>
          {later?.forecasts?.slice(1).map((item) => (
            <div className={styles.afterDay} key={item.date}>
              <div className={styles.afterDate}>{item?.date.slice(5)}</div>
              <div className={styles.afterTemp}>
                <span>{`${item?.nightTemp}℃`}</span>
                <span>-</span>
                <span>{`${item?.dayTemp}℃`}</span>
              </div>
              <div className={styles.afterWeather}>{`${item?.dayWeather}`}</div>
            </div>
          ))}
        </Box>
      </Box>
    </Card>
  );
};

export default Weather;
