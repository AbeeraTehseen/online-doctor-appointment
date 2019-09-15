import React, { Component } from "react";
import {
  Form,
  Col,
  Button,
  Row
} from "react-bootstrap";
import "./contact.css";
 
class Contact extends Component {

 
 
  render() {
    return (
      <div className="DoctorJoin">
        <h2 className="join">Join as a Doctor...</h2>
        <Form onSubmit={this.handleSubmit}>
  <Form.Group as={Row} controlId="formHorizontalEmail" >
    <Form.Label column sm={2}>
     <b> Email</b>
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="email" name="email" />
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
    <Form.Label column sm={2}><b>City</b></Form.Label>
    <Col sm={10}>
      <Form.Control as="select">
        <option>Karachi</option>
        <option>Lahore</option>
        <option>Islamabad</option>
        <option>Peshawar</option>
        <option>Quetta</option>
      </Form.Control>
      </Col>
    </Form.Group>
  </fieldset>
  <fieldset>
    <Form.Group as={Row}>
    <Form.Label column sm={2}><b>Speciality</b></Form.Label>
    <Col sm={10}>
      <Form.Control as="select">
        <option>Anesthesiology</option>
        <option>Dermatology</option>
        <option>Colon and Rectal Surgeons</option>
        <option>Neurologist</option>
        <option>Cardiologists</option>
        <option>Immunologists</option>
        <option>Gynecologist</option>
        <option>Radiologist</option>
      </Form.Control>
      </Col>
    </Form.Group>
  </fieldset>


  <Form.Group as={Row}>
    <Col sm={{ span: 10, offset: 2 }}>
      <Button type="submit"  value="Add to DB" >Submit</Button>
    </Col>
  </Form.Group>
</Form>
      </div>
    );
  }
}
 
export default Contact;