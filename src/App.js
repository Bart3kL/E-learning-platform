import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect, useState, Fragment } from 'react';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
// ------------------------------------------------------------------
import DictionaryPage from './pages/Dictionary/DictionaryPage';
import CategoryPage from './pages/Dictionary/CategoryPage';
import SubcategoryPage from './pages/Dictionary/SubcategoryPage';
import WordsPage from './pages/Dictionary/WordsPage';
// ------------------------------------------------------------------
import PhrasesPage from './pages/Phrases/PhrasesPage';
import ListPhrasesPage from './pages/Phrases/ListPhrasesPage';
// ------------------------------------------------------------------
import './App.css';

function App() {
  const dispatch = useDispatch();

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
  }, [dispatch]);

  const [phrases, setPhrases] = useState([]);
  useEffect(() => {
    (async function () {
      const response = await fetch(
        `https://english-page-7aa3f-default-rtdb.europe-west1.firebasedatabase.app/phrases.json`
      );
      const data = await response.json();

      const phrases = [];

      for (const key in data) {
        phrases.push({
          id: key,
          phrase: data[key].name,
          phrases: data[key].zwroty,
        });

        setPhrases(phrases);
      }
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
        <Route path="zwroty" element={<PhrasesPage phrases={phrases} />} />
        {phrases.map((phrase) => (
          <Route
            path={`/zwroty/${phrase.id}`}
            element={<ListPhrasesPage phrases={phrase.phrases} />}
          />
        ))}
        <Route path="kontakt" element={<ContactPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
