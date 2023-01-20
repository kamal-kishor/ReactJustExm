import React from 'react'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'

// import { colourOptions } from '../data'

const animatedComponents = makeAnimated()

export default function AnimationSelect({ option, select, ...props }) {
  return (
    <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      defaultValue={select}
      isMulti
      options={option}
      {...props}
    />
  )
}
AnimationSelect.defaultProps = {
  select: 'Select--'
}
