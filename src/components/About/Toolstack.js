import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiJava, DiMsqlServer } from "react-icons/di";
import {
  SiVisualstudiocode,
  SiPostman,
  SiFirebase,
  SiDocker,
  SiGithub,
  SiPycharm,
  SiVisualstudio,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudio title="Vusual Studio" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode title="VS Code" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPycharm title="PyCharm" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMsqlServer title="MSSQL" />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub title="GitHub" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker title="Docker" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase title="Firebase" />
      </Col>

    </Row>
  );
}

export default Toolstack;
