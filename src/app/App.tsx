import React from 'react';
import styles from './App.module.scss';
import { AppLogo } from './components/AppLogo';

export const App: React.FC = () => {
  return (
    <div className={styles.App}>
      <header className={styles.App_header}>
        <AppLogo />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
    </div>
  );
};
