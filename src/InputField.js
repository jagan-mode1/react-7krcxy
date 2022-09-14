import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { validateInput } from './Validator';

const InputField = ({
  value,
  label,
  placeholder,
  validators,
  type,
  onChange,
  onFocus,
  name,
  ref,
  mainError,
}) => {
  const [error, setError] = useState(false);

  const handleChange = (event) => {
    const { value } = event.target;
    setError(validateInput(validators, value));
    onChange(value);
  };
  const handleChange2 = (event) => {
    console.log('focus working');
    const { value } = event.target;
    setError(validateInput(validators, value));
    onFocus(value);
  };

  return (
    <div className="form-group">
      {label && <label htmlFor="app-input-field">{label}</label>}

      {type === 'textarea' ? (
        <textarea
          className="form-control"
          placeholder={placeholder}
          name={name}
          value={value}
          defaultValue={value}
          onChange={handleChange}
          onBlur={handleChange}
          onFocus={handleChange2}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          className="form-control"
          placeholder={placeholder}
          onChange={handleChange}
          onBlur={handleChange}
          onFocus={handleChange2} 
          required
        />
      )}
      {error && <span className="text-danger">{error.message}</span>}
      {mainError === '' ? (
        ''
      ) : (
        <span className="text-danger">{mainError}as</span>
      )}
    </div>
  );
};

InputField.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  validators: PropTypes.array,
  type: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

InputField.defaultProps = {
  value: '',
  name: '',
  ref: '',
  label: '',
  placeholder: '',
  type: 'text',
  validators: [],
  mainError: '',
};

export default InputField;
