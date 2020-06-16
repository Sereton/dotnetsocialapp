import React, {  useState, useEffect, Fragment } from 'react';
import {  Container} from 'semantic-ui-react';


import { IActivity } from '../Models/activity';
import { NavBar } from '../../Features/Nav/NavBar';
import { ActivitiesDashboard } from '../../Features/Activities/Dashboard/ActivitiesDashboard';
import Agent from '../Api/agent';



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
    Agent.Activities.create(activity)
    .then(()=>{
      setActivities([...activities, activity]);
    setSelectedActivity(activity);
    setEditMode(false);
    });
  };
  const handleDeleteActivity = (id:string)=>{
    Agent.Activities.delete(id)
    .then(()=>{
      setActivities(activities.filter(act=>act.id !== id));
    
    setEditMode(false);
    });
  };

  const handleEditActivity = (activity: IActivity)=>{
    Agent.Activities.update(activity)
    .then(()=>{
      setActivities([...activities.filter(a=>a.id !==activity.id),activity]);
    setSelectedActivity(activity);
    setEditMode(false);
    });
  };
  
  useEffect(()=>{
    let activities: IActivity[]=[];



    Agent.Activities.list()
    .then((response)=>{
      response.forEach(activity=>{
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
