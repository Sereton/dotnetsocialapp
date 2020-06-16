import React, {  useState, useEffect, Fragment } from 'react';
import {  Container} from 'semantic-ui-react';

import axios from 'axios';
import { IActivity } from '../Models/activity';
import { NavBar } from '../../Features/Nav/NavBar';
import { ActivitiesDashboard } from '../../Features/Activities/Dashboard/ActivitiesDashboard';


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
      <Fragment>
     <NavBar />
     <Container style={{marginTop: '7rem'}}>
      <ActivitiesDashboard activities={activities} />
     </Container>
      </Fragment>
    );
  
}

export default App;
