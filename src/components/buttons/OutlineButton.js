import * as React from 'react'
import Button from '@mui/material/Button'
import PropTypes from 'prop-types'
// import './ContainerButton.css'

export default function OutlineButton({ hreff, size, colors, label, ...props }) {
  return (
    <Button variant="outlined" href={hreff} size={size} color={colors} {...props}>
      {label}
    </Button>
  )
}

OutlineButton.propTypes = {
  colors: PropTypes.string,
  href: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func
}

OutlineButton.defaultProps = {
  href: '#outlined-buttons',
  label: 'Sample Button'
}
