import React from 'react'
import ButtonsComponent from './ButtonsComponent'

export default {
  title: 'Buttonsss/Outline',
  component: ButtonsComponent
}
const OutlineTemplate = (args) => <ButtonsComponent {...args} />

export const Primary = OutlineTemplate.bind({})
Primary.args = {
  variant: 'otline-Primary',
  label: 'Button Sample'
}

export const Secondary = OutlineTemplate.bind({})
Secondary.args = {
  label: 'Button'
}

export const Large = OutlineTemplate.bind({})
Large.args = {
  size: 'large',
  label: 'Button'
}

export const Small = OutlineTemplate.bind({})
Small.args = {
  size: 'small',
  label: 'Button'
}
