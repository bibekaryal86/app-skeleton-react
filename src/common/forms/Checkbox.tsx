import React, { useCallback, useState } from 'react'
import styled, { css } from 'styled-components'
import Button from './Button'

const FormLabel = styled.label``

const CheckboxWrapper = styled.div.attrs({
  className: 'checkbox-wrapper',
})<{
  focus: boolean
  required?: boolean
  showSideBySide?: boolean
}>`
  input[type='checkbox' i] {
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

interface CheckboxProps {
  id: string
  title: string
  checkboxes: CheckboxesProps[]
  includeButtons?: boolean
  required?: boolean
  disabled?: boolean
  showSideBySide?: boolean
  checkedValues?: string[]
  setCheckboxValues?: (checkedValues: string[]) => void

  onClick(selectedValue: string, event?: React.MouseEvent<HTMLInputElement, MouseEvent>): void

  onChange?(event: React.ChangeEvent<HTMLInputElement>): void
}

interface CheckboxesProps {
  value: string
  text?: string
  checked?: boolean
  singleDisabled?: boolean
}

interface CheckboxesPropsExtra {
  setFocus: (focus: boolean) => void
}

const Checkboxes = (props: CheckboxesProps & Partial<CheckboxProps> & CheckboxesPropsExtra): React.ReactElement => {
  const onClick = useCallback(
    (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
      if (!props.disabled) {
        props.setFocus(true)
        if (props.onClick) {
          props.onClick((event.target as HTMLInputElement).value, event)
        }
      }
    },
    [props],
  )

  const onChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (!props.disabled && props.onChange) {
        props.onChange(event)
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
        type="checkbox"
        id={id}
        value={props.value}
        checked={props.checked}
        disabled={props.disabled}
        onChange={onChange}
        onClick={onClick}
        onBlur={onBlur}
      />
      {props.text && <span className="label-body">{props.text}</span>}
    </label>
  )
}

const Checkbox = (props: CheckboxProps): React.ReactElement => {
  const [focus, setFocus] = useState(false)

  const formLabel = (label: string, required?: boolean): string => (required ? label + ' *' : label)

  const onSelectAll = useCallback(() => {
    const newArray = props.checkboxes.map((checkbox) => checkbox.value)
    props.setCheckboxValues && props.setCheckboxValues(newArray)
  }, [props])
  const onSelectNone = useCallback(() => {
    props.setCheckboxValues && props.setCheckboxValues([''])
  }, [props])

  return (
    <CheckboxWrapper required={props.required} focus={focus} showSideBySide={props.showSideBySide}>
      <FormLabel htmlFor={props.id}>{formLabel(props.title, props.required)}</FormLabel>
      {props.checkboxes.map((checkbox) => (
        <Checkboxes
          key={checkbox.value}
          id={props.id}
          value={checkbox.value}
          checked={props.checkedValues?.includes(checkbox.value)}
          disabled={checkbox.singleDisabled || props.disabled}
          onChange={props.onChange}
          onClick={props.onClick}
          setFocus={setFocus}
          text={checkbox.text}
        />
      ))}
      {props.includeButtons && (
        <>
          <Button id={props.id + '-selectAll'} title="Select All" onClick={onSelectAll} includeBorder />
          <Button id={props.id + '-selectNone'} title="Select None" onClick={onSelectNone} includeBorder />
        </>
      )}
    </CheckboxWrapper>
  )
}

export default Checkbox
