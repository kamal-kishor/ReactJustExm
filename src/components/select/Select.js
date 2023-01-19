import React from 'react'
import Select from 'react-select'
import PropTypes from 'prop-types'

const options = [
  { label: 'React', value: 'react' },
  { label: 'ReactNative', value: 'react-native' },
  { label: 'Javascript', value: 'js' },
  { label: 'Java', value: 'java' },
  { label: 'Python', value: 'python' }
]

export const CustomSelect = ({ backgroundColor, ...props }) => {
  return (
    <div style={backgroundColor && { backgroundColor }} {...props}>
      <h1>{1}</h1>
      <Select options={options} />
    </div>
  )
}

export default CustomSelect
CustomSelect.propTypes = {
  backgroundColor: PropTypes.string
}
