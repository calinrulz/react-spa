import React, { Component } from 'react';
import axios from 'axios';

import MainLayout from './layouts/MainLayout/main-layout';

import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {}
    };
  }

  componentDidMount() {
    axios.get('siteData.json')
      .then(res => {
        this.setState({ data: res.data })
      })
      .catch(err => console.log(err));
  }

  render() {
    const dataSite = this.state.data.siteData;

    return (
      <div className="App">
        {dataSite ? <MainLayout data={dataSite} /> : ''}
      </div>
    );
  }
}

export default App;
