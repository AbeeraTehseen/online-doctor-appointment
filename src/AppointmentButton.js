import React, { Component } from "react";
import {
  Form,
  Col,
  Button,
  Row
} from "react-bootstrap";
import "./AppointmentButton.css";
 
class AppointmentButton extends Component {
  render() {
    return (
      <div className="BookAppointment">
        <h2 className="join">Book Your Desire Appointment...</h2>
        <Form>
  <Form.Group as={Row} controlId="formHorizontalEmail">
    <Form.Label column sm={2}>
     <b> Email</b>
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="email" placeholder="Email" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formHorizontalPassword">
    <Form.Label column sm={2}>
    <b>  Password</b>
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="password" placeholder="Password" />
    </Col>
  </Form.Group>
  <fieldset>
    <Form.Group as={Row}>
    <Form.Label column sm={2}><b>Availible Day</b></Form.Label>
    <Col sm={10}>
      <Form.Control as="select">
        <option>Monday</option>
        <option>Tuesday</option>
        <option>Wednesday</option>
        <option>Thursday</option>
        <option>Firday</option>
      </Form.Control>
      </Col>
    </Form.Group>
  </fieldset>
  <fieldset>
    <Form.Group as={Row}>
    <Form.Label column sm={2}><b>Timing</b></Form.Label>
    <Col sm={10}>
      <Form.Control as="select">
        <option>Morning (10AM-1PM)</option>
        <option>Evening (6PM-8PM</option>
       
      </Form.Control>
      </Col>
    </Form.Group>
  </fieldset>


  <Form.Group as={Row}>
    <Col sm={{ span: 10, offset: 2 }}>
      <Button type="submit">Submit</Button>
    </Col>
  </Form.Group>
</Form>
      </div>
    );
  }
}
 
export default AppointmentButton;