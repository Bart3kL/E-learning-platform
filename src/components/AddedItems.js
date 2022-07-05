import { useState, useEffect } from 'react';
import Spinner from './Layout/Spinner';
import AddedWordCard from './Dictionary/AddWord/AddedWordCard';
import PhraseCard from './Phrases/PhraseCard';
import styles from './AddedItems.module.css';

const AddedItems = ({ newFetch, type }) => {
  const [spinner, setSpinner] = useState(false);
  const [items, setItems] = useState([]);
  
  
  useEffect(() => {
    setSpinner(true);
    (async function () {
      const response = await fetch(
        `${
          type === 'phrases'
            ? 'https://english-page-7aa3f-default-rtdb.europe-west1.firebasedatabase.app/addedPhrases.json'
            : 'https://english-page-7aa3f-default-rtdb.europe-west1.firebasedatabase.app/addedWords.json'
        }`
      );
      const data = await response.json();

      const items = [];

      for (const key in data) {
        items.push({
          id: key,
          item: data[key].item,
          translation: data[key].translation,
        });
        setItems(items);
      }
      setSpinner(false);
    })();
  }, [newFetch, type]);
  return (
    <section className={styles.addedWords}>
      {spinner ? (
        <Spinner />
      ) : (
        <ul className="cards">
          {items.map((item) => (
            <li
              key={item.item}
              className={
                type === 'phrases' ? `wordCard phraseCard firstAnimation` : `${styles.wordCard} firstAnimation`
              }
            >
              {type === 'phrases' ? (
                <PhraseCard phrase={item} type="phrases" />
              ) : (
                <AddedWordCard word={item} />
              )}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default AddedItems;
