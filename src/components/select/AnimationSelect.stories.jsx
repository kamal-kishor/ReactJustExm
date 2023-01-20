import React from 'react'
import AnimationSelect from './AnimationSelect'

const options = [
  { label: 'React', value: 'react' },
  { label: 'ReactNative', value: 'react-native' },
  { label: 'Javascript', value: 'js' },
  { label: 'Java', value: 'java' },
  { label: 'Python', value: 'python' }
]

export default {
  title: 'ExampleOne/AnimationSelect',
  component: AnimationSelect
}
const Template = (args) => <AnimationSelect {...args} />

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
