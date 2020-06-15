import React, { Component } from 'react';
import { Header, Icon, List, ListItem} from 'semantic-ui-react';

import axios from 'axios';
import { IActivity } from '../Models/activity';


interface IState{
  activities: IActivity[];
}

class App extends Component<{}, IState> {


  readonly state: IState = {
    activities: [],
    
  }

 
  componentDidMount(){
    axios.get<IActivity[]>('http://localhost:5000/api/activities')
    .then((response)=>{
      
      this.setState( {activities: response.data} );

      
    });
    
  }
 
  render(){

    

    return (
      <div >
      <Header as='h2'>
        <Icon name='users'/>
        <Header.Content>PIMPOM</Header.Content>
      </Header>
        <List>
        {this.state.activities.map((acti)=>(<ListItem key={acti.id}>La actividad cool {acti.title} sera en el venue {acti.venue}</ListItem>))}
        </List>
      </div>
    );
  }
}

export default App;
