import React, { useState, useEffect } from "react";
import { useRoutes } from "react-router-dom";
import routerMap from "./routes";
import TabBar from "./components/TabBar";
import Loading from "./components/Loading";
import useWeather from "./hooks/useWeather";
import { migrate } from "./utils/migrate";

function App() {
  const routes = useRoutes(routerMap);
  const [loading, setLoading] = useState(true);
  useWeather();
  useEffect(() => {
    migrate();
    setTimeout(() => setLoading(false), 1000);
  }, []);
  return (
    <>
      {loading ? <Loading /> : routes}
      <TabBar />
    </>
  );
}

export default App;
