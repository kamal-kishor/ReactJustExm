import React from 'react'
import RadioButton from './RadioButton'

export default {
  title: 'Button/RadioChecked',
  component: RadioButton
}

const radioTemplate = (args) => <RadioButton {...args} />
export const Radio = radioTemplate.bind({})
Radio.args = {
  labelOne: 'Radio labelOne',
  labelTwo: 'Radio labelTwo',
  labelThree: 'Radio labelThree',
  Radio: 'primary',
  type: 'radio'
}

const checkTemplate = (args) => <RadioButton {...args} />
export const CheckBoxButton = checkTemplate.bind({})
CheckBoxButton.args = {
  labelOne: 'CheckBox labelOne',
  labelTwo: 'CheckBox labelTwo',
  labelThree: 'CheckBox labelThree',
  CheckBoxButton: 'primary',
  type: 'checkbox'
}

const switchTemplate = (args) => <RadioButton {...args} />
export const switchBoxButton = switchTemplate.bind({})
switchBoxButton.args = {
  labelOne: 'Switch labelOne',
  labelTwo: 'Switch labelTwo',
  labelThree: 'Switch labelThree',
  switchBoxButton: 'primary',
  type: 'switch'
}
