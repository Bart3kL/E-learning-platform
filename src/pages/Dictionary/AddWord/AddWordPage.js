import Header from '../../../components/Layout/Header';
import AddWordForm from '../../../components/Dictionary/AddWord/AddWordForm';
import AddedWords from '../../../components/Dictionary/AddWord/AddedWords';
import { useState } from 'react';
import styles from './AddWordPage.module.css';

const AddWordPage = () => {
  const [newFetch, setNewFetch] = useState();
  const addedWord = (word) => {
    setNewFetch(word);
  };
  return (
    <div className="pageContainer">
      <Header
        header="Twój słownik"
        text="Możesz stworzyć swój własny słownik"
      />
      <section className={styles.addWordContainer}>
        <AddWordForm word={addedWord} />
        <AddedWords newFetch={newFetch} />
      </section>
    </div>
  );
};

export default AddWordPage;
