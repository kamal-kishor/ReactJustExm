import React from 'react'
import InputFields from './Input'

export default {
  title: 'Input/InputFields',
  component: InputFields
}

const InputArea = (args) => <InputFields {...args} />
export const Input = InputArea.bind({})
Input.args = {
  placeholder: 'Please Enter the Name',
  label: 'Name'
}

const InputNum = (args) => <InputFields {...args} />
export const NumberField = InputNum.bind({})
NumberField.args = {
  placeholder: 'Enter Mob No.',
  label: 'Mobile Number',
  type: 'number'
}

const Inputemail = (args) => <InputFields {...args} />
export const EmailField = Inputemail.bind({})
EmailField.args = {
  placeholder: 'example@abc.com',
  label: 'Email',
  type: 'email'
}

export const Large = InputArea.bind({})
Large.args = {
  placeholder: 'Please Enter the Name',
  label: 'Name',
  size: 'lg'
}
export const Medium = InputArea.bind({})
Medium.args = {
  placeholder: 'Please Enter the Name',
  label: 'Name',
  size: ' '
}

export const Small = InputArea.bind({})
Small.args = {
  placeholder: 'Please Enter the Name',
  label: 'Name',
  size: 'sm'
}
