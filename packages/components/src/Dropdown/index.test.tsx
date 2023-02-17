import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Dropdown from './index';

describe('Dropdown', () => {
  test('renders Dropdown', () => {
    render(<Dropdown>click me</Dropdown>);
    const linkElement = screen.getByText(/click me/i);
    expect(linkElement).toBeInTheDocument();
  });
  
/**
  test('renders normal Dropdown', () => {
    const { container } = render(<Dropdown>click me</Dropdown>);
  
    expect(container.querySelector('.ant-btn-normal')).toBeInTheDocument();
  });

  test('renders small Dropdown', () => {
    const { container } = render(<Dropdown size="small">click me</Dropdown>);
  
    expect(container.querySelector('.ant-btn-small')).toBeInTheDocument();
  });

  test('should support click', () => {
    const onClick = jest.fn();
    render(<Dropdown type="primary" onClick={onClick}>click me</Dropdown>);

    const linkElement = screen.getByText(/click me/i);
    fireEvent.click(linkElement);

    expect(onClick).toBeCalled();
  });
  **/
});

