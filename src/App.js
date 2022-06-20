import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import DictionaryPage from './pages/DictionaryPage';
import CategoryPage from './pages/CategoryPage';
import SubcategoryPage from './pages/SubcategoryPage';
import './App.css';

function App() {
  const [levels, setLevels] = useState([]);
  useEffect(() => {
    (async function () {
      const response = await fetch(
        `https://english-page-7aa3f-default-rtdb.europe-west1.firebasedatabase.app/levels.json`
      );

      const data = await response.json();

      const loadedMovies = [];

      for (const key in data) {
        loadedMovies.push({
          id: key,
          level: data[key].name,
          image: data[key].image,
          categoryName: data[key].categories,
        });

        setLevels(loadedMovies);
      }
    })();
  }, []);
  return (
    <Layout>
      <Routes>
        {/* { */}
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" element={<Navigate replace to="edudor" />} />
        <Route path="edudor" element={<HomePage />} />
        <Route path="logowanie" element={<LoginPage />} />
        <Route path="nauka" />
        <Route path="slownik" element={<DictionaryPage level={levels} />} />
        {levels.map((level) => (
          <>
            <Route
              path={`slownik/${level.level}`}
              key={level.level}
              element={<CategoryPage level={level} />}
            />
            {Object.entries(level.categoryName).map(([key]) => (
              <Route
                path={`/slownik/${level.level}/${key}`}
                key={key}
                element={
                  <SubcategoryPage
                    subcategory={level.categoryName[key].podkategorie}
                  />
                }
              />
            ))}
          </>
        ))}
        <Route path="gramatyka" />
        <Route path="zwroty" />
        <Route path="kontakt" element={<ContactPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
