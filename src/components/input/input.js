import React, { useEffect } from 'react';
import { ReactComponent as IconClear } from '../../assets/images/icon-clear.svg';

export const Input = props => {
  const { elementClass, type, onChange, ...rest } = props;

  return (
    <>
      <input
        className={`${elementClass ? elementClass + ' ' : ''}input${type ? ` input_${type}` : ''}`}
        type={type}
        onChange={e => onChange(e.target.value)}
        {...rest}
      />
      {type !== 'number' &&
        <button className="form__input-clear" type="number" onClick={() => onChange('')}>
          <IconClear className="form__input-icon" />
        </button>
      }
    </>
  );
};