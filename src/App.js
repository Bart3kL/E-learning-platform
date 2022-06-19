import { Routes, Route, Navigate } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ContactPage from './pages/ContactPage'
import './App.css';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate replace to="edudor" />} />
        <Route path="edudor" element={<HomePage />} />
        <Route path="logowanie" element={<LoginPage />} />
        <Route path="nauka" />
        <Route path="slownik" />
        <Route path="gramatyka" />
        <Route path="zwroty" />
        <Route path="kontakt" element={<ContactPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
