import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAddressCard,
  faMoon,
  faSun,
} from '@fortawesome/free-solid-svg-icons';

import { useTheme } from '../../context/theme-context';
import classes from './Header.module.css';
import { useState } from 'react';
import BurgerMenu from './BurgerMenu';

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState<boolean>(false);

  return (
    <header className={classes.header}>
      <NavLink to="/" className={classes.sepezh}>
        Sepezh
        <span className={classes.dot}>.</span>
      </NavLink>
      <nav>
        <ul
          className={classes.navList + (open ? ` ${classes.navListOpen}` : '')}
        >
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about-me"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              About
            </NavLink>
          </li>
          <li className={classes.mobileOnly}>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${classes.email} ${isActive ? classes.active : undefined}`
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
      <BurgerMenu
        open={open}
        setOpen={setOpen}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      <div className={classes.right}>
        <button onClick={toggleTheme} className={classes.themeBtn}>
          {theme === 'light' ? (
            <FontAwesomeIcon icon={faSun} />
          ) : (
            <FontAwesomeIcon icon={faMoon} />
          )}
        </button>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `${classes.email} ${isActive ? classes.active : undefined}`
          }
        >
          <FontAwesomeIcon icon={faAddressCard}></FontAwesomeIcon>
        </NavLink>
      </div>
    </header>
  );
}
