import styles from './GrammarNote.module.css';
const GrammarNote = ({ note }) => {
  const notes = [];
  for (const key in note) {
    notes.push({
      noteName: note[key].name,
      header1: note[key].szczegoly.header1,
      text1: note[key].szczegoly.text1,
      header2: note[key].szczegoly.header2,
      text2: note[key].szczegoly.text2,
      header3: note[key].szczegoly.header3,
      text3: note[key].szczegoly.text3,
      header4: note[key].szczegoly.header4,
      text4: note[key].szczegoly.text4,
      header5: note[key].szczegoly.header5,
      text5: note[key].szczegoly.text5,
      header6: note[key].szczegoly.header6,
      text6: note[key].szczegoly.text6,
      header7: note[key].szczegoly.header7,
      text7: note[key].szczegoly.text7,
      header8: note[key].szczegoly.header8,
      text8: note[key].szczegoly.text8,
    });
  }
  return (
    <ul className={styles.grammarContainer}>
      {notes.map((note) => (
        <li className={styles.column} key={note.noteName}>
          <div className={styles.noteName}>{note.noteName}</div>
          <div className={styles.detail}>
            <div className={styles.header}>{note.header1}</div>
            <div className={styles.text}>{note.text1}</div>
          </div>
          <div className={styles.detail}>
            <div className={styles.header}>{note.header2}</div>
            <div className={styles.text}>{note.text2}</div>
            <div className={styles.example}>{note.header3}</div>
            <div className={styles.exampleText}>{note.text3}</div>
          </div>
          <div className={styles.detail}>
            <div className={styles.header}>{note.header4}</div>
            <div className={styles.text}>{note.text4}</div>
            <div className={styles.example}>{note.header5}</div>
            <div className={styles.exampleText}>{note.text5}</div>
          </div>
          <div className={styles.detail}>
            <div className={styles.header}>{note.header6}</div>
            <div className={styles.text}>{note.text6}</div>
            <div className={styles.example}>{note.header7}</div>
            <div className={styles.exampleText}>{note.text7}</div>
          </div>
          <div className={styles.detail}>
            <div className={styles.header}>{note.header8}</div>
            <div className={styles.text}>{note.text8}</div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default GrammarNote;
