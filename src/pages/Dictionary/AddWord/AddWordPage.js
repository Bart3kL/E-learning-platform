import Header from '../../../components/Layout/Header';
import AddForm from '../../../components/AddForm';
import AddedItems from '../../../components/AddedItems'
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
        header="Twoje słówka"
        text="Dodaj słowa, których nie umiesz (zostaną dodane do fiszek i powtórek)."
      />
      <section className={styles.addWordContainer}>
        <AddForm word={addedWord} name='Słowo'/>
        <AddedItems newFetch={newFetch} />
      </section>
    </div>
  );
};

export default AddWordPage;
