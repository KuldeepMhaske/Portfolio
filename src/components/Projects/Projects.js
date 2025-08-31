import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCards from "./ProjectCards";
import AvatarImg from "../../Assets/avatar.jpg"; // Use avatar.svg as placeholder
import gst from "../../Assets/Projects/gst.gif";
import hostel from "../../Assets/Projects/hostel.png";
import snk from "../../Assets/Projects/snake.gif";
import rps from "../../Assets/Projects/rps.png"
import WRA from "../../Assets/Projects/WRA.png"
import product from "../../Assets/Projects/product.png"
import ComingSoon from "../../Assets/Projects/coming_soon.png"

const GHLINK = "https://github.com/KuldeepMhaske";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some of my featured works.
        </p>
        
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={WRA}
              title="Water Reminder App | AquaTrack"
              description="COMING SOON :  Developed using .NET MAUI. Features custom reminders, daily water goals, logging system, premium themes, health app sync. Monetization: Ads + Subscription."
              ghLink={GHLINK}
              demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={snk}
              title="Snake Game - Ek Adhura Saap"
              description="CRUD operations with image upload, validation, filters, card-based UI."
              ghLink="https://kuldeepmhaske.github.io/Snake_Game/"
              demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={rps}
              title="RockPaperScissors - Ek Jeet"
              description="CRUD operations with image upload, validation, filters, card-based UI."
              ghLink="https://kuldeepmhaske.github.io/RockPaperScissors/"
              demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={hostel}
              title="Hostel Management System"
              description="Built with .NET & SQL. AI recommends Students based on Rooms of each student."
              ghLink="https://github.com/KuldeepMhaske/Hostel-Registration-System-Using-Python"
              demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={gst}
              title="GST Calculator (India)"
              description="A Python Flask web app with attractive UI. Calculates GST for businesses with a simple, user-friendly interface."
              ghLink="https://kuldeepmhaske.pythonanywhere.com/"
              demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={ComingSoon}
              title="Resume Builder Web App"
              description="Allows users to generate resumes with multiple templates, PDF/DOCX export, AI-powered summaries. Includes free & premium features."
              ghLink={GHLINK}
              demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={ComingSoon}
              title="VisitorApp"
              description="A .NET MAUI app for visitor management in organizations. Includes check-in/out, visitor details, edit & delete functionality."
              ghLink={GHLINK}
              demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={product}
              title="Product Module – .NET Core MVC"
              description="CRUD operations with image upload, validation, filters, card-based UI."
              ghLink="https://github.com/KuldeepMhaske/ProductModule"
              demoLink=""
            />
          </Col>





          



          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={ComingSoon}
              title="Creepy World YouTube Automation (AI Agent)"
              description="Built an n8n AI workflow agent to generate & upload 30+ creepy YouTube Shorts daily. Fully automated using free AI tools."
              ghLink={GHLINK}
              demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
