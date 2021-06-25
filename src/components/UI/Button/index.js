import React from 'react';

import styles from './styles.css';

export function Button(props) {
  return (
    <button type={props.type} className={styles} onClick={props.onClick}>
      {props.children}
    </button>
  );
}
