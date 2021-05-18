import './nprogress.css';

import React, { Component } from 'react';
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { extractLocations, getEvents } from './api';
import './App.css';
import CitySearch from './CitySearch';
import EventList from './EventList';
import NumberOfEvents from './NumberOfEvents';
import EventGenre from './EventGenre';

class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
    errorText: '',
  };

  getData = () => {
    const { locations, events } = this.state;
    const data = locations.map((location) => {
      const number = events.filter(
        (event) => event.location === location
      ).length;
      const city = location.split(' ').shift();
      return { city, number };
    });
    return data;
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
    this.updateEvents(this.state.locations, event.target.value);
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
    const { locations, numberOfEvents, errorText, events } = this.state;
    return (
      <div className='App'>
        <h1 id='main-logo'>Meet App</h1>
        <h4>Choose your nearest city</h4>
        <CitySearch locations={locations} updateEvents={this.updateEvents} />
        <NumberOfEvents
          numberOfEvents={numberOfEvents}
          handleChange={this.handleChange}
          errorText={errorText}
        />
        <div className='data-vis-wrapper'>
          <EventGenre events={events} />
          <ResponsiveContainer height={400}>
            <ScatterChart
              className='chart'
              margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
              <CartesianGrid />
              <XAxis type='category' dataKey='city' name='city' />
              <YAxis
                type='number'
                dataKey='number'
                name='number of events'
                allowDecimals={false}
              />
              <Tooltip cursor={{ strokeDasharray: '3 3' }} />
              <Scatter name='A school' data={this.getData()} fill='#8884d8' />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
        <EventList events={events} />
      </div>
    );
  }
}

export default App;
