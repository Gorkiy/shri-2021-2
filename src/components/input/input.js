import React, { useEffect } from 'react';

export const Input = props => {
  const { elementClass, type, onChange, ...rest } = props;

  return (
    <input
      className={`${elementClass ? elementClass + ' ' : ''}input${type ? ` input_${type}` : ''}`}
      type={type}
      onChange={e => onChange(e.target.value)}
      {...rest}
    />
  );
};