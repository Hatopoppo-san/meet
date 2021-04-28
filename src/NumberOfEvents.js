import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = {
    eventsPerPage: 32,
  };

  handleChange = (event) => {
    this.setState({
      eventsPerPage: event.target.value,
    });
  };
  render() {
    return (
      <div className='number-of-events'>
        <p>Number of events</p>
        <input
          type='number'
          min='0'
          className='eventsNumber'
          value={this.state.eventsPerPage}
          placeholder={this.state.eventsPerPage}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default NumberOfEvents;
