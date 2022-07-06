import React from 'react';
import style from './App.module.css';

const App = () => {
  const center = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 'calc(100vh - 20px)',
  };

  return (
    <div className={style.container}>
      <div style={center}>
        <div>
          <h2>
            Basic <abbr title="https://reactjs.org/">React</abbr> ➕{' '}
            <abbr title="https://www.typescriptlang.org/">Typescript</abbr>{' '}
            project setup.
          </h2>
          <br />
          <div style={{ textAlign: 'center' }}>
            <small>CSS Modules and build script included!</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
