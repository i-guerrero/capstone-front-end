import React from "react";
import { Carousel, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./AddMenteesProject.css";

export default function AddMenteesProject({ mentees }) {
  const reduceMentees = (acc, cur, index) => {
    const groupIndex = Math.floor(index / 1);
    if (!acc[groupIndex]) acc[groupIndex] = [];
    acc[groupIndex].push(cur);
    // console.log(acc);
    return acc;
  };

  return (
    <div className="carousel-mentees">
      <Carousel mentees={mentees}>
        {mentees.reduce(reduceMentees, []).map((item, index) => (
          <Carousel.Item key={index}>
            <div className="d-flex justify-content-center">
              {item.map((item, index) => {
                return (
                  <Card key={index} style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={item.profile_img} />
                    <Card.Body>
                      <Card.Title>
                        {item.first_name} {item.last_name}
                        <br />
                        from {item.city}, {item.country}
                      </Card.Title>
                      <Card.Text>
                        Email: <Link>{item.email}</Link> <br /> Connect with{" "}
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
