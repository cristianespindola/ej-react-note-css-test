import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import Home from './component/Nota.js'

test('renders learn react link', () => {
  const note = {"id": 21,
  "text": "prueba test",
  "color": "blue"}
  const { getByText } = render(<Home nota={note} />);
  const linkElement = getByText('prueba test');
  expect(linkElement).toBeInTheDocument();
});
