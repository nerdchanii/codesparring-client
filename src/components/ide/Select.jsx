import React from 'react';

function Select(props) {
  const { setType, value, options, handle } = props;

  return (
    <select name={setType} value={value} onChange={handle}>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  );
}

export default Select;
