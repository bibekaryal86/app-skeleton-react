import React, { useCallback, useState } from 'react'
import styled, { css } from 'styled-components'

const FormLabel = styled.label``

const SelectWrapper = styled.div.attrs({ className: 'select-wrapper' })<{
  focus: boolean
  required?: boolean
}>`
  select {
    height: fit-content;
  }

  ${FormLabel} {
    ${({ focus, required }) => css`
      color: ${required ? '#e60000' : focus ? 'deepskyblue' : ''};
    `}
  }
`

interface SelectProps extends Partial<SelectPropsOptional> {
  id: string
  label: string
  value: string | string[]
  options: SelectOptionProps[]

  onChange(input: string, event?: React.ChangeEvent<HTMLSelectElement>): void
}

interface SelectPropsOptional {
  className?: string
  disabled?: boolean
  autoComplete?: string
  required?: boolean
  multiple?: boolean
  size?: number
}

export interface SelectOptionProps {
  value: string
  text: string
  hidden?: boolean
}

// eslint-disable-next-line react/display-name
const SelectOption = React.memo<SelectOptionProps>((props) => (
  <option value={props.value} hidden={props.hidden === true}>
    {props.text}
  </option>
))

const Select: React.FC<SelectProps> = (props) => {
  const [focus, setFocus] = useState(false)

  const onChange = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      if (!props.disabled) {
        props.onChange(event.target.value, event)
      }
    },
    [props],
  )

  const onFocus = useCallback(() => {
    setFocus(true)
  }, [])

  const onBlur = useCallback(() => {
    setFocus(false)
  }, [])

  const formLabel = (label: string, required?: boolean): string => (required ? label + ' *' : label)

  const size = props.size ? props.size : props.multiple ? Math.min(7, props.options.length) : 0

  return (
    <SelectWrapper focus={focus} required={props.required}>
      <FormLabel htmlFor={props.id}>{formLabel(props.label, props.required)}</FormLabel>
      <select
        className={props.className}
        id={props.id}
        name={props.id}
        disabled={props.disabled}
        value={props.value}
        autoComplete={props.autoComplete}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        required={props.required}
        multiple={props.multiple}
        size={size}
      >
        {props.options.map((option) => (
          <SelectOption {...option} key={option.value} />
        ))}
      </select>
    </SelectWrapper>
  )
}

export default Select
