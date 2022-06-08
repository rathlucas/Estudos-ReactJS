import React, { useState, useEffect } from 'react';

import DescriptionWithLink from '../../shared/description_with_link';
import GrayImg from '../../shared/gray_img';

async function getSatellites(id) {
  const response = await fetch(`http://localhost:3000/api/${id}.json`);
  const data = await response.json();

  return data;
}

function Planet({ id, name, description, img_url, link_url, onClick }) {
  const [satellites, setSatellites] = useState([]);

  useEffect(() => {
    getSatellites(id).then((data) => {
      setSatellites(data['satellites']);
    });
  });

  return (
    <div>
      <h4>{name}</h4>
      <GrayImg img_url={img_url} />
      <DescriptionWithLink description={description} link_url={link_url} />
      <h4>Satélites</h4>
      <ul>
        {satellites.map((satellite, index) => {
          return <li key={index}>{satellite.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default Planet;
