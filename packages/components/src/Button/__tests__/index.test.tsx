import Button from '../index'
import { render, fireEvent } from '@testing-library/react'

// Describe what you want to test
describe('Button component', () => {
  // Test if the button can render correctly
  it('should render a button with props', () => {
    // Use the render method to render a button instance and pass in some props
    const { getByText } = render(
      <Button type="primary" size="large" danger={true}>
        Click Me!
      </Button>,
    )
    // Get the button element and assert that it has the correct attributes and text content
    const button = getByText('Click Me!')
    expect(button).toHaveTextContent('Click Me!')
  })

  // Test if the button can respond to click events
  it('should call onClick handler when clicked', () => {
    // Create a mock function as an onClick prop passed into the button component
    const handleClick = jest.fn()
    const { getByText } = render(<Button onClick={handleClick}>Click Me!</Button>)

    // Trigger a click event and assert that the mock function was called once
    const button = getByText('Click Me!')
    fireEvent.click(button)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
