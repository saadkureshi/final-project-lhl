import React from 'react';
import { Container, Row, Col, Card, Button, ProgressBar } from 'react-bootstrap';
import Attempts from "./Attempts";
import "./Profile.css";

function Profile() {

  const roundTo = require('round-to');
  
  const userGameStatus = (((localStorage.getItem("user_details") && JSON.parse(localStorage.getItem("user_details")).highest_level_cleared)/12) * 100)

  return (
    <div className="profile">
      <Container>
        <Row>
          <Col>
            <Card border="secondary" style={{ width: '18rem' }}>
              <Card.Img variant="top" src="images/sample-avatar.jpg" className="avatar" />
              <Card.Body>
                <Card.Title className="profileName">{localStorage.getItem("user_details") && JSON.parse(localStorage.getItem("user_details")).first_name} {localStorage.getItem("user_details") && JSON.parse(localStorage.getItem("user_details")).last_name}</Card.Title>
                <Card.Subtitle className="profileUserName text-muted">@{localStorage.getItem("user_details") && JSON.parse(localStorage.getItem("user_details")).username}</Card.Subtitle>
                <ProgressBar animated now={roundTo(userGameStatus, 0)} label={roundTo(userGameStatus, 0) + "%"} />
                {userGameStatus == 100 ?
                  <Card.Text className="medalCard">
                  <br />
                  <Card.Img className="medal-icon" variant="top" src="images/rookiemedal.png" className="medal-icon" />
                  <Card.Img className="medal-icon" variant="top" src="images/3medal.png" className="medal-icon" />
                  <Card.Img className="medal-icon" variant="top" src="images/2medal.png" className="medal-icon" />
                  <Card.Img className="medal-icon" variant="top" src="images/1medal.png" className="medal-icon" />
                  <Card.Img className="medal-icon" variant="top" src="images/3startrophy.png" className="medal-icon" />
                  <br />
                  <strong className="progressTitle">Master</strong>
                </Card.Text>
                : userGameStatus > 75 ? 
                <Card.Text className="medalCard">
                  <br />
                  <Card.Img className="medal-icon" variant="top" src="images/rookiemedal.png" className="medal-icon" />
                  <Card.Img className="medal-icon" variant="top" src="images/3medal.png" className="medal-icon" />
                  <Card.Img className="medal-icon" variant="top" src="images/2medal.png" className="medal-icon" />
                  <Card.Img className="medal-icon" variant="top" src="images/1medal.png" className="medal-icon" />
                  <br />
                  <strong className="progressTitle">Veteran</strong>
                </Card.Text> 
                : userGameStatus > 50 ?
                <Card.Text className="medalCard">
                  <br />
                  <Card.Img className="medal-icon" variant="top" src="images/rookiemedal.png" className="medal-icon" />
                  <Card.Img className="medal-icon" variant="top" src="images/3medal.png" className="medal-icon" />
                  <Card.Img className="medal-icon" variant="top" src="images/2medal.png" className="medal-icon" />
                  <br />
                  <strong className="progressTitle">Experienced</strong>
                </Card.Text>
                : userGameStatus > 25 ?
                <Card.Text className="medalCard">
                  <br />
                  <Card.Img className="medal-icon" variant="top" src="images/rookiemedal.png" className="medal-icon" />
                  <Card.Img className="medal-icon" variant="top" src="images/3medal.png" className="medal-icon" />
                  <br />
                  <strong className="progressTitle">Seasoned</strong>
                </Card.Text>
                : 
                <Card.Text className="medalCard">
                  <br />
                  <Card.Img className="medal-icon" variant="top" src="images/rookiemedal.png" className="medal-icon" />
                  <br />
                  <strong className="progressTitle">Rookie</strong>
                </Card.Text>
                }
                <Card.Text>Highest Level Completed: {localStorage.getItem("user_details") && JSON.parse(localStorage.getItem("user_details")).highest_level_cleared + "/12"}</Card.Text>
                <Card.Text>Average WPM: {localStorage.getItem("user_details") && JSON.parse(localStorage.getItem("user_details")).words_per_min}</Card.Text>
                <Button className="leaderboardButton" variant="primary" href="/leaderboard">Global Leaderboard</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Row>
              <Card style={{ width: '45rem' }} >
                <Card.Header as="h5">🔥Your Top Typing Speeds🔥</Card.Header>
                <Card.Body>
                  <Attempts />
                </Card.Body>
              </Card>
            </Row>
            <br />
            <br />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Profile
