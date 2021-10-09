import React, { useEffect } from 'react';
import { ReactComponent as IconClear } from '../../assets/images/icon-clear.svg';

export const Input = props => {
  const { elementClass, name, id, type, onChange, ...rest } = props;

  return (
    <>
      <input
        className={`${elementClass ? elementClass + ' ' : ''}input${type ? ` input_${type}` : ''}`}
        type={type}
        name={name}
        id={id || name}
        onChange={e => onChange(e.target.value)}
        pattern=".*\S+.*"
        {...rest}
      />
      {type !== 'number' &&
        <button className="form__input-clear" type="button" onClick={() => onChange('')}>
          <IconClear className="form__input-icon" />
        </button>
      }
    </>
  );
};