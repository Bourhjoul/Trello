import React, { useState } from 'react';
import { AppProviders } from './Providers/App';

function App() {
  const [count, setCount] = useState(0);
  const variable = 5;

  return <AppProviders>Hello</AppProviders>;
}

export default App;
