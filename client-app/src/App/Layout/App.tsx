import React, {  useState, useEffect } from 'react';
import { Header, Icon, List, ListItem} from 'semantic-ui-react';

import axios from 'axios';
import { IActivity } from '../Models/activity';


interface IState{
  activities: IActivity[];
}

const App =  ()=> {


  const [activities, setActivities] = useState<IActivity[]>([]);
  
  useEffect(()=>{

    axios.get<IActivity[]>('http://localhost:5000/api/activities')
    .then((response)=>{
      setActivities( response.data );
  })},[]);

 

  
 
  

    

    return (
      <div >
      <Header as='h2'>
        <Icon name='users'/>
        <Header.Content>PIMPOM</Header.Content>
      </Header>
        <List>
        {activities.map((acti: IActivity)=>(<ListItem key={acti.id}>La actividad coolito {acti.title} sera en el venue {acti.venue}</ListItem>))}
        </List>
      </div>
    );
  
}

export default App;
