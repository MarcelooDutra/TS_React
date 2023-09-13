import React from 'react'

import style from './Footer.module.css';

const Footer = () => {
  return (
    <div>
        <footer className={style.footer}>
            <p>
              <span>React + TS Todo</span> @2023
            </p>
        </footer>
  </div>
  )
}

export default Footer