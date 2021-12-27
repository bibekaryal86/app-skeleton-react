import React from 'react'
import { connect } from 'react-redux'
import styled, { keyframes } from 'styled-components'
import { GlobalState } from '../../app/store/redux'

interface SpinnerProps {
  size?: string
  isLoading?: boolean
}

const SpinnerOverlay = styled.div.attrs({
  className: 'spinner-overlay',
})`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 4;
  transform: translateZ(0);
  background-color: rgba(255, 255, 255, 0.7);
`

const SpinnerWrapper = styled.div.attrs({ className: 'spinner-wrapper' })`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  justify-content: center;
`

const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`

const SpinnerObject = styled.div.attrs({
  className: 'spinner-object',
})<SpinnerProps>`
  display: inline-block;
  border: 20px solid mediumseagreen;
  border-top: 20px solid seagreen;
  border-radius: 50%;
  animation: ${spin} 0.7s linear infinite;

  width: ${(props) => (props.size ? `${props.size}rem` : '5rem')};
  height: ${(props) => (props.size ? `${props.size}rem` : '5rem')};
`

const Spinner = (props: SpinnerProps): React.ReactElement | null => {
  return props.isLoading ? (
    <SpinnerOverlay>
      <SpinnerWrapper>
        <SpinnerObject {...props} />
      </SpinnerWrapper>
    </SpinnerOverlay>
  ) : null
}

const mapStateToProps = ({ spinner }: GlobalState) => {
  return {
    isLoading: spinner.isLoading,
  }
}

export default connect(mapStateToProps, null)(Spinner)
