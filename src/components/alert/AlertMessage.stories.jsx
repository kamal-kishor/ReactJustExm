import React from 'react'
import AlertMessage from './AlertMessage'

export default {
  title: 'Alert/AlertMessage',
  component: AlertMessage
}

const AlertMsg = (args) => <AlertMessage {...args} />
export const CustomAlert = AlertMsg.bind({})
CustomAlert.args = {
  // variant: 'warning',
  message: 'Sample Alert'
}
