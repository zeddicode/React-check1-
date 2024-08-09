// Code for the Player component

import React from 'react';
import Card from 'react-bootstrap/Card';
import './player.css';

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  return (
    <Card className='cardPlayer'>
      <Card.Img variant="top" src={imageUrl} alt={name} className='cardImage'/>
      <Card.Body>
        <Card.Title className='playerName'>{name}</Card.Title>
        <Card.Text>
          <h3>Team:</h3> {team}<br />
          <h3>Nationality:</h3> {nationality}<br />
          <h3>Jersey Number:</h3> {jerseyNumber}<br />
          <h3>Age:</h3> {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

// Default props
Player.defaultProps = {
  name: "Unknown Player",
  team: "Unknown Team",
  nationality: "Unknown Nationality",
  jerseyNumber: "N/A",
  age: 0,
  imageUrl: "https://via.placeholder.com/150"
};

export default Player;
