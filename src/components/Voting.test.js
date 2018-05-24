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
  const div = renderer.create(<Voting pair={['ola1', 'ola2']} />).toJSON();
  expect(div).toMatchSnapshot();
});

// it("invokes callback when button is clicked", () => {
//   const wrapper = shallow(<Voting />);
//   wrapper.simulate("click");
// });

it('should render without throwing an error', () => {
  expect(shallow(<Voting />).exists(<div className="vote" />)).toBe(true);
});
