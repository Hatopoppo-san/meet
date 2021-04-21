import React, { Component } from 'react';
import { mockData } from './mock-data';

class Event extends Component {
  state = {
    isEventDetailsShown: false,
  };
  handleClick = (e) => {
    this.setState({
      isEventDetailsShown: !this.state.isEventDetailsShown,
    });
  };
  render() {
    const { event } = this.props;
    console.log(this.state);
    return (
      <div>
        <h2 className='event-summery'>{event.summery}</h2>
        <p className='event-time'>{event.time}</p>
        <p className='event-summery-at'>{event.organizer}</p>
        <p className='event-location'>{event.location}</p>
        {this.state.isEventDetailsShown ? (
          <div className='hidden-details'>
            <h3>About event</h3>
            <a href={event.htmlLink}>See details on Google Calendar</a>
            <p>{event.description}</p>
          </div>
        ) : null}
        {this.state.isEventDetailsShown ? (
          <button className='hide-details-btn' onClick={this.handleClick}>
            hide details
          </button>
        ) : (
          <button className='show-details-btn' onClick={this.handleClick}>
            show details
          </button>
        )}
      </div>
    );
  }
}

export default Event;
