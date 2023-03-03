import React, { useState } from "react";
import { useEffect } from "react";
import TinderCard from "react-tinder-card";
import "./tinderCards.css";
import axios from "../axios";

const TinderCards = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("/tinder/cards");
      setPeople(req.data);
    }
    fetchData();
  }, []);

  // {
  //   "name": "Aimyon",
  //   "url": "https://wallpaperaccess.com/full/7792871.jpg",
  // },
  // {
  //   "name": "Cillian Murphy",
  //   "url": "https://www.popsugar.com.au/wp-content/uploads/sites/2/2022/03/0fb2e55d623c6127938610.67683320_GettyImages--741x1024.jpg",
  // },
  // {
  //   "name": "Tom Hardy",
  //   "url": "https://static.skyassets.com/contentstack/assets/bltdc2476c7b6b194dd/blt19705dd817c1ac4f/63331aba4d11fa0cfdb55068/Tom-Hardy-Main.jpg?downsize=1200:*&output-format=jpg",
  // },
  // {
  //   "name": "Christian Bale",
  //   "url": "https://starsunfolded.com/wp-content/uploads/2016/06/Christian-Bale.jpg",
  // },

  const swiped = (name) => {
    console.log(`Removing : ${name}`);
  };

  const outOfFrame = (name) => {
    console.log(`${name} left the screen`);
  };

  return (
    <React.Fragment>
      <div className="tinderCards">
        <div className="cards_container">
          {people.map((p) => (
            <TinderCard
              className="swipe"
              key={p.name}
              onSwipe={() => swiped(p.name)}
              preventSwipe={["up", "down"]}
              onCardLeftScreen={() => outOfFrame(p.name)}
            >
              <div
                style={{ backgroundImage: `url(${p.imgUrl})` }}
                className="card"
              >
                <h3>{p.name}</h3>
              </div>
            </TinderCard>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default TinderCards;
