import React from 'react'
import ContainerButton from '../components/buttons/ContainerButton'

export default {
  title: 'Buttons/ContainerButton',
  component: ContainerButton
}

const Template = (args) => <ContainerButton {...args} />

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  label: 'Primary Button'
}

export const Secondary = Template.bind({})
Secondary.args = {
  label: 'Secondary Button'
}

export const Large = Template.bind({})
Large.args = {
  size: 'large'
}
export const Medium = Template.bind({})
Medium.args = {
  size: 'medium'
}
export const Small = Template.bind({})
Small.args = {
  size: 'small'
}
