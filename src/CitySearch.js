import React, { Component } from 'react';
import { InfoAlert } from './Alert';

class CitySearch extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      query: '',
      suggestions: [],
      showSuggestions: undefined,
    };
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleOutsideClick);
  }

  componentWillUnmount() {
    return () => {
      document.removeEventListener('mousedown', this.handleOutsideClick);
    };
  }

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({ showSuggestions: true });
    const suggestions = this.props.locations.filter((location) => {
      return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
    });
    if (suggestions.length === 0) {
      this.setState({
        query: value,
        infoText:
          'We can not find the city you are looking for. Please try another city',
      });
    } else {
      return this.setState({
        query: value,
        suggestions,
        infoText: '',
      });
    }
  };

  handleItemClicked = (suggestion) => {
    this.setState({
      query: suggestion,
      suggestions: [],
      showSuggestions: false,
      infoText: '',
    });

    this.props.updateEvents(suggestion);
  };

  // If you click outside the suggestion, suggestion will close
  handleOutsideClick = (e) => {
    if (this.myRef.current.contains(e.target)) {
      return;
    }
    if (!this.myRef.current.contains(e.target)) {
      this.setState({
        showSuggestions: false,
      });
    }
  };

  render() {
    return (
      <div className='CitySearch'>
        <InfoAlert text={this.state.infoText} />
        <input
          type='text'
          className='city'
          value={this.state.query}
          placeholder='Search city'
          onChange={this.handleInputChanged}
          onFocus={() => {
            this.setState({ showSuggestions: true });
          }}
        />
        <div ref={this.myRef}>
          <ul
            className='suggestions'
            style={this.state.showSuggestions ? {} : { display: 'none' }}>
            {this.state.suggestions.map((suggestion) => (
              <li
                key={suggestion}
                onClick={() => this.handleItemClicked(suggestion)}>
                {suggestion}
              </li>
            ))}
            <li onClick={() => this.handleItemClicked('all')} key='all'>
              <b>See all cities</b>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default CitySearch;
