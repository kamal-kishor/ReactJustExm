import React from 'react'
import CustomColor from './CustomColor'

const options = [
  { label: 'React', value: 'react', color: '#FF8B00' },
  { label: 'ReactNative', value: 'react-native', color: '#36B37E' },
  { label: 'Javascript', value: 'js', color: '#0052CC' },
  { label: 'Java', value: 'java', color: '#FF8B00' },
  { label: 'Python', value: 'python', color: '#36B37E' }
]

const colorStyles = {
  control: (styles) => ({ ...styles, backgroundColor: 'white' }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    console.log('option', data, isFocused, isSelected, isDisabled)
    return { ...styles, color: data.color }
  }
}

export default {
  title: 'ExampleOne/CustomColor',
  component: CustomColor
}
const Template = (args) => <CustomColor {...args} />

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  label: 'Button',
  option: options,
  colorStyle: colorStyles
}

export const Secondary = Template.bind({})
Secondary.args = {
  label: 'Button',
  option: options,
  colorStyle: colorStyles
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  label: 'Button',
  option: options,
  colorStyle: colorStyles
}

export const Small = Template.bind({})
Small.args = {
  label: 'Button',
  option: options,
  colorStyle: colorStyles
}
