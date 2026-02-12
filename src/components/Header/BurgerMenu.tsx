import type { FC } from 'react';
import {
  faBars,
  faMoon,
  faSun,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AnimatePresence, motion } from 'framer-motion';

import classes from './BurgerMenu.module.css';

type BurgerMenuProps = {
  open: boolean;
  setOpen: (value: boolean) => void;
  theme: string;
  toggleTheme: () => void;
};

const BurgerMenu: FC<BurgerMenuProps> = ({
  open,
  setOpen,
  theme,
  toggleTheme,
}) => {
  return (
    <div className={classes.rightMobile}>
      <button onClick={toggleTheme} className={classes.themeBtn}>
        {theme === 'light' ? (
          <FontAwesomeIcon icon={faSun} />
        ) : (
          <FontAwesomeIcon icon={faMoon} />
        )}
      </button>

      <button
        className={classes.burger}
        aria-label="Toggle menu"
        onClick={() => setOpen(!open)}
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div
              key="close"
              initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
            >
              <FontAwesomeIcon icon={faTimes} />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
            >
              <FontAwesomeIcon icon={faBars} />
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </div>
  );
};

export default BurgerMenu;
