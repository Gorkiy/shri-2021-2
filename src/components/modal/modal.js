import React, { useEffect } from 'react';
import { ROOT } from '../../utils/config';
import ReactDOM from 'react-dom';
import './modal.scss';
import PulseLoader from 'react-spinners/PulseLoader';

const root = document.getElementById(ROOT);

export const Modal = props => {
  const { isShown, onClose, title, children, loading } = props;
  useEffect(() => {
    document.addEventListener('click', onOutsideClick);
    document.addEventListener('keydown', onKeyPress);
    document.querySelector('body').style.overflow = 'hidden';
    return () => {
      document.removeEventListener('click', onOutsideClick);
      document.removeEventListener('keydown', onKeyPress);
      document.querySelector('body').style.overflow = 'auto';
    };
  }, []);

  const onOutsideClick = e => {
    const target = e.target;
    const isOnOverlayClick = target.classList.contains('modal__overlay');

    if (isOnOverlayClick) onClose();
  }

  const onKeyPress = e => {
    if (e.key === 'Escape') {
      onClose();
    }
  }

  if (!isShown) return null;

  return root && ReactDOM.createPortal(
    <aside className="modal">
      <div className="modal__content">
        {title &&
          <div className="modal__head">
            <h3 className="modal__title">
              {title}
            </h3>
            <button className="modal__close-button" type="button" onClick={onClose}></button>
          </div>
        }
        <div className="modal__body">
          {children}
        </div>
      </div>
      <div className="modal__overlay"></div>
    </aside>,
    root
  );
}