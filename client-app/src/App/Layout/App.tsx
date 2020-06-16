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
    setEditMode(false);
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    
  }

  const handleOpenCreateForm = ()=>{
    setSelectedActivity(null);
    setEditMode(true);
  }

  const handleCreateActivity = (activity: IActivity)=>{
    setActivities([...activities, activity]);
    setSelectedActivity(activity);
    setEditMode(false);
  }
  const handleDeleteActivity = (id:string)=>{
    setActivities(activities.filter(act=>act.id !== id));
    
    setEditMode(false);
  }

  const handleEditActivity = (activity: IActivity)=>{
    setActivities([...activities.filter(a=>a.id !==activity.id),activity]);
    setSelectedActivity(activity);
    setEditMode(false);
  }
  
  useEffect(()=>{
    let activities: IActivity[]=[];

    axios.get<IActivity[]>('http://localhost:5000/api/activities')
    .then((response)=>{
      response.data.forEach(activity=>{
        activity.date = activity.date.split('.')[0];
        activities.push(activity);
      })
      setActivities( activities );
  })},[]);

 

  
 
  

    

    return (
      <Fragment>
     <NavBar openCreateForm={handleOpenCreateForm} />
     <Container style={{marginTop: '7rem'}}>
      <ActivitiesDashboard activities={activities} selectActivity ={handleSelectActivity} selectedActivity={selectedActivity} editMode={editMode}  setEditMode={setEditMode}  setSelectedActivity={setSelectedActivity} 
      createActivity={handleCreateActivity} editActivity={handleEditActivity} deleteActivity={handleDeleteActivity}/>
     </Container>
      </Fragment>
    );
  
}

export default App;
