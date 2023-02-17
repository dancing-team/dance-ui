import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Overlay from './index'

describe('Overlay', () => {
  test('renders Overlay', () => {
    render(<Overlay>click me</Overlay>);
    const linkElement = screen.getByText(/click me/i)
    expect(linkElement).toBeInTheDocument()
  })

  /**
  test('renders normal Overlay', () => {
    const { container } = render(<Overlay>click me</Overlay>)
  
    expect(container.querySelector('.ant-btn-normal')).toBeInTheDocument()
  })

  test('renders small Overlay', () => {
    const { container } = render(<Overlay size="small">click me</Overlay>)
  
    expect(container.querySelector('.ant-btn-small')).toBeInTheDocument()
  })

  test('should support click', () => {
    const onClick = jest.fn()
    render(<Overlay type="primary" onClick={onClick}>click me</Overlay>)

    const linkElement = screen.getByText(/click me/i)
    fireEvent.click(linkElement)

    expect(onClick).toBeCalled()
  })
  **/
})
