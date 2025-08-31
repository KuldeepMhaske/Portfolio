import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/Kuldeep_Mhaske_Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState(null);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume" style={{ justifyContent: "center" }}>
          <Document
            file={pdf}
            className="d-flex flex-column align-items-center"
            onLoadSuccess={onDocumentLoadSuccess}
          >
            {Array.from(new Array(numPages), (el, index) => (
              <div key={`page_${index + 1}`} style={{ marginBottom: "30px" }}>
                <Page
                  pageNumber={index + 1}
                  scale={width > 786 ? 1.7 : 0.6}
                />
              </div>
            ))}
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative", marginTop: "40px" }}>
          <Col md={8}>
            <h2 className="purple">Education</h2>
            <ul>
              <li>
                <strong>Bachelor’s in Electronics and Telecommunication (E & TC)</strong>
              </li>
            </ul>
            <h2 className="purple" style={{ marginTop: "30px" }}>Achievements</h2>
            <ul>
              <li>Built 10+ full-scale applications used by real organizations</li>
              <li>Automated YouTube channel workflows to generate passive income</li>
              <li>Active contributor to open-source projects and personal developer tools</li>
            </ul>
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
