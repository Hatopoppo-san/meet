import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
  render() {
    const { numberOfEvents, errorText } = this.props;
    return (
      <div className='number-of-events'>
        <h4>Number of events</h4>
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
