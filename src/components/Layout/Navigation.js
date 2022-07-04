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
        <ul className={styles.pagesList}>
          <li>
            <NavLink to="/nauka" className={activePage}>
              Nauka
            </NavLink>
          </li>
          <li>
            <span className={styles.dictionaryPage}>
              Słownik
              <IoIosArrowDown className={styles.navArrow} />
              <ul className={`${styles.dictionaryPages} firstAnimation`}>
                <li className={styles.dictionarySubpage}>
                  <NavLink
                    to="/slownik"
                    className={styles.dictionarySubpageLink}
                  >
                    Słownik
                  </NavLink>
                </li>
                <p className="underline"></p>
                <li className={styles.dictionarySubpage}>
                  <NavLink
                    to="dodaj-slowo"
                    className={styles.dictionarySubpageLink}
                  >
                    Dodaj słowo
                  </NavLink>
                </li>
              </ul>
            </span>
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
