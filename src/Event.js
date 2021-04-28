import React, { Component } from 'react';

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
    return (
      <div className='event'>
        <h2 className='event-summary'>{event.summary}</h2>
        <p className='event-time'>{event.start?.dateTime}</p>
        <p className='event-summery-at'>{event.organizer?.email}</p>
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
