import React, { useState, useRef } from 'react';
import './style.css';
import InputField from './InputField';
import { Validators } from './Validator';

const App = () => {
  const [inputValue, setInputValue] = useState({ name: '', price: '' });
  const [text, setText] = useState('');
  const [text2, setText2] = useState('');
  const { name, price } = inputValue;
  const inputRef = useRef(null);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(inputValue);
  };
  const handleChangeText = (e) => {
    setText(e);
  };
  const handleChangeText2 = (e) => {
    setText2(e);
  };
  const handleClick = (e) => {
    setText(e);
    console.log('onclick working');
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('test', inputRef.current.value);
    if (!text) {
      alert('working');
      // handleClick(text);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <InputField
        value={text}
        type="text"
        name="text"
        placeholder="Enter text here..."
        validators={[
          { check: Validators.required, message: 'This field is required' },
        ]}
        onChange={handleChangeText}
        onFocus={handleClick}
      />
      <InputField
        value={text2}
        type="text"
        name="text"
        placeholder="Enter text here..."
        validators={[
          { check: Validators.required, message: 'This field is required' },
        ]}
        onChange={handleChangeText2}
        onFocus={handleClick}
      />
      <input
        ref={inputRef}
        type="text"
        id="message"
        name="message"
        autoComplete="off"
      />
      <button color="primary">Add</button>{' '}
      <button color="secondary">Cancel</button>
    </form>
  );
};

export default App;
