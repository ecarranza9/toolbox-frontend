import React from 'react';
import { render } from '@testing-library/react';
import NavBar from '../components/layout/Navbar';

describe('Navbar Component', () => {
  const { asFragment } = render(<NavBar />);
  test('should match snapshot and styles', () => {
    expect(asFragment(<NavBar />)).toMatchSnapshot();
  })
});