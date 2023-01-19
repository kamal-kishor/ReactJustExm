import React from 'react'
import PropTypes from 'prop-types'

export default function Alert(props) {
  const capitalize = (word) => {
    const lower = word.toLowerCase()
    return lower.charAt(0).toUpperCase(0) + lower.slice(1)
  }
  return (
    props.alert && (
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
        // style={{ color: props.mode === 'light' ? '#042743' : 'white' }}
      >
        <strong>{capitalize(props.alert.msg)}</strong>: {props.alert.type}
      </div>
    )
  )
}
Alert.propTypes = {
  msg: PropTypes.string,
  type: PropTypes.string,
  alert: PropTypes.string
}
Alert.defaultProps = {
  msg: 'Default Title',
  type: 'sucess',
  alert: 'object'
}
