import React from 'react'
// import { ComponentMeta } from '@storybook/react'
import Field from './Select'

const options = [
  { label: 'React', value: 'react' },
  { label: 'ReactNative', value: 'react-native' },
  { label: 'Javascript', value: 'js' },
  { label: 'Java', value: 'java' },
  { label: 'Python', value: 'python' }
]

export default {
  title: 'ExampleOne/Select',
  component: Field
}
const Template = (args) => <Field {...args} />

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  label: 'Button',
  option: options
}

export const Secondary = Template.bind({})
Secondary.args = {
  label: 'Button',
  option: options
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  label: 'Button',
  option: options
}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
  label: 'Button',
  option: options
}
