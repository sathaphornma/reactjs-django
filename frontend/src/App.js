import React, { Component } from 'react';
import axios from 'axios' ;

export default class App extends Component {



  state = {
    name: '',
    description: '',
    avatar: null,
    heros: [],
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  };

  handleImageChange = (e) => {
    this.setState({
      avatar: e.target.files[0]
    })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    
    let form_data = new FormData();
    form_data.append('name', this.state.name);
    form_data.append('description', this.state.description);
    form_data.append('avatar', this.state.avatar, this.state.avatar.name);
    
    let url = 'http://localhost:8000/api/post/';

    axios.post(url, form_data, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
    .then(res => {
      console.log(res.data);
    })
    .catch(err => console.log(err))

  };

  componentDidMount(){
    let url = 'http://localhost:8000/api/post/';
    axios.get(url)
      .then(res => {
        const all_heros = res.data;
        this.setState({ heros : all_heros });
      })
      .catch(err => console.log(err))

  }

  render() {
    let url = 'http://localhost:8000';

    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <p>
            <input type="text" placeholder='name' id='name' value={this.state.name} onChange={this.handleChange} required/>
          </p>
          <p>
            <input type="text" placeholder='description' id='description' value={this.state.description} onChange={this.handleChange} required/>

          </p>
          <p>
            <input type="file" id="avatar" accept="image/png, image/jpeg"  onChange={this.handleImageChange} required/>
          </p>
          <input type="submit"/>
        </form>

        <div>
          {this.state.heros.map((hero)=>
            <div key={hero.id}>
              <img src={url + hero.avatar} alt="avatar"/>
              <b>{hero.name}</b>
              <p>{hero.description}</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}
