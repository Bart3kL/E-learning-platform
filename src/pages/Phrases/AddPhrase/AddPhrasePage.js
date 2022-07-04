import Header from '../../../components/Layout/Header';
import AddForm from '../../../components/AddForm';
import AddedItems from '../../../components/AddedItems'
import { useState } from 'react';
import styles from './AddPhrasePage.module.css';

const AddPhrasePage = () => {
  const [newFetch, setNewFetch] = useState();
  const addedWord = (word) => {
    setNewFetch(word);
  };
  return (
    <div className="pageContainer">
      <Header
        header="Twoje zwroty"
        text="Możesz dodać swoje własne zwroty."
      />
      <section className={styles.addWordContainer}>
        <AddForm word={addedWord} type='phrases' name='Zwrot'/>
        <AddedItems newFetch={newFetch} type='phrases'/>
      </section>
    </div>
  );
};

export default AddPhrasePage;
