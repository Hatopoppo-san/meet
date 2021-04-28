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

  // Since eventsPerPage(numberOfEvents) is moved to App state, it needs to be done on integration test on App
  // test('renders text input correctly', () => {
  //   const eventPerPage = NumberOfEventsWrapper.props('numberOfEvents');
  //   expect(NumberOfEventsWrapper.find('.eventsNumber').prop('value')).toBe(32);
  // });

  // Since eventsPerPage(numberOfEvents) is moved to App state, it needs to be done on integration test on App
  // test('change state when text input changes', () => {
  //   NumberOfEventsWrapper.setState({
  //     eventsPerPage: 5,
  //   });
  //   const eventObject = { target: { value: 10 } };
  //   NumberOfEventsWrapper.find('.eventsNumber').simulate('change', eventObject);
  //   expect(NumberOfEventsWrapper.state('eventsPerPage')).toBe(10);
  // });
});
