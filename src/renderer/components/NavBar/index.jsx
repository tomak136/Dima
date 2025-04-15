import { NavLink } from 'react-router';
import * as styles from './styles.module.css';
import { constants } from '../../Constants';
import { Icons } from '../SVGIcons';

export function NavBar() {
  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.companyLogo}>DIMA</div>
      <nav className={styles.link}>
        {constants.NAVBAR_LINKS.map((item, i) => (
          <div className={styles.itemContainer} key={i}>
            <NavLink
              to={item.to}
              style={({ isActive }) => ({
                color: isActive ? 'steelblue' : 'white',
              })}
            >
              {({ isActive }) => (
                <span className={isActive ? 'active' : ''}>
                  <div className={styles.icon}>
                    <Icons
                      type={item.title}
                      color={isActive ? 'steelblue' : 'white'}
                      width={'22px'}
                      height={'22px'}
                    />
                  </div>
                  <div className={styles.title}>{item.title}</div>
                </span>
              )}
            </NavLink>
          </div>
        ))}
      </nav>
      <div className={[styles.logout]}>Logout</div>
    </div>
  );
}
