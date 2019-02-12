import React, { Component } from 'react';
import { Switch } from 'antd';
import '../../style/common.css';
import 'antd/dist/antd.css';
import {onChange} from '../../actions/common.js';
import {activeRender} from '../Hoge/Hoge.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
        activeSwitch:false,
    };
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
          {this.state.activeSwitch? activeRender():null}
      </div>
    );
  }
}

export default App;
