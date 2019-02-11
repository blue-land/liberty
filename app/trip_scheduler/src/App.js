import React, { Component } from 'react';
import logo from './logo.svg';
import { Switch } from 'antd';
import './style/App.css';
import 'antd/dist/antd.css';


function onChange(checked) {
  this.setState({activeSwitch: checked});
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
        activeSwitch:false,
    };
  }

  activeRender=()=>{
    console.log('Learn react')
    return(
    <div className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      Edit <code>src/App.js</code> and save to reload.
    </p>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
  </div>
    )
  }

  render() {
    return (
      <div className="App">
      <div className='Switch'>
      <div className='Switch-txt'>
      Please Activate
      </div>
      <Switch
          onChange={onChange.bind(this)} />
        
      </div>
          {this.state.activeSwitch? this.activeRender():null}
      </div>
    );
  }
}

export default App;
