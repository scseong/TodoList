import React from 'react';
import { useDarkMode } from '../reducer/DarkModeContext';
import styles from './ToggleTheme.module.css';

export default function ToggleTheme() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className={styles.theme}>
      <input
        type="checkbox"
        id="toggle"
        hidden
        checked={darkMode}
        onChange={toggleDarkMode}
      />
      <label htmlFor="toggle">
        <span />
      </label>
    </div>
  );
}
