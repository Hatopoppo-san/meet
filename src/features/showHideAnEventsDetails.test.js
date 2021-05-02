import { loadFeature, defineFeature } from 'jest-cucumber';

import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../App';
import Event from '../Event';
import { mockData } from '../mock-data';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, (test) => {
  test('An Event element collapsed by default', ({ given, when, then }) => {
    let AppWrapper;

    given('the user opens event list', () => {
      AppWrapper = mount(<App />);
    });

    when('Event details is collapsed', () => {
      AppWrapper.update();
      expect(AppWrapper.find('.hidden-details')).toHaveLength(0);
    });

    then('user can find a button which shows event details', () => {
      AppWrapper.update();
      expect(AppWrapper.find('.show-details-btn')).toBeTruthy();
    });
  });

  test('User can expand an event to see its details', ({
    given,
    when,
    then,
  }) => {
    let AppWrapper;

    given('the event details is hidden', () => {
      AppWrapper = mount(<App />);
      expect(AppWrapper.find('.hidden-details')).toHaveLength(0);
    });

    when('user clicks show event button', () => {
      AppWrapper.update();
      AppWrapper.find('.show-details-btn').at(0).simulate('click');
    });

    then('user should see a details of the event', () => {
      expect(AppWrapper.find('.hidden-details')).toBeTruthy();
    });
  });

  test('User can collapse an event to hide its details', ({
    given,
    when,
    then,
  }) => {
    let AppWrapper = mount(<App />);
    given('the event details is shown', () => {
      AppWrapper.update();
      AppWrapper.find('.show-details-btn').at(0).simulate('click');
      expect(AppWrapper.find('.hidden-details')).toBeTruthy();
    });

    when('the user clicks hide event button', () => {
      AppWrapper.update();
      AppWrapper.find('.hide-details-btn').simulate('click');
    });

    then('event details are hidden', () => {
      expect(AppWrapper.find('.hidden-details')).toHaveLength(0);
    });
  });
});
