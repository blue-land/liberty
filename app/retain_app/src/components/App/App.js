import React, { Component } from 'react';
import { Switch, Button, Upload, Icon } from 'antd';
import '../../style/common.css';
import 'antd/dist/antd.css';
import { onChange, onClick } from '../../actions/common.js';
import { activeRender } from '../Hoge/Hoge.js';
import ReactDOM from 'react-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSwitch: false,
      greeting: null
    };
    this.setting = {
      settings: {
        data: this.data,
        rowHeaders: true,
        colHeaders: true,
        licenseKey: 'non-commercial-and-evaluation'
      }
    }

  }

  handleChange = info => {
    let fileList = [...info.fileList];
    fileList = fileList.slice(-2);
    fileList = fileList.map(file => {
      if (file.response) {
        file.url = file.response.url;
      }
      return file;
    });

    this.setState({ fileList });
    console.log(info)
    console.log(this.props)
  };


  render() {
    const props = {
      action: 'http://localhost:3000/upload',
      onChange: this.handleChange,
      multiple: true,
    };
    return (
      <div className="App">
        <div className='Switch'>
          <div className='Switch-txt'>
            Please Activate
      </div>
          {this.state.greeting}
          <Button type="primary" onClick={onClick.bind(this)}>greeting</Button>
          <Switch
            onChange={onChange.bind(this)} />

        </div>
        {/* {this.state.activeSwitch ? activeRender() : null} */}
        <Upload {...props}>

          <Button>
            <Icon type="upload" /> Click to Upload
    </Button>
        </Upload> ,
      </div >
    );
  }
}

export default App;
