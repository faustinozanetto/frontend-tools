import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import HomePage from '..';

describe('Home - Page Test', () => {
  it('Should visit the home page and see the title.', async () => {
    const renderedHome = render(<HomePage />);
    expect(await screen.findByText('Frontend Tools')).toBeInTheDocument();
  });
});
