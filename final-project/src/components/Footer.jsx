import React from 'react';
import { Card, Button, Image } from "react-bootstrap";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer" >
      <Card text={'white'} className="text-center mb-2" style={{ backgroundImage: `url("./images/wood.png")` }}>
        <Card.Body>
          <Image src="images/typecraft-logo.png" className="typecraft-logo-footer" />
          <Card.Title style={{ fontSize: '1.5rem', fontFamily: 'Abril Fatface' }}>TypeCraft</Card.Title>
          <Card.Text>
            <Card.Link href="https://www.cirquedusoleil.com/casting/disciplines/clowns-physical-actors/clowns">Careers</Card.Link>
          </Card.Text>
          <Card.Text>
            <Card.Link href="https://www.termsfeed.com/live/69ee8f54-7e96-4b93-bc11-46ac04716140">Terms of Use</Card.Link>
          </Card.Text>
          <Card.Text>
            <Card.Link href="https://www.termsfeed.com/live/a302bc97-5768-4866-8e9c-a16ad4a7f843">Privacy Policy</Card.Link>
          </Card.Text>
          <Button variant="primary"><i className="fab fa-facebook fa-lg"></i></Button>
          <Button variant="info"><i className="fab fa-twitter fa-lg"></i></Button>
          <Button variant="danger"><i className="fab fa-tiktok fa-lg"></i></Button>
        </Card.Body>
        <Card.Footer>© 2021 Copyright. TypeCraft. All rights reserved.</Card.Footer>
      </Card>
    </div>
  )
}