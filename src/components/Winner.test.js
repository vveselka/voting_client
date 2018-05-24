import Winner from './Winner.js';
import React from 'react';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Winner />, div);
});

it('renders correctly', () => {
  const component = renderer.create(<Winner winner="Steve Jobs" />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
