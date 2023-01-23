import * as React from 'react'
// import Stack from '@mui/material/Stack'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import PropTypes from 'prop-types'
// import './ContainerButton.css'

export default function ButtonsComponent({
  colors,
  hreff,
  // primary,
  contained,
  size,
  label,
  ...props
}) {
  // const mode = primary ? 'container-button-primary' : 'container-button-secondary'
  return (
    <Button
      variant={contained}
      className={size}
      href={hreff}
      color={colors}
      {...props}>
      {label}
    </Button>
  )
}

ButtonsComponent.propTypes = {
  primary: PropTypes.bool,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(['btn-sm', 'btn-xs', 'btn-lg']),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func
}

ButtonsComponent.defaultProps = {
  label: 'Sample Button',
  size: 'medium'
}
