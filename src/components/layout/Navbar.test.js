import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';

// Wrapper component to provide Router context
const NavbarWithRouter = () => (
  <BrowserRouter>
    <Navbar />
  </BrowserRouter>
);

describe('Navbar Component', () => {
  test('renders navbar with logo', () => {
    render(<NavbarWithRouter />);
    const logo = screen.getByText('ARYA LAKSHMI M');
    expect(logo).toBeInTheDocument();
  });

  test('renders all navigation links', () => {
    render(<NavbarWithRouter />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Projects')).toBeInTheDocument();
    expect(screen.getByText('Experience')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  test('mobile menu toggle button is present', () => {
    render(<NavbarWithRouter />);
    const toggleButton = screen.getByLabelText('Toggle navigation menu');
    expect(toggleButton).toBeInTheDocument();
  });

  test('mobile menu toggles when button is clicked', () => {
    render(<NavbarWithRouter />);
    const toggleButton = screen.getByLabelText('Toggle navigation menu');
    const menu = document.querySelector('.navbar-menu');
    
    // Initially menu should not have active class
    expect(menu).not.toHaveClass('active');
    
    // Click to open
    fireEvent.click(toggleButton);
    expect(menu).toHaveClass('active');
    
    // Click to close
    fireEvent.click(toggleButton);
    expect(menu).not.toHaveClass('active');
  });
});
