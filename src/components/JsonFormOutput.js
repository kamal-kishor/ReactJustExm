import React, { useContext } from 'react'
import { FormDataContext } from '../context/Context'

const JsonFormOutput = () => {
  const { user } = useContext(FormDataContext)
  // console.log('This is Desired location')
  // console.log(user)
  return (
    <div>
      <h5>
        <center>Entered Data On the Form</center>
      </h5>
      <ul>
        {Object.entries(user).map(([key, value]) => (
          <li key={key}>
            {key}: {value}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default JsonFormOutput
