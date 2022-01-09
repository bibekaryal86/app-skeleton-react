import React, { useCallback, useState } from 'react'
import styled, { css } from 'styled-components'

const FormLabel = styled.label``
const FormTextArea = styled.textarea``

const TextAreaWrapper = styled.div.attrs({ className: 'textArea-wrapper' })<{
  focus: boolean
  required?: boolean
}>`
  ${FormLabel} {
    ${({ focus, required }) => css`
      color: ${required ? '#e60000' : focus ? 'deepskyblue' : ''};
    `}
  }

  ${FormTextArea} {
    ${({ focus, required }) => css`
      border: ${focus && required ? '2px solid #e60000' : ''};
    `}
  }
`

interface TextAreaOptionalProps {
  disabled: boolean
  rows: number
  cols: number
  maxLength: number
  placeholder: string
  className: string
  required: boolean
  wrap: string
}

interface TextAreaOptionalCallbacks {
  inputFilter(currentValue: string, newValue: string): string

  onFocus(event?: React.FocusEvent<HTMLTextAreaElement>): void

  onBlur(event?: React.FocusEvent<HTMLTextAreaElement>): void

  onKeyPress(event?: React.KeyboardEvent<HTMLTextAreaElement>): void

  onPaste(event?: React.ClipboardEvent<HTMLTextAreaElement>): void
}

interface TextAreaProps extends Partial<TextAreaOptionalProps & TextAreaOptionalCallbacks> {
  id: string
  label: string
  value: string

  onChange(input: string, event?: React.ChangeEvent<HTMLTextAreaElement>): void
}

// eslint-disable-next-line react/display-name
const TextArea = React.memo<TextAreaProps>((props) => {
  const [focus, setFocus] = useState(false)
  const { value = '', wrap = 'soft' } = props

  const onChange = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      if (!props.disabled) {
        props.onChange(props.inputFilter ? props.inputFilter(value, event.target.value) : event.target.value, event)
      }
    },
    [props, value],
  )

  const onFocus = useCallback(
    (event: React.FocusEvent<HTMLTextAreaElement>) => {
      setFocus(true)
      if (props.onFocus) {
        props.onFocus(event)
      }
    },
    [props],
  )

  const onBlur = useCallback(
    (event: React.FocusEvent<HTMLTextAreaElement>) => {
      setFocus(false)
      if (props.onBlur) {
        props.onBlur(event)
      }
    },
    [props],
  )

  const formLabel = (label: string, required?: boolean): string => (required ? label + ' *' : label)

  return (
    <TextAreaWrapper focus={focus} required={props.required}>
      <FormLabel htmlFor={props.id}>{formLabel(props.label, props.required)}</FormLabel>
      <FormTextArea
        className={props.className}
        id={props.id}
        name={props.id}
        disabled={props.disabled}
        maxLength={props.maxLength}
        placeholder={props.placeholder}
        required={props.required}
        value={value}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={onChange}
        onKeyPress={props.onKeyPress}
        onPaste={props.onPaste}
        rows={props.rows}
        cols={props.cols}
        wrap={wrap}
      />
    </TextAreaWrapper>
  )
})

export default TextArea
