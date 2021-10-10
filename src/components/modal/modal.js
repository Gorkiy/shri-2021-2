import React, { useEffect } from 'react';
import { ROOT } from '../../config/config';
import ReactDOM from 'react-dom';
import './modal.scss';

const root = document.getElementById(ROOT);

export const Modal = props => {
  const { isShown, onClose, children, title } = props;
  useEffect(() => {
    // document.addEventListener('click', onOutsideClick);
    document.addEventListener('keydown', onKeyPress);
    return () => {
      // document.removeEventListener('click', onOutsideClick);
      document.removeEventListener('keydown', onKeyPress);
    };
  }, []);

  useEffect(() => {
    if (isShown) {
      document.querySelector('body').style.overflow = 'hidden';
    } else {
      document.querySelector('body').style.overflow = 'auto';
    }
  })

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
          <h3 className="modal__title">
            {title}
          </h3>
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