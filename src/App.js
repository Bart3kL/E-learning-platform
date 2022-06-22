import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState, Fragment } from 'react';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import DictionaryPage from './pages/DictionaryPage';
import CategoryPage from './pages/CategoryPage';
import SubcategoryPage from './pages/SubcategoryPage';
import WordsPage from './pages/WordsPage';
import Spinner from './components/Layout/Spinner';
import './App.css';

import { spinnerActions } from './store/auth';

function App() {
  const dispatch = useDispatch();
  const spinner = useSelector((state) => state.spinner.activation);
  const [levels, setLevels] = useState([]);
  useEffect(() => {
    (async function () {
      dispatch(spinnerActions.activeSpinner());
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
      dispatch(spinnerActions.deactivateSpinner());
    })();
  }, [dispatch]);
  return (
    <Layout>
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" element={<Navigate replace to="edudor" />} />
        <Route path="edudor" element={<HomePage />} />
        <Route path="logowanie" element={<LoginPage />} />
        <Route path="nauka" />
        <Route path="slownik" element={<DictionaryPage level={levels} />} />
        {levels.map((level) => (
          <Fragment key={level.level}>
            <Route
              path={`slownik/${level.level}`}
              key={level.level}
              element={<CategoryPage level={level} />}
            />

            {Object.entries(level.categoryName).map(([key]) => (
              <Fragment key={key}>
                <Route
                  path={`/slownik/${level.level}/${key}`}
                  key={key}
                  element={
                    <SubcategoryPage
                      subcategory={level.categoryName[key].podkategorie}
                    />
                  }
                />
                {Object.entries(level.categoryName[key].podkategorie).map(
                  ([id]) => (
                    <Route
                      path={`/slownik/${level.level}/${key}/${id}`}
                      key={id}
                      element={
                        <WordsPage
                          words={level.categoryName[key].podkategorie[id].slowa}
                        />
                      }
                    />
                  )
                )}
              </Fragment>
            ))}
          </Fragment>

       
        ))}
        <Route path="gramatyka" />
        <Route path="zwroty" />
        <Route path="kontakt" element={<ContactPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
