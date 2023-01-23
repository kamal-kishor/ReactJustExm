import React from 'react'
import ButtonsComponent from './ButtonsComponent'

export default {
  title: 'Button/contained',
  component: ButtonsComponent
}
const containedTemplate = (args) => <ButtonsComponent {...args} />

export const Contained = containedTemplate.bind({})
Contained.args = {
  label: 'Button Sample',
  contained: 'primary'
}

const OutlineTemplate = (args) => <ButtonsComponent {...args} />

export const Outline = OutlineTemplate.bind({})
Outline.args = {
  label: 'Outline Button Sample',
  contained: 'outline-primary'
}

export const Large = containedTemplate.bind({})
Large.args = {
  label: 'Button Sample',
  contained: 'danger',
  size: 'btn btn-lg'
}
export const Medium = containedTemplate.bind({})
Medium.args = {
  label: 'Button Sample',
  contained: 'danger',
  size: 'btn btn-xs'
}

export const Small = containedTemplate.bind({})
Small.args = {
  label: 'Button Sample',
  contained: 'danger',
  size: 'btn btn-sm'
}
