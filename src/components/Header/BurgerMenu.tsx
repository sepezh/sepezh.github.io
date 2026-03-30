import { type FC } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import classes from './BurgerMenu.module.css';

type BurgerMenuProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  theme: string;
  toggleTheme: () => void;
};

const BurgerMenu: FC<BurgerMenuProps> = ({
  isOpen,
  setIsOpen,
  theme,
  toggleTheme,
}) => {
  return (
    <div className={classes.rightMobile}>
      <button onClick={toggleTheme} className={classes.themeBtn}>
        {theme === 'light' ? (
          <span className="material-symbols-rounded">nightlight</span>
        ) : (
          <span className="material-symbols-rounded">wb_sunny</span>
        )}
      </button>

      <button
        className={classes.burger}
        aria-label="Toggle menu"
        onClick={() => setIsOpen(!isOpen)}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
            >
              <span className="material-symbols-rounded">close</span>
            </motion.div>
          ) : (
            <motion.div
              key="isOpen"
              initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
            >
              <span className="material-symbols-rounded">menu</span>
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </div>
  );
};

export default BurgerMenu;
