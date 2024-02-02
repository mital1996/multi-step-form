import React from "react";
import "../index.css";
import { Container, Row, Col } from "react-bootstrap";
import NavigationBar from "./NavigationBar";

const MainContain = ({ children }) => {
  return (
    <Container fluid className="box_content">
      <Row className="main_row">
        <Col xs={3}>
          <NavigationBar />
        </Col>
        <Col xs={9}>
          {" "}
          <div className="page-content">{children}</div>
        </Col>
      </Row>
    </Container>
  );
};

export default MainContain;
