import { createGlobalStyle } from 'styled-components'

const ButtonStyle = createGlobalStyle`
  .button,
  button {
    display: inline-block;
    height: 38px;
    padding: 0 15px;
    margin: 5px;
    text-align: center;
    line-height: 38px;
    letter-spacing: 0.1rem;
    white-space: nowrap;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    box-sizing: border-box;
    background: inherit;
    color: inherit;
    font: inherit;
  }
  .button:hover:enabled,
  button:hover:enabled {
    box-shadow: inset -1px -1px 2px, inset 1px 1px 2px;
  }
  .button:active,
  button:active {
    transform: scale(1.05);
    font-weight: bold;
  }
  .button:disabled,
  button:disabled{
    cursor: auto;
    border: 1px dashed;
    color: inherit;
  }
  button,
  .button {
    margin-bottom: 1rem;
  }
`

export default ButtonStyle
