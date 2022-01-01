import React from 'react';
import Logs from './components/Logs.js';
import Nav from './components/Nav.js';
import Submit from './components/Submit.js';
import getLogs from './components/helpers/getLogs.js'

import './App.css';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      logs: undefined,
      headers: [],
      view: "View Logs"
    }
  }

  componentDidMount = () => {
    this.query();
  }

  query = (option) => {
    getLogs(option).then(data => this.setState({
      logs: data,
      headers: Object.keys(data[0])
    }))
  }

  changeView = (view) => {
    this.setState({
      view: view
    });
  }
  render(){
    return (
      <div className="App">
        <Nav changeView={this.changeView} />
        {(this.state.logs && this.state.view === "View Logs") &&
          <Logs logs={this.state.logs} headers={this.state.headers} query={this.query}/>}
        {this.state.view === "Submit Logs" &&
          <Submit />}
      </div>
    );
  }
}

export default App;
