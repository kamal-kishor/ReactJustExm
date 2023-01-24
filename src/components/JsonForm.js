import React from 'react'
import ButtonsComponent from './buttons/ButtonsComponent'
import InputFields from './inputs/Input'
import CustomSelect from './select/Select'

const data={
  "form":{
    "section":[
      {
        "order":1,
        "section_title":"Basic Information from Json",
        "fields":[
          {
            "name":"name",
            "label":"Name",
            "required":true,
            "data_type":"Integer",
            "html_element":"textbox"
          }
        ]
      }
    ]
  }
}
export default function Jsonform() {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     formValues: {}
  //   }
  //   this.formRefs = {}
  //   this.handleChange = this.handleChange.bind(this)
  //   this.onSubmit = this.onSubmit.bind(this)
  // }

  // handleChange(event) {
  //   this.setState({
  //     formValues: {
  //       ...this.state.formValues,
  //       [event.target.name]: event.target.value
  //     }
  //   })
  // }

  onSubmit(event) {
    event.preventDefault()
    console.log('Form Data:', this.state.formValues)
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
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
                        onChange={this.handleChange}
                        ref={(ref) => (this.formRefs[inputData.name] = ref)}
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
                        onChange={this.handleChange}
                        ref={(ref) => (this.formRefs[inputData.name] = ref)}
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
                        onChange={this.handleChange}
                        ref={(ref) => (this.formRefs[inputData.name] = ref)}
                      />
                    )
                  case 'dropdown':
                    return (
                      <CustomSelect
                        option={inputData.dropcyle}
                        name={inputData.name}
                        onChange={this.handleChange}
                        ref={(ref) => (this.formRefs[inputData.name] = ref)}
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
    )
  }
}
