import React, { useState, useEffect } from 'react';
import { useRoutes } from 'react-router-dom';
import routerMap from './routes';
import TabBar from './components/TabBar';
import Loading from './components/Loading';
function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);
  const routes = useRoutes(routerMap);
  return (
    <>
      {
        loading
          ? <Loading />
          : (routes)
      }
      <TabBar />
    </>
  );
}

export default App;
