import React, { Component } from 'react';

class NumberOfEvents extends Component {
  render() {
    const { numberOfEvents } = this.props;
    return (
      <div className='number-of-events'>
        <p>Number of events</p>
        <input
          type='number'
          min='0'
          className='eventsNumber'
          value={numberOfEvents}
          placeholder={numberOfEvents}
          onChange={this.props.handleChange}
        />
      </div>
    );
  }
}

export default NumberOfEvents;
