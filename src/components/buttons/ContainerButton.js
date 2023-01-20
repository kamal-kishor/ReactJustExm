import * as React from 'react'
// import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import PropTypes from 'prop-types'
import './ContainerButton.css'

export default function ContainerButton({
  primary,
  backgroundColor,
  size,
  label,
  ...props
}) {
  const mode = primary ? 'container-button-primary' : 'container-button-secondary'
  return (
    <Button
      variant="contained"
      className={['container-button', mode].join(' ')}
      // className={size}
      style={backgroundColor && { backgroundColor }}
      size={size}
      {...props}>
      {label}
    </Button>
  )
}
ContainerButton.propTypes = {
  primary: PropTypes.bool,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func
}

ContainerButton.defaultProps = {
  label: 'Sample Button'
}
