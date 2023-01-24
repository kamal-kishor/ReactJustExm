import React from 'react'
import ButtonsComponent from './buttons/ButtonsComponent'
import InputFields from './inputs/Input'
import CustomSelect from './select/Select'

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
            html_element: 'textbox'
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
            html_element: 'textbox'
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
            name: 'dropdown',
            label: 'Gender',
            option: [],
            hidden: false,
            required: true,
            data_type: 'Image',
            html_element: 'file',
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
  // const [formValues, setFormValues] = useState({})
  // const formRefs = useRef({})

  // constructor = (props) => {
  //   super(props)
  //   this.state = {
  //     formValues: {}
  //   }
  //   this.formRefs = {}
  //   this.handleChange = this.handleChange.bind(this)
  //   this.onSubmit = this.onSubmit.bind(this)
  // }

  // handleChange = (event) => {
  //   this.setState({
  //     formValues: {
  //       ...this.state.formValues,
  //       [event.target.name]: event.target.value
  //     }
  //   })
  // }

  const onSubmit = () => {
    // event.preventDefault()
    console.log('Form Data:')
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        {data.form.sections.map((formData) => {
          return (
            <div key={formData.order}>
              <h4>
                <center>{formData.section_title}</center>
              </h4>
              {formData.fields.map((inputData) => {
                switch (inputData.html_element) {
                  case 'textbox':
                    return (
                      <InputFields
                        type={inputData.html_element}
                        label={inputData.label}
                        placeholder={inputData.label}
                        required={inputData.required}
                        name={inputData.name}
                        // onChange={this.handleChange}
                        // ref={(ref) => (this.formRefs[inputData.name] = ref)}
                      />
                    )
                  case 'email':
                    return (
                      <InputFields
                        type={inputData.html_element}
                        label={inputData.label}
                        placeholder={inputData.label}
                        required={inputData.required}
                        name={inputData.name}
                        // onChange={this.handleChange}
                        // ref={(ref) => (this.formRefs[inputData.name] = ref)}
                      />
                    )
                  case 'number':
                    return (
                      <InputFields
                        type={inputData.html_element}
                        label={inputData.label}
                        placeholder={inputData.label}
                        required={inputData.required}
                        name={inputData.name}
                        // onChange={this.handleChange}
                        // ref={(ref) => (this.formRefs[inputData.name] = ref)}
                      />
                    )
                  case 'dropdown':
                    return (
                      <CustomSelect
                        option={inputData.dropcyle}
                        name={inputData.name}
                        // onChange={this.handleChange}
                        // ref={(ref) => (this.formRefs[inputData.name] = ref)}
                      />
                    )
                  default:
                    break
                }
              })}
            </div>
          )
        })}
        <div className="row my-4">
          <ButtonsComponent contained="success" label="Submit" type="submit" />
        </div>
      </form>
    </div>
  )
}
