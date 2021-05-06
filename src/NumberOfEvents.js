import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
  render() {
    const { numberOfEvents, errorText } = this.props;
    return (
      <div className='number-of-events'>
        <p>Number of events</p>
        <input
          type='text'
          className='eventsNumber'
          value={numberOfEvents}
          placeholder={numberOfEvents}
          onChange={this.props.handleChange}
        />
        <ErrorAlert text={errorText} />
      </div>
    );
  }
}

export default NumberOfEvents;
