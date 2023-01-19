import React from 'react'

export default function InputField(props) {
  return (
    <input
      type={props.type}
      className={props.className}
      id={props.id}
      row={props.row}
    />
  )
}
