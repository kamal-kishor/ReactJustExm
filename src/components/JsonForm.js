import React, { useState } from 'react'
import { FormDataContext } from '../context/Context'
import JsonFormOutput from './JsonFormOutput'

const data = {
  form: {
    section: [
      {
        order: 1,
        section_title: 'Basic Information from Json',
        fields: [
          {
            name: 'name',
            label: 'Name',
            required: true,
            data_type: 'Integer',
            html_element: 'text'
          },
          {
            name: 'email',
            label: 'Email',
            hidden: false,
            required: true,
            data_type: 'String',
            html_element: 'email'
          },
          {
            name: 'phone',
            label: 'Phone',
            required: true,
            data_type: 'number',
            html_element: 'number'
          },
          {
            name: 'age',
            label: 'Age',
            hidden: false,
            option: [],
            required: true,
            data_type: 'number',
            html_element: 'number'
          },
          {
            name: 'photo',
            label: 'Photo',
            option: [],
            hidden: false,
            required: true,
            data_type: 'Image',
            html_element: 'file'
          },
          {
            name: 'gender',
            label: 'Gender',
            option: [],
            hidden: false,
            required: true,
            data_type: 'string',
            html_element: 'dropdown',
            dropcyle: [
              { label: 'Male', value: 'male' },
              { label: 'Female', value: 'female' },
              { label: 'Other', value: 'other' }
            ]
          }
        ]
      }
    ]
  }
}
export default function JsonForm() {
  const [user, setUser] = useState({})

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(user)
    // console.log('This is submit')
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          {data.form.section.map((formData) => {
            return (
              <div key={formData.order}>
                <h4>
                  <center>{formData.section_title}</center>
                </h4>
                {formData.fields.map((inputData) => {
                  switch (inputData.html_element) {
                    case 'text':
                      return (
                        <input
                          type={inputData.html_element}
                          name={inputData.name}
                          placeholder={inputData.label}
                          onChange={handleChange}
                          className="form-control mb-3"
                        />
                      )
                    case 'email':
                      return (
                        <input
                          type={inputData.html_element}
                          name={inputData.name}
                          placeholder={inputData.label}
                          onChange={handleChange}
                          className="form-control mb-3"
                        />
                      )
                    case 'number':
                      return (
                        <input
                          type={inputData.html_element}
                          name={inputData.name}
                          placeholder={inputData.label}
                          onChange={handleChange}
                          className="form-control mb-3"
                        />
                      )
                    // case 'dropdown':
                    //   return (
                    //     <CustomSelect
                    //       option={inputData.dropcyle}
                    //       label={inputData.label}
                    //       onChange={handleChange}
                    //       // ref={inputRef}
                    //     />
                    //   )
                    default:
                      break
                  }
                })}
              </div>
            )
          })}
          <div className="row my-4">
            <button label="Submit" type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
      <FormDataContext.Provider value={{ user }}>
        <JsonFormOutput />
      </FormDataContext.Provider>
    </>
  )
}
