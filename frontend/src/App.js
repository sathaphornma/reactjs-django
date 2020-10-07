import React, { Component } from 'react';

export default class App extends Component {

  constructor() {
    super();
    this.state = { data: [] };
  }

  async componentDidMount() {
    const response = await fetch('http://127.0.0.1:8000/api/');
    const json = await response.json();
    this.setState({ data: json });
    console.log(this.state.data);
  }

  
  render(){
    return (
      <div>
        {this.state.data.map((hero)=>
          <div key={hero.id}>
            <h5>{hero.name}</h5>
            <p>{hero.description}</p>
          </div>
        )}
      </div>
    );
  }
  
}
