import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Segment, Header, Divider } from 'semantic-ui-react';
import TextField from './TextField';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      textField: ''
    };
  }
  render() {
    return (
      <Segment basic>
        <Segment>
          <Header as='h1'>Text Input</Header>
          <Divider />
          <TextField placeholder='hello' label='哈囉世界' value='' />
          <Divider />
          <Header as='h2'>Error</Header>
          <TextField placeholder='error' label='哈囉錯誤' value='' error={true} />
        </Segment>
      </Segment>
    );
  }
}

export default App;
