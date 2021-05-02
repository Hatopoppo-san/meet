import { loadFeature, defineFeature } from 'jest-cucumber';

import React from 'react';
import { mount } from 'enzyme';
import App from '../App';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, (test) => {
  test("When user hasn't change the number, 32 is the default number", ({
    given,
    when,
    then,
  }) => {
    given('number 32 is the default number of events to be shown', () => {});
    let AppWrapper;
    when('user opens an app', () => {
      AppWrapper = mount(<App />);
    });

    then('user sees number of events input is 32', () => {
      AppWrapper.update();
      expect(AppWrapper.state('numberOfEvents')).toBe(32);
    });
  });

  test('User can change the number of events they want to see', ({
    given,
    when,
    then,
  }) => {
    let AppWrapper;
    given('the main page is open', () => {
      AppWrapper = mount(<App />);
    });

    when('user changes number on the input, then search', () => {
      AppWrapper.update();
      AppWrapper.find('.eventsNumber').simulate('change', {
        target: { value: 2 },
      });
      AppWrapper.find('.suggestions li').at(0).simulate('click');
    });

    then('the number of events are shown', () => {
      expect(AppWrapper.find('.eventList')).toHaveLength(2);
    });
  });
});
