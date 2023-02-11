import React from 'react';
import { Link, Location } from 'react-router-dom';
import { useToDosState } from '../reducer/ToDosContext';
import { Status } from '../typing/db';
import styles from './ToDos.module.css';

interface IToDosProp {
  location?: Location;
}

interface DateTimeFormatOptions {
  weekday?: 'long' | 'short' | 'narrow' | undefined;
  year?: 'numeric' | '2-digit' | undefined;
  month?: 'numeric' | '2-digit' | 'long' | 'short' | 'narrow' | undefined;
  day?: 'numeric' | '2-digit' | undefined;
}

const options: DateTimeFormatOptions = {
  year: '2-digit',
  month: '2-digit',
  day: '2-digit',
  weekday: 'narrow',
};

export default function ToDos({ location }: IToDosProp) {
  const toDos = useToDosState();
  const onChange = (e: any) => {
    console.log(e.currentTarget.id);
  };

  return (
    <main className={styles['toDos']}>
      <div className={styles['toDos-heading']}>
        <h2>투두스</h2>
      </div>
      <div className={styles['toDos-container']}>
        <div className={styles['toDos-nav']}>
          <ul>
            <li className={styles['toDos-nav__item--active']}>
              <Link to="/">
                <span className={styles['toDos-nav__count']}>10</span>
                <span>전체</span>
              </Link>
            </li>
            <li className={styles['toDos-nav__item']}>
              <Link to="/active">
                <span className={styles['toDos-nav__count']}>5</span>
                <span>진행중</span>
              </Link>
            </li>
            <li className={styles['toDos-nav__item']}>
              <Link to="/completed">
                <span className={styles['toDos-nav__count']}>5</span>
                <span>완료</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles['toDos-wrapper']}>
          <ul>
            {Object.keys(toDos).map((toDoKey, index) => (
              <React.Fragment key={index}>
                <div className={styles['toDos-wrapper__heading']}>
                  <h3 key={index}>{toDoKey}</h3>
                </div>
                <div className={styles['toDos-wrapper__lists']}>
                  {toDos[toDoKey as Status].map((toDo) => (
                    <li key={toDo.id} className={styles['toDos-wrapper__list']}>
                      <input
                        type="checkbox"
                        id={toDo.id}
                        onChange={onChange}
                        hidden
                      />
                      <label htmlFor={toDo.id}></label>
                      <span>{toDo.description}</span>
                      <span>
                        {new Date(toDo.createdBy).toLocaleDateString(
                          'ko-KR',
                          options,
                        )}
                      </span>
                    </li>
                  ))}
                </div>
              </React.Fragment>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
