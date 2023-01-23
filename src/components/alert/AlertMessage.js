import Alert from 'react-bootstrap/Alert'
import 'bootstrap/dist/css/bootstrap.min.css'
import PropTypes from 'prop-types'

export default function AlertMessage(variant, message) {
  return (
    <Alert key={variant} variant={variant}>
      {message}
    </Alert>
  )
}

AlertMessage.propTypes = {
  variant: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark'
  ]),
  message: PropTypes.string
}

AlertMessage.defaultProps = {
  variant: 'success'
}
