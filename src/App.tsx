import React from 'react';
import { useRoutes } from 'react-router-dom';
import { AppProviders } from './Providers/App';
import { routes } from './routes/routes';

function App() {
  const elements = useRoutes(routes);

  return <AppProviders>{elements}</AppProviders>;
}

export default App;
