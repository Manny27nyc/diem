// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
import React from 'react';

import styles from './styles.module.css';

const NotificationBar = ({children}) => (
  <div className={styles.root}>{children}</div>
);

export default NotificationBar;
