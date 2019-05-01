import React, { Component } from 'react';
import { Switch,Button } from 'antd';
import '../../style/common.css';
import 'antd/dist/antd.css';
import {onChange,onClick} from '../../actions/common.js';
import {activeRender} from '../Hoge/Hoge.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
        activeSwitch:false,
        greeting:null
    };
  }

  render() {
    return (
      <div className="App">
      <div className='Switch'>
      <div className='Switch-txt'>
      Please Activate
      </div>
      {this.state.greeting}
      <Button type="primary" onClick ={onClick.bind(this)}>greeting</Button>
      <Switch
          onChange={onChange.bind(this)} />
        
      </div>
          {this.state.activeSwitch? activeRender():null}
      </div>
    );
  }
}

export default App;
