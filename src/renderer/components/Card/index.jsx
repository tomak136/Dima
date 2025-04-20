import React from 'react';
import * as styles from './styles.module.css';

function Card(props) {
  return (
    <div className={styles.cardContainer}>
      {props.title ? <div className={styles.title}>{props.title}</div> : null}
      <div className={styles.card}>{props.children}</div>
    </div>
  );
}

export default Card;
