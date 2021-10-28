import { useState } from 'react';
import { useFocusTrap, useMergedRef } from '@mantine/hooks';
import './App.css';

function App() {
  const focusTrapRef = useFocusTrap();
  const [value, setValue] = useState('');

  return (
    <div ref={useMergedRef(focusTrapRef)}>
      <input value={value} type="text" onChange={(e) => { setValue(e.target.value) }} />
      <input type="text" data-autofocus />
    </div>
  );
}

export default App;
