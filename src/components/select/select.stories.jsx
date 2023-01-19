import React from 'react'
// import { ComponentMeta } from '@storybook/react'
import Field from './Select'

export default {
  title: 'ExampleOne/Select',
  component: Field
}
const Template = (args) => <Field {...args} />

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  label: 'Button'
}

export const Secondary = Template.bind({})
Secondary.args = {
  label: 'Button'
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  label: 'Button'
}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
  label: 'Button'
}
