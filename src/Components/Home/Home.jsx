import React, { useContext, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import style from "./home.module.css";
import { Link } from "react-router-dom";
import { heroContext } from "../Contexts/heroContext";

const Home = () => {
  const { heroes, getHeroes, deleteHero } = useContext(heroContext);

  useEffect(() => {
    getHeroes();
  }, []);

  return (
    <div className={style.cards}>
      {heroes.map((card) => (
        <Card style={{ width: "22rem" }}>
          <Card.Img variant="top" src={card.image} />
          <Card.Body>
            <Card.Title className={style.title}>{card.title}</Card.Title>
            <Card.Text className={style.txt}>{card.desc}</Card.Text>
            <div className={style.btn}>
              <Link to={`/edit/${card.id}`}>
                <Button variant="primary">Update</Button>
              </Link>
              <Button onClick={() => deleteHero(card.id)} variant="danger">
                Delete
              </Button>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Home;
