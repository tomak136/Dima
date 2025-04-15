import React from 'react';
import { Outlet } from 'react-router';
import * as styles from './styles.module.css';
import { NavBar } from '../../components/NavBar';

function Dashboard() {
  return (
    <aside>
      <div className={styles.wrapperContainer}>
        <div style={{ position: 'fixed' }}>
          <NavBar />
        </div>
        <div className={styles.outletContainer}>
          <Outlet />
        </div>
      </div>
    </aside>
  );
}

export default Dashboard;
