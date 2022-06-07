import React from 'react';

const DescriptionWithLink = (props) => {
  return (
    <>
      <p>{props.description}</p>
      <a href={props.link_url}>Saiba Mais</a>
    </>
  );
};

export default DescriptionWithLink;
