import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '~components/App';
import './index.css';

const baseURL = String(import.meta.env.MODE);
const Container = baseURL === 'development' ? React.Fragment : React.StrictMode;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Container>
    <App />
  </Container>
);
