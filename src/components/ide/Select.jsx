import React from 'react';

function Select(props) {
  const { setType, value, options, handle, ...otherProps } = props;

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <select {...otherProps} name={setType} value={value} onChange={handle}>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  );
}

export default Select;
