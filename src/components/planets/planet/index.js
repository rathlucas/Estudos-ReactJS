import React from 'react';

import DescriptionWithLink from '../../shared/description_with_link';
import GrayImg from '../../shared/gray_img';

const Planet = (props) => {
  let planetName;

  const satellitesNames = ['a', 'b', 'c'];
  const satellitesContent = satellitesNames.map((name) => {
    return <li>{name}</li>;
  });

  if (props.underline) {
    planetName = (
      <h4>
        <u>{props.name}</u>
      </h4>
    );
  } else {
    planetName = <h4>{props.name}</h4>;
  }

  return (
    <div onClick={() => props.onClick(props.name)}>
      {planetName}
      <GrayImg img_url={props.img_url} />
      <DescriptionWithLink
        description={props.description}
        link_url={props.link_url}
      />
      <h4>Satélites</h4>
      <ul>{satellitesContent}</ul>
    </div>
  );
};

export default Planet;
