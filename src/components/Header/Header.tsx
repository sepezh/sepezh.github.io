import { NavLink } from 'react-router-dom';

import { useTheme } from '../../context/theme-context';
import classes from './Header.module.css';
import { lazy, useState } from 'react';
const BurgerMenu = lazy(() => import('./BurgerMenu'));

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
            <span className="material-symbols-rounded">nightlight</span>
          ) : (
            <span className="material-symbols-rounded">wb_sunny</span>
          )}
        </button>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `${classes.email} ${isActive ? classes.active : undefined}`
          }
        >
          <span className="material-symbols-rounded">chat</span>
        </NavLink>
      </div>
    </header>
  );
}
