import { useState, useEffect } from "react";
import Storage from "../utils/storage";
const useWeather = () => {
  const [today, setToday] = useState({});
  const [later, setLater] = useState([]);
  const weather = Storage.get("weather") || {};
  useEffect(() => {
    // 每日请求一次，减少api获取次数
    if (
      weather &&
      weather.date &&
      new Date(weather.date).toDateString() === new Date().toDateString()
      && weather.today !== undefined
      && weather.later !== undefined
    ) {
      setToday(weather.today ?? {});
      setLater(weather.later ?? []);
      return;
    }
    window._AMapSecurityConfig = {
      securityJsCode: "8e6fb7b12ca0f8e9093fec79597d3388",
    };
    window.onLoad = function () {
      window.AMap.plugin("AMap.Weather", function () {
        //创建天气查询实例
        let weatherAPI = new window.AMap.Weather();
        Promise.all([
          new Promise((res) => {
            //执行实时天气信息查询
            weatherAPI.getLive("大连市", function (err, data) {
              if (!err) {
                weather.today = data;
                setToday(data);
              } else {
                console.log(err);
              }
              res();
            });
          }),
          new Promise((res) => {
            weatherAPI.getForecast("大连市", function (err, data) {
              if (!err) {
                weather.later = data;
                setLater(data);
              }
              res();
            });
          }),
        ]).then(() => {
          weather.date = +new Date();
          Storage.set("weather", weather);
        });
      });
    };
    var url =
      "https://webapi.amap.com/maps?v=1.4.15&key=46dc74aebed689e7586325ef13585c27&callback=onLoad";
    var jsapi = document.createElement("script");
    jsapi.setAttribute("charset", "utf-8");
    jsapi.src = url;
    document.head.appendChild(jsapi);
    return () => (window.onLoad = null);

    // eslint-disable-next-line
  }, []);
  return { today, later };
};

export default useWeather;
