import { render, screen, cleanup } from '@testing-library/react'
import React from 'react'
import '@testing-library/jest-dom'
import ButtonsComponent from './ButtonsComponent'

describe('Button', () => {
  afterEach(() => {
    cleanup()
  })

  test('renders the Button component', () => {
    render(<ButtonsComponent />)
    const buttonElement = screen.getByRole('button')
    expect(buttonElement).toBeInTheDocument()
  })
  test('Button Should be Disabled', () => {
    render(<ButtonsComponent disabled={true} label="Test Button" />)
    expect(screen.getByRole('button', { name: 'Test Button' })).toBeDisabled()
  })
  test('renders correct text', () => {
    render(<ButtonsComponent label="Submit"></ButtonsComponent>)
    const buttonElement = screen.getByText(/submit/i)
    expect(buttonElement).toBeInTheDocument()
  })
  test('calls the click handler function on click', () => {
    const clickHandler = jest.fn()
    render(
      <ButtonsComponent onClick={clickHandler} label="Submit"></ButtonsComponent>
    )
    const buttonElement = screen.getByText(/submit/i)
    buttonElement.click()
    expect(clickHandler).toHaveBeenCalledTimes(1)
  })
})
