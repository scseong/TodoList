import React from 'react';
import { Link, useMatch } from 'react-router-dom';
import { capitalizeFirstLetter } from '../utils/String';
import styles from './Sidebar.module.css';

interface ISidebarItemProps {
  status: string;
  length: number;
}

export default function SidebarItem({ status, length }: ISidebarItemProps) {
  const currentStatus = status === 'all' ? '' : status;
  const match = useMatch(`/${currentStatus}`);

  return (
    <li className={match ? styles.isLocated : ''}>
      <Link to={`/${currentStatus}`}>
        {capitalizeFirstLetter(status)}
        <span className={styles.badge}>{length}</span>
      </Link>
    </li>
  );
}
