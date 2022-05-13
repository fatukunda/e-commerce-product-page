import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import AppHeader from './';

test('AppHeader: Renders', () => {
  render(<AppHeader/>);
  const linkElement = screen.getByText(/demo header/i);
  expect(linkElement).toBeInTheDocument();
});

test('AppHeader: Snapshot', () => {
  const component = renderer.create(<AppHeader/>);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
