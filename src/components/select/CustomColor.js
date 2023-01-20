import React from 'react'
import Select from 'react-select'

export const CustomSelect = ({ colorStyle, option, ...props }) => {
  return (
    <div style={colorStyle} {...props}>
      <Select options={option} />
    </div>
  )
}

export default CustomSelect
