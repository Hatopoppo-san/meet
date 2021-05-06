import './nprogress.css';

import React, { Component } from 'react';
import { extractLocations, getEvents } from './api';
import './App.css';
import CitySearch from './CitySearch';
import EventList from './EventList';
import NumberOfEvents from './NumberOfEvents';

class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
    errorText: '',
  };

  updateEvents = (location, eventCount) => {
    getEvents().then((events) => {
      eventCount = this.state.numberOfEvents;
      const locationEvents =
        location === 'all'
          ? events
          : events.filter((event) => event.location === location);
      this.setState({
        events: locationEvents.slice(0, eventCount),
      });
    });
  };

  handleChange = (event) => {
    if (event.target.value <= 32 && event.target.value >= 1) {
      this.setState({
        numberOfEvents: event.target.value,
        errorText: '',
      });
    } else {
      return this.setState({
        numberOfEvents: event.target.value,
        errorText: 'Please select number from 1 to 32',
      });
    }
  };

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    return (
      <div className='App'>
        <CitySearch
          locations={this.state.locations}
          updateEvents={this.updateEvents}
        />
        <NumberOfEvents
          numberOfEvents={this.state.numberOfEvents}
          handleChange={this.handleChange}
          errorText={this.state.errorText}
        />
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;
