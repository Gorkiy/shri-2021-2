import React from 'react';
import './button.scss';

export const Button = props => {
  const { style, elementClass, title, icon, onClick, iconSize, size, disabled, type, ...rest } = props;
  const Icon = icon;

  const buttonClassName = `${elementClass ? elementClass + ' ' : ''}button${style ? ` button_${style}` : ''}${icon ? ` button_icon` : ''}${size ? ` button_${size}` : ''}${disabled ? ` button_disabled` : ''}`;

  return (
    <button
      className={buttonClassName}
      type={type || 'button'}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {Icon &&
        <Icon className={`button__icon`}
          fill={!style ? '#ffffff' : '#fa876b'} />
      }
      {title &&
        <span className={`button__title${style ? ` button__title_${style}` : ''}`}>
          {title}
        </span>
      }
    </button>
  );
}