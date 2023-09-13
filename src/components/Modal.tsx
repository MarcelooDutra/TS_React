import React from 'react'

//css
import style from './Modal.module.css';

interface Props  {
    children: React.ReactNode;//quer dizer que dentro do children usaremos jsx
}

const Modal = ({children}: Props) => {

    const closeModal = (e: React.MouseEvent): void => {
        const modal = document.querySelector('#modal');
        modal!.classList.add("hide");
    }

  return (
    <div id='modal' className='hide'>
        <div className={style.fade} onClick={closeModal}></div>
        <div className={style.modal}>
            <h1>Texto modal</h1>
            {children}
        </div>
    </div>
  )
}

export default Modal