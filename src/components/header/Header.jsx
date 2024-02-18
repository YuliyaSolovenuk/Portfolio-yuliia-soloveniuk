import { NavLink } from 'react-router-dom';
import css from './Header.module.css';
import Logo from '../../images/logo-light-mini.png';

const Header = () => {
  return (
    <header className={css.header}>
      <div className={css.logoWrapper}>
        <img className={css.logoWrapper} src={Logo} alt="logo" width={400} height={100}/>
      </div>
      <nav>
        <ul className={css.navList}>
          <li className={css.navItem}>
            <NavLink
              className={({ isActive }) =>
                [isActive ? css['active'] : '', css['navLink']].join(' ')
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className={css.navItem}>
            <NavLink
              className={({ isActive }) =>
                [isActive ? css['active'] : '', css['navLink']].join(' ')
              }
              to="/about"
            >
              About me
            </NavLink>
          </li>
          <li className={css.navItem}>
            <NavLink
              className={({ isActive }) =>
                [isActive ? css['active'] : '', css['navLink']].join(' ')
              }
              to="/projects"
            >
              Projects
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
