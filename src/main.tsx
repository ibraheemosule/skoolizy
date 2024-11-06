import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const env = String(import.meta.env.MODE);
const Container = env === 'development' ? React.Fragment : React.StrictMode;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Container>
    <App />
  </Container>
);
