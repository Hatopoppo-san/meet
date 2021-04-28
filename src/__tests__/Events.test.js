import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from '../mock-data';

describe('<Event />Component', () => {
  let EventWrapper;
  beforeAll(() => {
    EventWrapper = shallow(<Event event={mockData} />);
  });
  test('render collapsed event', () => {
    expect(EventWrapper.find('.event')).toHaveLength(1);
  });

  test('check if details is hidden in default', () => {
    expect(EventWrapper.find('.hidden-details')).toHaveLength(0);
  });

  test('check if show details button is present', () => {
    expect(EventWrapper.find('.show-details-btn')).toHaveLength(1);
  });

  test('check if hide details button is absent', () => {
    expect(EventWrapper.find('hide-details-btn')).toHaveLength(0);
  });

  test('check if details is shown when pushed the button', () => {
    EventWrapper.state({
      isEventDetailsShown: false,
    });
    EventWrapper.find('.show-details-btn').at(0).simulate('click');
    expect(EventWrapper.state('isEventDetailsShown')).toBeTruthy();
  });
});
