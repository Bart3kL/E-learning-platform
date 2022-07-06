import { NavLink ,Link} from 'react-router-dom';
import { MdPlayLesson } from 'react-icons/md';
import { RiFindReplaceLine } from 'react-icons/ri';
import { BiBookAlt } from 'react-icons/bi';
import { AiOutlineBlock } from 'react-icons/ai';
import { BsPencilSquare } from 'react-icons/bs';
import { FaAssistiveListeningSystems } from 'react-icons/fa';
import { SiBlockchaindotcom } from 'react-icons/si';

import styles from './ScienceNav.module.css';

const ScienceNav = () => {
  return (
    <nav className={styles.scienceNav}>
      <ul className={styles.scienceNavList}>
        <li className={styles.scienceNavPage}>
          <Link to="/lekcje" className={styles.scienceNavLink}>
            <MdPlayLesson className={styles.scienceNavIcon} />
            Lekcje
          </Link>
        </li>
        <li className={styles.scienceNavPage}>
          <Link to="/powtorki" className={styles.scienceNavLink}>
            <RiFindReplaceLine className={styles.scienceNavIcon} />
            Powtórki
          </Link>
        </li>
        <li className={styles.scienceNavPage}>
          <NavLink to="/cwiczenia" className={styles.scienceNavLink}>
            <BiBookAlt className={styles.scienceNavIcon} />
            Ćwiczenia
          </NavLink>
        </li>
        <li className={styles.scienceNavPage}>
          <NavLink to="/fiszki" className={styles.scienceNavLink}>
            <AiOutlineBlock className={styles.scienceNavIcon} />
            Fiszki
          </NavLink>
        </li>
        <li className={styles.scienceNavPage}>
          <NavLink to="/notatki" className={styles.scienceNavLink}>
            <BsPencilSquare className={styles.scienceNavIcon} />
            Notatki
          </NavLink>
        </li>
        <li className={styles.scienceNavPage}>
          <NavLink to="/nauka-ze-sluchu" className={styles.scienceNavLink}>
            <FaAssistiveListeningSystems className={styles.scienceNavIcon} />
            Nauka ze słuchu
          </NavLink>
        </li>
        <li className={styles.scienceNavPage}>
          <NavLink to="/dopasowywanie" className={styles.scienceNavLink}>
            <SiBlockchaindotcom className={styles.scienceNavIcon} />
            Dopasowywanie
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default ScienceNav;
