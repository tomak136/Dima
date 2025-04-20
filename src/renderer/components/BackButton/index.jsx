import React from 'react';
import { Icons } from '../SVGIcons';
import * as styles from './styles.module.css';
import { useNavigate } from 'react-router';

function BackButton({ route, backRoute, currentRouteTitle }) {
  const navigate = useNavigate();
  return (
    <button
      type="button"
      onClick={() => {
        navigate(-1);
      }}
      className={styles.BackButton}
    >
      <div className={styles.icon}>
        <Icons type={'back-button'} color={'grey'} width={24} height={24} />
      </div>
      <div className={styles.headerContainer}>
        <p className={styles.backRoute}>Back to {backRoute}</p>
        <p className={styles.currentRouteTitle}>{currentRouteTitle}</p>
      </div>
    </button>
  );
}

export default BackButton;
