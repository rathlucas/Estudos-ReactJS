import React, { useState, useEffect } from 'react';

import Planet from './planet';
import Form from './form';

async function getPlanets() {
  const response = await fetch('http://localhost:3000/api/planets.json');
  const data = await response.json();

  return data;
}

function Planets() {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    getPlanets().then((data) => {
      setPlanets(data['planets']);
    });
  }, []);

  const addPlanet = (new_planet) => {
    setPlanets([...planets, new_planet]);
  };

  return (
    <>
      <h3>Planet List</h3>

      <Form addPlanet={addPlanet} />
      {planets.map((planet, index) => {
        return (
          <Planet
            id={planet.id}
            key={index}
            name={planet.name}
            description={planet.description}
            img_url={planet.img_url}
            link_url={planet.link_url}
          />
        );
      })}
    </>
  );
}

export default Planets;
