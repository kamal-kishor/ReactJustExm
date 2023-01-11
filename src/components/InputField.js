import React from 'react'

function InputField(props) {
  return (
    <input type={props.type} className={props.className} id={props.id} row={props.row} />
  )
}

export default InputField