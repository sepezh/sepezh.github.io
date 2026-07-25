import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classes from './Footer.module.css';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons/faGithubSquare';
import { faLinkedinIn, faSquareXing } from '@fortawesome/free-brands-svg-icons';
import { NavLink } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <nav className={classes.navList}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${classes.email} ${isActive ? classes.active : undefined}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `${classes.email} ${isActive ? classes.active : undefined}`
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/about-me"
          className={({ isActive }) =>
            `${classes.email} ${isActive ? classes.active : undefined}`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `${classes.email} ${isActive ? classes.active : undefined}`
          }
        >
          Contact
        </NavLink>
      </nav>
      <div className={classes['footer-icons']}>
        <a
          href="https://www.github.com/sepezh"
          target="_blank"
          className={classes.link}
          aria-label="GitHub profile"
        >
          <FontAwesomeIcon icon={faGithubSquare}></FontAwesomeIcon>
        </a>
        <a
          href="https://www.xing.com/profile/Saeideh_Nezhad"
          target="_blank"
          className={classes.link}
          aria-label="Xing profile"
        >
          <FontAwesomeIcon icon={faSquareXing} />
        </a>
        <a
          href="https://www.linkedin.com/in/saeideh-nezhad/"
          target="_blank"
          className={classes.link}
          aria-label="LinkedIn profile"
        >
          <FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon>
        </a>
      </div>
    </footer>
  );
}
