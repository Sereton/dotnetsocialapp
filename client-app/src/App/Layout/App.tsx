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
  const [selectedActivity, setSelectedActivity] = useState<IActivity | null>(null);
  const [editMode, setEditMode] = useState(false);

  const handleSelectActivity = (id: string) => { 
  
    setSelectedActivity(activities.filter(a=> a.id===id)[0]);
    
  }

  const handleOpenCreateForm = ()=>{
    setSelectedActivity(null);
    setEditMode(true);
  }

  
  
  useEffect(()=>{

    axios.get<IActivity[]>('http://localhost:5000/api/activities')
    .then((response)=>{
      setActivities( response.data );
  })},[]);

 

  
 
  

    

    return (
      <Fragment>
     <NavBar openCreateForm={handleOpenCreateForm} />
     <Container style={{marginTop: '7rem'}}>
      <ActivitiesDashboard activities={activities} selectActivity ={handleSelectActivity} selectedActivity={selectedActivity} editMode={editMode}  setEditMode={setEditMode}  setSelectedActivity={setSelectedActivity}/>
     </Container>
      </Fragment>
    );
  
}

export default App;
