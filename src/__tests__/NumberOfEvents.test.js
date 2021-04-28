import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  });

  test('render text input', () => {
    expect(NumberOfEventsWrapper.find('.number-of-events')).toHaveLength(1);
  });

  test('renders text input correctly', () => {
    const eventPerPage = NumberOfEventsWrapper.state('eventsPerPage');
    expect(NumberOfEventsWrapper.find('.eventsNumber').prop('value')).toBe(32);
  });

  test('change state when text input changes', () => {
    NumberOfEventsWrapper.setState({
      eventsPerPage: 5,
    });
    const eventObject = { target: { value: 10 } };
    NumberOfEventsWrapper.find('.eventsNumber').simulate('change', eventObject);
    expect(NumberOfEventsWrapper.state('eventsPerPage')).toBe(10);
  });
});
