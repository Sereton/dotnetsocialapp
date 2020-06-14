import React, { Component } from 'react';
import { Header, Icon, List, ListItem} from 'semantic-ui-react';
import './App.css';
import axios from 'axios';



class App extends Component {


  state = {
    activities: [],
  }

  componentDidMount(){
    axios.get('http://localhost:5000/api/activities')
    .then((response)=>{
      
      this.setState({activities:response.data});
      
    })
    
  }
 
  render(){

    

    return (
      <div >
      <Header as='h2'>
        <Icon name='users'/>
        <Header.Content>PIMPOM</Header.Content>
      </Header>
        <List>
        {this.state.activities.map((acti: any)=>(<ListItem key={acti.id}>La actividad {acti.name} sera en el venue {acti.venue}</ListItem>))}
        </List>
      </div>
    );
  }
}

export default App;
