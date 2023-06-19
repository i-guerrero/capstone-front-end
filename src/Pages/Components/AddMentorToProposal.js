import React from "react";
import { Carousel, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./AddMentorToProposal.css"

export default function AddMentorToProposal({ mentors }) {
  const reduceMentors = (acc, cur, index) => {
    const groupIndex = Math.floor(index / 1);
    if (!acc[groupIndex]) acc[groupIndex] = [];
    acc[groupIndex].push(cur);
    return acc;
  };

  return (
    <div className="carousel-mentors">
      <Carousel mentors={mentors}>
        {mentors.reduce(reduceMentors, []).map((item, index) => (
          <Carousel.Item key={index}>
            <div className="d-flex justify-content-center">
              {item.map((item, index) => {
                return (
                  <Card key={index} style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={item.profile_img} />
                    <Card.Body>
                      <Card.Title>
                        {item.first_name} {item.last_name}<br />from {item.city},{" "}
                        {item.country}
                      </Card.Title>
                      <Card.Text>
                        Email: <Link >{item.email}</Link> <br /> Connect with{" "}
                        {item.first_name} on{" "}
                        <Link to={item.linkedin}>Linkedin!</Link>
                      </Card.Text>
                      <div className="btn-row">
                        <Button variant="primary">Skills</Button>
                        <Button variant="primary">Invite Me</Button>
                      </div>
                    </Card.Body>
                  </Card>
                );
              })}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
