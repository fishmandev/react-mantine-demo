import { useLogger } from '@mantine/hooks';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  useLogger('Demo', [{ count, hello: 'world' }]);
  useLogger('Demo2', [{ data: 'NeverChange' }]);

  return <button onClick={() => setCount(value => value + 1)}>Update state({count})</button>;
}

export default App;
