import React, { useState } from 'react';
import { Container, Jumbotron, Modal, Button, Nav } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Typing from "react-typing-animation";
import useApplicationData from '../hooks/useApplicationData';
import Register from './Register';
import Login from './Login';
import "./WelcomePage.css";

export default function Welcomepage() {

  const { checkLoggedIn } = useApplicationData();

  const history = useHistory();
  const navigateToPlay = () => {
    history.push("/play");
    history.go(0)
  }

  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);
  const handleCloseRegister = () => setShowRegister(false);
  const handleShowRegister = () => setShowRegister(true);

  return (
    <div className="welcome-container">
      <Jumbotron fluid className="container-of-bg" style={{ backgroundImage: "url(/images/whitekeyboard.jpg)" }}>
        <Container className="welcome-text-box" style={{ marginLeft: '6rem' }}>
          <h1 className="welcome-to-typecraft">
            <Typing speed={100}>
              TypeCraft
            </Typing>
          </h1>
          <h2>
            12 Levels 🏆
          </h2>
          <h2>
            30 Seconds Each ⏳
          </h2>
          <h2>
            Do you have what it takes?
          </h2>
          {checkLoggedIn() ?
              <Button
                variant="outline"
                size="lg"
                className="startGameButton"
                onClick={navigateToPlay}
              >
                Play Now
            </Button>
            :
            <Button className="startGameButton" variant="outline" onClick={handleShowLogin} size="lg">Play Now</Button>
          }
        </Container>
      </Jumbotron>

      {/* Modal for Login Form */}
      {!checkLoggedIn() &&
        <Modal show={showLogin} onHide={handleCloseLogin}>
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Login
              handleCloseLogin={handleCloseLogin}
            />
          </Modal.Body>
          <Modal.Footer>
            <Nav.Link className="navLink" variant="primary" onClick={() => { handleCloseLogin(); handleShowRegister() }}>
              New User? Click Here To Register!
            </Nav.Link>
          </Modal.Footer>
        </Modal>
      }

      {/* Modal for Register Form */}
      <Modal show={showRegister} onHide={handleCloseRegister}>
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Register
            handleCloseRegister={handleCloseRegister}
          />
        </Modal.Body>
        <Modal.Footer>
          <Nav.Link className="navLink" variant="primary" onClick={() => { handleCloseRegister(); handleShowLogin() }}>
            Already Registered? Click Here To Login!
          </Nav.Link>
        </Modal.Footer>
      </Modal>
    </div>
  )
}