import * as React from 'react'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
// import 'bootstrap/dist/css/bootstrap.min.css'
import PropTypes from 'prop-types'

export default function InputFields({
  id,
  label,
  size,
  placeholder,
  type,
  name,
  className,
  onChange,
  ref,
  value
}) {
  return (
    <>
      <label>{label}</label>
      <InputGroup className={className} size={size}>
        {/* <InputGroup.Text id="inputGroup-sizing-sm">Small</InputGroup.Text> */}
        <Form.Control
          aria-label="Text input with checkbox"
          placeholder={placeholder}
          id={id}
          name={name}
          type={type}
          onChange={onChange}
          ref={ref}
          value={value}
        />
      </InputGroup>
    </>
  )
}

InputFields.propTypes = {
  id: PropTypes.string,
  lable: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'xs', 'lg']),
  className: PropTypes.string
}

InputFields.defaultProps = {
  label: 'Enter text',
  // size: 'lg',
  type: 'text',
  id: 'inputField',
  className: 'mb-3'
}
