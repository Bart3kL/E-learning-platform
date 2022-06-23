import { NavLink, Link, useLocation } from 'react-router-dom';
import { IoIosArrowDown } from 'react-icons/io';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store/auth';

import styles from './Navigation.module.css';

const Navigation = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const logged = useSelector((state) => state.auth.logged);

  const logoutHandler = () => {
    dispatch(authActions.logged());
  };

  const activePage = (data) =>
    data.isActive ? `${styles.activePageUnderline}` : '';

  return (
    <header className={styles.header}>
      <Link className={styles.headerLogo} to="/edudor">
        Edudor
      </Link>
      <nav className={styles.navigation}>
        <ul>
          <li>
            <NavLink to="/nauka" className={activePage}>
              Nauka
            </NavLink>
          </li>
          <li>
            <NavLink to="/slownik">
              Słownik
              <IoIosArrowDown className={styles.navArrow} />
            </NavLink>
            {/* <ul className={styles.dictionaryPages}>
              <li className={styles.dictionarySubpage}>
                <NavLink to="/slownik" className={styles.dictionarySubpageLink}>
                  Słownik
                </NavLink>
              </li>
              <li className={styles.dictionarySubpage}>
                <NavLink
                  to="/slownik/dodaj-slowo"
                  className={styles.dictionarySubpageLink}
                >
                  Dodaj słowo
                </NavLink>
              </li>
            </ul> */}
          </li>
          <li>
            <NavLink to="/gramatyka" className={activePage}>
              Gramatyka
            </NavLink>
          </li>
          <li>
            <NavLink to="/zwroty" className={activePage}>
              Zwroty
              <IoIosArrowDown className={styles.navArrow} />
            </NavLink>
          </li>
          <li>
            <NavLink to="/kontakt" className={activePage}>
              Kontakt
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className={styles.authBtns}>
        {!logged ? (
          <Link to="logowanie">
            {pathname === '/logowanie' ? (
              ''
            ) : (
              <button className={styles.authBtn}>ZALOGUJ SIĘ</button>
            )}
          </Link>
        ) : (
          <button className={styles.authBtn} onClick={logoutHandler}>
            WYLOGUJ SIĘ
          </button>
        )}
      </div>
    </header>
  );
};

export default Navigation;
