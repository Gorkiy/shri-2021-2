import React from 'react';
import './button.scss';

export const Button = props => {
  const { style, elementClass, title, icon, onClick, iconSize, size, disabled, type, ...rest } = props;
  const Icon = icon;

  return (
    <button
      className={`${elementClass ? elementClass + ' ' : ''}button${style ? ` button_${style}` : ''}${icon ? ` button_icon` : ''}${size ? ` button_${size}` : ''}${disabled ? ` button_disabled` : ''}`}
      type={type || 'button'}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {!Icon
        ? null
        : <Icon
          className={`button__icon`}
          fill={!style ? '#ffffff' : '#fa876b'} />
      }
      {!title
        ? null
        :
        <span className={`button__title${style ? ` button__title_${style}` : ''}`}>
          {title}
        </span>
      }
    </button>
  );
}