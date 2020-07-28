import React, { Component } from "react";
import { Form, Button, Container, Jumbotron, Row, Col } from "react-bootstrap";
import Axios from "axios";
import Footer from "../components/Footer";
import SendIcon from "@material-ui/icons/Send";
import EmailIcon from "@material-ui/icons/Email";
import PersonIcon from "@material-ui/icons/Person";
import CreateIcon from "@material-ui/icons/Create";

import bgc from "../assets/bgc.png";

class Contactpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      disabled: false,
      emailSent: false,
    };
  }
  handleValueChange = (evt) => {
    const val = evt.target.value;
    const stateName = evt.target.name;
    this.setState({ [stateName]: val });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.setState({ disabled: true });
    const requestBody = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
    };

    Axios.post("http://localhost:8080/sendmail", requestBody, {
      timeout: 50000,
    })
      .then((res) => {
        console.log(res);
        if (res.data === "success") {
          this.setState({
            name: "",
            email: "",
            message: "",
            disabled: true,
            emailSent: true,
          });
        } else {
          this.setState({
            name: "",
            email: "",
            message: "",
            disabled: true,
            emailSent: false,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const { name, email, message, disabled, emailSent } = this.state;
    return (
      <div style={{ height: "100vh", backgroundImage:`url(${bgc})` }}>
        <Container id="contactpage">
          <Row className="justify-content-center">
            <Col md={6}>
              <Jumbotron className="mb-0 bg-transparent p-0 text-center">
                <h1>Let's talk!</h1>
              </Jumbotron>
              <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="contactForm.ControlTextarea1">
                  <Form.Label>
                    <PersonIcon color="action"/>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter full name"
                    onChange={this.handleValueChange}
                    value={name}
                    name="name"
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>
                    <EmailIcon color="action"/>
                  </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter e-mail"
                    onChange={this.handleValueChange}
                    value={email}
                    name="email"
                    required
                  />
                </Form.Group>
                <Form.Group controlId="contactForm.ControlTextarea1">
                  <Form.Label>
                    <CreateIcon color="action"/>
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows="3"
                    placeholder="Type your message"
                    onChange={this.handleValueChange}
                    value={message}
                    name="message"
                  />
                </Form.Group>
                <Button variant="primary" type="submit" disabled={disabled}>
                  <SendIcon />
                </Button>
                {emailSent && <h4 style={{ color: "green" }}>Email sent!</h4>}
              </Form>
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}
export default Contactpage;
