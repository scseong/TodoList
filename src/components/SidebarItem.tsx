import React from 'react';
import { Link, useMatch } from 'react-router-dom';
import styles from './Sidebar.module.css';

interface IProps {
  category: string;
  length: number;
}

export default function SidebarItem({ category, length }: IProps) {
  const currentCategory =
    category === 'All' ? '' : category.toLocaleLowerCase();
  const match = useMatch(`/${currentCategory}`);

  return (
    <li className={match ? styles.isLocated : ''}>
      <Link to={`/${currentCategory}`}>
        {category}
        <span className={styles.badge}>{length}</span>
      </Link>
    </li>
  );
}
