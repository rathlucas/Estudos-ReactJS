import React, { useState } from 'react';

const initialState = {
  name: '',
  description: '',
  img_url: '',
  link_url: '',
};

const Form = ({ addPlanet }) => {
  const [fields, setFields] = useState(initialState);

  const handleFieldsChange = (e) => {
    setFields({
      ...fields,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    addPlanet(fields);

    e.preventDefault();

    setFields(initialState);
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={handleFieldsChange}
          value={fields.name}
        />
        <br />
        <label htmlFor="description">Description: </label>
        <input
          type="text"
          id="description"
          name="description"
          onChange={handleFieldsChange}
          value={fields.description}
        />
        <br />
        <label htmlFor="img_url">Image URL: </label>
        <input
          type="text"
          id="img_url"
          name="img_url"
          onChange={handleFieldsChange}
          value={fields.img_url}
        />
        <br />
        <label htmlFor="link_url">Link URL: </label>
        <input
          type="text"
          id="link_url"
          name="link_url"
          onChange={handleFieldsChange}
          value={fields.link_url}
        />
        <br />
        <input type="submit" />
      </form>
    </>
  );
};

export default Form;
