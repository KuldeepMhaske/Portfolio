import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am{" "}
            <span className="purple">Kuldeep Jagdeo Mhaske</span> from{" "}
            <span className="purple">India</span>.
            <br />
            Email: <span className="purple" >Mhaskekuldip@gmail.com </span>
           
            <br />
            I am a Software Developer specializing in .NET & Cross-Platform App
            Development, with 2+ years of experience.
            <br />
            I have hands-on experience building real-world applications focused on
            scalability, performance, and clean UI/UX.
            <br />
            I love solving problems with technology and continuously improving my
            skills in full-stack development, mobile apps, and AI automation.
            <br />
            <br />
            Here are a few things I enjoy beyond coding:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Building AI-powered solutions
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring new tech stacks
            </li>
            <li className="about-activity">
              <ImPointRight /> Contributing to open-source projects
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning and sharing knowledge
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">
            Kuldeep Jagdeo Mhaske
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
