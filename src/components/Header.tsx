import React from 'react'

import style from './Header.module.css';

const Header = () => {
  return (
    <div>
        <header className={style.header}>
            <h1>React + TS Todo</h1>
        </header>
  </div>
  )
}

export default Header