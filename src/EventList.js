import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Event from './Event';

class EventList extends Component {
  render() {
    const { events } = this.props;
    return (
      <Container>
        <Row className='eventList'>
          {events.map((event) => (
            <Col key={event.id}>
              <Event event={event} />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default EventList;
