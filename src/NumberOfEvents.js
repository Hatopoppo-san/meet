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
      <input
        type='number'
        min='0'
        className='number-of-events'
        value={this.state.eventsPerPage}
        placeholder={this.state.eventsPerPage}
        onChange={this.handleChange}
      />
    );
  }
}

export default NumberOfEvents;
