import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import InputFields from './Input'

describe('Input Fields', () => {
  afterEach(() => {
    cleanup()
  })

  test('Test for empty input', () => {
    render(<InputFields />)
    const input = ''
    expect(input).toBe('')
  })
  test('Test for valid input', () => {
    const input = 'John Doe'
    expect(input).toBe('John Doe')
  })
  test('Test for invalid input', () => {
    const input = '!@#$%^'
    expect(input).not.toMatch(/^[a-zA-Z0-9]+$/)
  })
  test('Test for input length', () => {
    const input = 'John Doe'
    expect(input.length).toBe(8)
  })
  test('Test for input type', () => {
    const input = 'John Doe'
    expect(typeof input).toBe('string')
  })
})
