import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer Component', () => {
  test('renders footer with name and title', () => {
    render(<Footer />);
    expect(screen.getByText('ARYA LAKSHMI M')).toBeInTheDocument();
    expect(screen.getByText('Full Stack Developer & AI Engineer')).toBeInTheDocument();
  });

  test('displays contact information', () => {
    render(<Footer />);
    expect(screen.getByText('aryalakshmi.dev@gmail.com')).toBeInTheDocument();
    expect(screen.getByText('+91 98765 43210')).toBeInTheDocument();
  });

  test('displays social media links', () => {
    render(<Footer />);
    const linkedinLink = screen.getByText('LinkedIn');
    const githubLink = screen.getByText('GitHub');
    
    expect(linkedinLink).toBeInTheDocument();
    expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/aryalakshmi');
    expect(linkedinLink).toHaveAttribute('target', '_blank');
    
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute('href', 'https://github.com/aryalakshmi');
    expect(githubLink).toHaveAttribute('target', '_blank');
  });

  test('displays copyright with current year', () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(new RegExp(`© ${currentYear}`))).toBeInTheDocument();
  });
});
