// import Button from '@restart/ui/esm/Button';
import React from "react";

import { Card } from "react-bootstrap";
import "./movie-card.styles.scss";

const MoveCard = ({ title, poster_path, overview }) => {
  const shortOverview = overview.slice(0, 100);

  return (
    <div className="col-md-3 mb-3">
      <Card className="movie-card">
        <Card.Img
          variant="top"
          style={{ height: "300px" }}
          src={`https://image.tmdb.org/t/p/w1280/${poster_path}`}
        />

        <Card.Body>
          <Card.Title style={{ color: "red" }}>{title}</Card.Title>

          <Card.Text>
            <div className="movie-card-description">
              {shortOverview} <span className="text-primary">see more....</span>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MoveCard;
