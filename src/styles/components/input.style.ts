import { createGlobalStyle } from 'styled-components'

const InputStyle = createGlobalStyle`
  input[type='email'],
  input[type='number'],
  input[type='date'],
  input[type='search'],
  input[type='text'],
  input[type='tel'],
  input[type='url'],
  input[type='password'],
  textarea,
  select {
    height: 38px;
    padding: 6px;
    background-color: #fff;
    border: 1px solid #d1d1d1;
    border-radius: 4px;
    box-shadow: none;
    box-sizing: border-box;
    color: darkslategrey;
  }
  option {
    color: darkslategrey;
  }
  input[type='email'],
  input[type='number'],
  input[type='date'],
  input[type='search'],
  input[type='text'],
  input[type='tel'],
  input[type='url'],
  input[type='password'],
  textarea {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
  textarea {
    min-height: 65px;
    padding-top: 6px;
    padding-bottom: 6px;
    resize: none;
  }
  input[type='email']:focus,
  input[type='number']:focus,
  input[type='date']:focus,
  input[type='search']:focus,
  input[type='text']:focus,
  input[type='tel']:focus,
  input[type='url']:focus,
  input[type='password']:focus,
  textarea:focus,
  select:focus {
    border: 2px solid deepskyblue;
    outline: 0;
  }
  input[type='email']:required:focus,
  input[type='number']:required:focus,
  input[type='date']:required:focus,
  input[type='search']:required:focus,
  input[type='text']:required:focus,
  input[type='tel']:required:focus,
  input[type='url']:required:focus,
  input[type='password']:required:focus,
  textarea:required:focus,
  select:required:focus {
    border: 2px solid red;
    outline: 0;
  }
  input[type='email']:disabled,
  input[type='number']:disabled,
  input[type='date']:disabled,
  input[type='search']:disabled,
  input[type='text']:disabled,
  input[type='tel']:disabled,
  input[type='url']:disabled,
  input[type='password']:disabled,
  textarea:disabled,
  select:disabled {
    color: #aaaaaa;
    background-color: #efefef;
  }
  input[type='email']::placeholder,
  input[type='number']::placeholder,
  input[type='date']::placeholder,
  input[type='search']::placeholder,
  input[type='text']::placeholder,
  input[type='tel']::placeholder,
  input[type='url']::placeholder,
  input[type='password']::placeholder,
  textarea::placeholder {
    color: #aaaaaa;
  }
  label,
  legend {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 600;
  }
  fieldset {
    padding: 0;
    border-width: 0;
  }
  input[type='checkbox'],
  input[type='radio'] {
    display: inline;
  }
  label > .label-body {
    display: inline-block;
    margin-left: 0.5rem;
    font-weight: normal;
  }
  input,
  textarea,
  select,
  fieldset {
    margin-bottom: 1.5rem;
  }
`

export default InputStyle
