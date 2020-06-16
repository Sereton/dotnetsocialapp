import React, {  useState, useEffect } from 'react';
import {  List, ListItem} from 'semantic-ui-react';

import axios from 'axios';
import { IActivity } from '../Models/activity';
import { NavBar } from '../../Features/Nav/NavBar';


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
     <NavBar />
       
        <List>
        {activities.map((acti: IActivity)=>(<ListItem key={acti.id}>La actividad coolito {acti.title} sera en el venue {acti.venue}</ListItem>))}
        </List>
       
      </div>
    );
  
}

export default App;
