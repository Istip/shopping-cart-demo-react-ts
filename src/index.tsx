import React from 'react';
import { createRoot } from 'react-dom/client';

const App = () => {
  return (
    <div>
      <h1>HELLO FROM APP!</h1>
    </div>
  );
};

const container = document.getElementById('root');
const root = createRoot(container as HTMLElement);

root.render(<App />);
