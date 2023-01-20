import React from 'react'
import Select from 'react-select'

export const CustomSelect = ({ backgroundColor, option, ...props }) => {
  return (
    <div style={backgroundColor && { backgroundColor }} {...props}>
      <Select options={option} />
    </div>
  )
}

export default CustomSelect
