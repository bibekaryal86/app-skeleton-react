import React, { useCallback, useState } from 'react'
import styled, { css } from 'styled-components'

const FormLabel = styled.label``
const FormInput = styled.input``

const InputWrapper = styled.div.attrs({ className: 'input-wrapper' })<{
  focus: boolean
  required?: boolean
}>`
  ${FormLabel} {
    ${({ focus, required }) => css`
      color: ${required ? '#e60000' : focus ? 'deepskyblue' : ''};
    `}
  }

  ${FormInput} {
    ${({ focus, required }) => css`
      border: ${focus && required ? '2px solid #e60000' : ''};
    `}
  }
`

export enum InputType {
  email,
  number,
  search,
  text,
  tel,
  url,
  password,
  date,
}

interface InputOptionalProps {
  disabled: boolean
  size: number
  maxLength: number
  min: React.ReactText
  max: React.ReactText
  placeholder: string
  className: string
  required: boolean
  type: InputType
  autoComplete: string
}

interface InputOptionalCallbacks {
  inputFilter(currentValue: string, newValue: string): string

  onFocus(event?: React.FocusEvent<HTMLInputElement>): void

  onBlur(event?: React.FocusEvent<HTMLInputElement>): void

  onKeyPress(event?: React.KeyboardEvent<HTMLInputElement>): void

  onPaste(event?: React.ClipboardEvent<HTMLInputElement>): void
}

interface InputProps extends Partial<InputOptionalProps & InputOptionalCallbacks> {
  id: string
  label: string
  value: string

  onChange(input: string, event?: React.ChangeEvent<HTMLInputElement>): void
}

// eslint-disable-next-line react/display-name
const Input = React.memo<InputProps>((props) => {
  const [focus, setFocus] = useState(false)
  const { value = '', type = InputType.text } = props

  const onChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (!props.disabled) {
        props.onChange(props.inputFilter ? props.inputFilter(value, event.target.value) : event.target.value, event)
      }
    },
    [props, value],
  )

  const onFocus = useCallback(
    (event: React.FocusEvent<HTMLInputElement>) => {
      setFocus(true)
      if (props.onFocus) {
        props.onFocus(event)
      }
    },
    [props],
  )

  const onBlur = useCallback(
    (event: React.FocusEvent<HTMLInputElement>) => {
      setFocus(false)
      if (props.onBlur) {
        props.onBlur(event)
      }
    },
    [props],
  )

  const formLabel = (label: string, required?: boolean): string => (required ? label + ' *' : label)

  return (
    <InputWrapper focus={focus} required={props.required}>
      <FormLabel htmlFor={props.id}>{formLabel(props.label, props.required)}</FormLabel>
      <FormInput
        className={props.className}
        id={props.id}
        name={props.id}
        disabled={props.disabled}
        size={props.size}
        maxLength={props.maxLength}
        max={props.max}
        min={props.min}
        placeholder={props.placeholder}
        required={props.required}
        value={value}
        type={InputType[type]}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        onKeyPress={props.onKeyPress}
        onPaste={props.onPaste}
        autoComplete={props.autoComplete}
      />
    </InputWrapper>
  )
})

export default Input
