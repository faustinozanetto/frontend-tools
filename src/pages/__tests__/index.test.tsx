import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import React from 'react';

import HomePage from '..';

describe('Home - Page Test', () => {
  it('Should visit the home page and see the title.', async () => {
    render(<HomePage />);
    expect(await screen.findByText('Frontend Tools')).toBeInTheDocument();
  });
});
