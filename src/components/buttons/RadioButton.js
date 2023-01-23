import * as React from 'react'
import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.min.css'
import PropTypes from 'prop-types'

export default function ButtonsComponent({
  type,
  className,
  id,
  labelOne,
  labelTwo,
  labelThree,
  ordered,
  ...props
}) {
  return (
    <div key={type} className={className}>
      <Form.Check
        // {...ordered}
        inline={ordered}
        type={type}
        id={id}
        label={labelOne}
        name="group1"
        {...props}
      />
      <Form.Check
        inline={ordered}
        // {...ordered}
        type={type}
        id={id}
        label={labelTwo}
        name="group1"
        {...props}
      />
      <Form.Check
        inline={ordered}
        // {...ordered}
        type={type}
        id={id}
        label={labelThree}
        name="group1"
        {...props}
      />
    </div>
  )
}

ButtonsComponent.propTypes = {
  type: PropTypes.oneOf(['radio', 'checkbox']),
  className: PropTypes.string,
  id: PropTypes.string,
  lable: PropTypes.string,
  ordered: PropTypes.string
}

ButtonsComponent.defaultProps = {
  className: 'mb-3',
  type: 'radio',
  id: 'radio-button',
  ordered: 'true'
}
