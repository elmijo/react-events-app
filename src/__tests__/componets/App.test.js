import React from 'react';
import { render, cleanup } from '@testing-library/react';
// import { screen } from '@testing-library/dom'

import App from './../../app/componets/App';

afterEach(cleanup);

test('Render App Header', () => {
  const { getByText, container } = render(<App />);
  const header = container.getElementsByTagName('header').item(0);
  const button = container.querySelector('header button');
  expect(header).toBeInTheDocument();
  expect(button).toBeInTheDocument();
  expect(getByText(/^Events/i)).toBeInTheDocument();
  expect(getByText(/New Event/i)).toBeInTheDocument();

});
