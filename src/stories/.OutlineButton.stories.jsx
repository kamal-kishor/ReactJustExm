import React from 'react'
import OutlineButton from '../components/buttons/OutlineButton'
export default {
  title: 'Buttons/OutlineButton',
  component: OutlineButton
}

const Template = (args) => <OutlineButton {...args} />

export const Secondary = Template.bind({})
Secondary.args = {
  label: 'Secondary Button',
  hreff: '#outlined-buttons',
  colors: 'secondary'
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  hreff: '#outlined-buttons',
  colors: 'error'
}
export const Medium = Template.bind({})
Medium.args = {
  size: 'medium',
  hreff: '#outlined-buttons',
  colors: 'error'
}
export const Small = Template.bind({})
Small.args = {
  size: 'small',
  hreff: '#outlined-buttons',
  colors: 'error'
}
