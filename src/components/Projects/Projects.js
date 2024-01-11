import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import bookbuddy from "../../Assets/Projects/book-buddy.png";
import passwordgenerator from "../../Assets/Projects/password-generator.png";
import foodease from "../../Assets/Projects/food-ease.png";
import weatherdashboard from "../../Assets/Projects/weather-dashboard.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foodease}
              isBlog={false}
              title="F00d-Ease"
              description="This application is used to find recipes for the user's desired food or drink."
              ghLink="https://github.com/SugarSheriff/food-ease"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weatherdashboard}
              isBlog={false}
              title="Weather-Dashb0ard"
              description="Enter your location and this dashboard will tell you the weather at your location."
              ghLink="https://github.com/SugarSheriff/weather-dashboard"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={passwordgenerator}
              isBlog={false}
              title="Passw0rd-Generat0r"
              description="This web application allows users to generate strong and secure passwords with various options. Users can specify the password length and choose to include lowercase letters, uppercase letters, numeric characters, and special characters in their generated passwords."
              ghLink="https://github.com/SugarSheriff/password-generator-js"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bookbuddy}
              isBlog={false}
              title="B00k Buddy"
              description="BookBuddy is a web application that allows users to discover and manage their favorite books."
              ghLink="https://github.com/SugarSheriff/BookBuddy"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
