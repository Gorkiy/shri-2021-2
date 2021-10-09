import React from 'react';
import { Link } from 'react-router-dom';

export const ButtonLink = props => {
  const { style, elementClass, title, icon, to, size, disabled } = props;
  const Icon = icon;

  const buttonClassName = `${elementClass ? elementClass + ' ' : ''}button${style ? ` button_${style}` : ''}${icon ? ` button_icon` : ''}${size ? ` button_${size}` : ''}${disabled ? ` button_disabled` : ''}`;

  return (
    <Link
      className={buttonClassName}
      to={to}
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
    </Link>
  );
}