import { Routes, Route, Navigate } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import './App.css';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate replace to="edudor" />} />
        <Route path="edudor" />
        <Route path="nauka" />
      </Routes>
    </Layout>
  );
}

export default App;
