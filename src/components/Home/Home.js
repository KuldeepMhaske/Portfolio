import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";   // ✅ For page navigation
import { motion } from "framer-motion";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row className="align-items-center justify-content-center">
            {/* Left Content */}
            <Col
              lg={6}
              md={12}
              className="home-header text-start d-flex flex-column justify-content-center"
            >
              <motion.h1
                className="heading  mr-5"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Hello{" "}
                <span className="wave" role="img" aria-label="wave">
                  👋🏻
                </span>
              </motion.h1>

              <motion.h1
                className="heading-name mb-3"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                I'M
                <strong className="main-name"> KULDEEP JAGDEO MHASKE</strong>
              </motion.h1>

              <motion.h3
                className="main-profession text-muted fw-semibold mb-4 ms-5" // added ms-5
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                Software Developer | .NET & Cross-Platform App Developer
              </motion.h3>

              <motion.p
                className="home-description lead mb-4 ms-5" // added ms-5
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2 }}
              >
                I am a passionate Software Developer specializing in{" "}
                <strong>.NET</strong>, cross-platform applications, and{" "}
                <strong>AI-powered solutions</strong>.
                With hands-on experience building scalable and user-friendly applications,
                I focus on delivering performance, clean UI/UX, and practical solutions.
                I love solving real-world problems through technology while constantly
                upgrading my skills in full-stack development, mobile apps, and automation.
              </motion.p>


              {/* ✅ About Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.4 }}
              >

              </motion.div>
            </Col>

            {/* Right Image */}
            <Col
              lg={6}
              md={12}
              className="text-center mt-4 mt-md-0 d-flex justify-content-center"
            >
              <motion.img
                src={homeLogo}
                alt="Developer working on laptop illustration"
                className="img-fluid"
                style={{ maxHeight: "420px" }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9 }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
