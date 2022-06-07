import React, { Component } from 'react';

import Planet from './planet';

async function getPlanets() {
  const response = await fetch('http://localhost:3000/api/planets.json');
  const data = await response.json();

  return data;
}

class Planets extends Component {
  constructor(props) {
    super(props);

    this.state = {
      planets: [],
    };
  }

  componentDidMount() {
    getPlanets().then((data) => {
      this.setState((state) => ({
        planets: data['planets'],
      }));
    });
  }

  removeLastPlanet = () => {
    const newPlanets = [...this.state.planets];

    newPlanets.pop();
    this.setState(() => ({
      planets: newPlanets,
    }));
  };

  render() {
    return (
      <>
        <h3>Planet List</h3>
        <button onClick={this.removeLastPlanet}>Remove the last planet</button>
        {this.state.planets.map((planet) => {
          return (
            <Planet
              name={planet.name}
              description={planet.description}
              link_url={planet.link_url}
              img_url={planet.img_url}
            />
          );
        })}
      </>
    );
  }
}

export default Planets;
