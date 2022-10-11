import React from 'react';
import { useRoutes } from 'react-router-dom';
import routerMap from './routes';
import TabBar from './components/TabBar';
function App() {
  const routes = useRoutes(routerMap);
  return (
    <>
      { routes }
      <TabBar />
    </>
  );
}

export default App;
