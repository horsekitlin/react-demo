import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Segment, Header, Divider } from 'semantic-ui-react';
import TextField from './TextField';
import ToggleCheckbox from './ToggleCheckbox';
import { themeGrapefruit } from './color';

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
          <Header as='h1'>Toggle Checkbox</Header>
          <Divider />
          <ToggleCheckbox />
          <Divider />
          <ToggleCheckbox bgColor={themeGrapefruit} />
        </Segment>
        <Segment>
          <Header as='h1'>Text Input</Header>
          <Divider />
          <TextField placeholder='hello' label='哈囉世界' value='' onChange={console.log}/>
          <Divider />
          <Header as='h2'>Error</Header>
          <TextField placeholder='error' label='哈囉錯誤' value='' error={true} onChange={console.log}/>
        </Segment>
      </Segment>
    );
  }
}

export default App;
