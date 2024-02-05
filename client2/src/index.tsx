import React from 'react';
import ReactDOM from 'react-dom/client';
import { createContext } from 'react';
import App from './App';
import Store from './store/store'

const store = new Store();

export const Context = createContext({
store,
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Context.Provider value={{store}}>
    <App />
  </Context.Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

