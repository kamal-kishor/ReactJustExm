import React, { createContext, useState } from 'react'

export const FormDataContext = createContext()

const FormDataContextProvider = (props) => {
  const [user, setUser] = useState({ name: '', email: '', phone: '', age: '' })

  return (
    <FormDataContext.Provider value={{ user, setUser }}>
      {props.children}
    </FormDataContext.Provider>
  )
}
export default FormDataContextProvider
