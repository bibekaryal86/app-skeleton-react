import React, { useCallback, useState } from 'react'
import styled, { css } from 'styled-components'

const FormLabel = styled.label``

const RadioButtonWrapper = styled.div.attrs({
  className: 'radio-button-wrapper',
})<{
  focus: boolean
  required: boolean
  showSideBySide?: boolean
}>`
  input[type='radio' i] {
    margin: 0px;
  }

  ${FormLabel} {
    ${({ focus, required }) => css`
      color: ${required ? '#e60000' : focus ? 'deepskyblue' : ''};
    `}
  }

  ${({ showSideBySide }) =>
    showSideBySide
      ? css`
          display: inline-flex;
          flex-wrap: wrap;
          gap: 12px;
        `
      : css``}
`

interface RadioButtonProps {
  id: string
  name: string
  title: string
  radioButtons: RadioButtonsProps[]
  required?: boolean
  disabled?: boolean
  showSideBySide?: boolean
  selectedValue?: string

  onChange(selectedValue: string, event?: React.ChangeEvent<HTMLInputElement>): void

  onClick?(event: React.MouseEvent<HTMLInputElement, MouseEvent>): void
}

interface RadioButtonsProps {
  value: string
  text?: string
  checked?: boolean
  singleDisabled?: boolean
}

interface RadioButtonsPropsExtra {
  setFocus: (focus: boolean) => void
}

const RadioButtons = (
  props: RadioButtonsProps & Partial<RadioButtonProps> & RadioButtonsPropsExtra,
): React.ReactElement => {
  const onClick = useCallback(
    (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
      if (!props.disabled) {
        props.setFocus(true)
        if (props.onClick) {
          props.onClick(event)
        }
      }
    },
    [props],
  )

  const onChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (!props.disabled && props.onChange) {
        props.onChange(event.target.value, event)
      }
    },
    [props],
  )

  const onBlur = useCallback(() => {
    props.setFocus(false)
  }, [props])

  const id = props.id + '-' + props.value

  return (
    <label htmlFor={id}>
      <input
        type="radio"
        id={id}
        name={props.name}
        value={props.value}
        checked={props.checked || false}
        disabled={props.disabled}
        onChange={onChange}
        onClick={onClick}
        onBlur={onBlur}
      />
      {props.text && <span className="label-body">{props.text}</span>}
    </label>
  )
}

const RadioButton = (props: RadioButtonProps): React.ReactElement => {
  const [focus, setFocus] = useState(false)
  const formLabel = (label: string, required: boolean): string => (required ? label + ' *' : label)

  return (
    <RadioButtonWrapper required={props.required === true} focus={focus} showSideBySide={props.showSideBySide}>
      <FormLabel htmlFor={props.id}>{formLabel(props.title, props.required === true)}</FormLabel>
      {props.radioButtons.map((radioButton) => (
        <RadioButtons
          key={radioButton.value}
          id={props.id}
          name={props.name}
          value={radioButton.value}
          checked={radioButton.value === props.selectedValue}
          disabled={radioButton.singleDisabled || props.disabled}
          onChange={props.onChange}
          onClick={props.onClick}
          setFocus={setFocus}
          text={radioButton.text}
        />
      ))}
    </RadioButtonWrapper>
  )
}

export default RadioButton
