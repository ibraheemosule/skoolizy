import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { env } from '~utils';

const MODE = String(env.MODE);
const Container = MODE === 'development' ? React.Fragment : React.StrictMode;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Container>
    <App />
  </Container>
);
