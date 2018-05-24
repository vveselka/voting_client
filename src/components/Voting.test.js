import Voting from './Voting';
import renderer from 'react-test-renderer';
import React from 'react';
import ReactDOM from 'react-dom';

import { shallow, mount, render } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Voting />, div);
});

it('renders correctly', () => {
  const div = renderer.create(<Voting pair={['fisrt', 'second']} />).toJSON();
  expect(div).toMatchSnapshot();
});

it('should render without throwing an error', () => {
  expect(shallow(<Voting />).exists(<div className="vote" />)).toBe(true);
});
