import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Footer() {
  return (
    <footer className="mt-auto">
      <Container fluid={true}>
        <Row className="justify-content-between p-3">
          {/* <Col className="pd-0" md={3} sm={12}>
            Suhas P
          </Col> */}
          <Col className="pd-0 d-flex justify-content-end ml-auto" md={3}>
            Built with{" "}
            <span role="img" aria-label="label">
              ❤️️
            </span>{" "}
            using React JS.
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
export default Footer;
