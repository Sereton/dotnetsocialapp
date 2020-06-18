import React, {  useState, useEffect, Fragment, useContext } from 'react';
import {  Container} from 'semantic-ui-react';


import { IActivity } from '../Models/activity';
import { NavBar } from '../../Features/Nav/NavBar';
import ActivitiesDashboard  from '../../Features/Activities/Dashboard/ActivitiesDashboard';
import Agent from '../Api/agent';
import { LoadingComponent } from './LoadingComponent';
import  ActivityStore from '../stores/activityStore';
import {observer} from 'mobx-react-lite'



interface IState{
  activities: IActivity[];
}

const App =  ()=> {

  const activityStore = useContext(ActivityStore);
  const [activities, setActivities] = useState<IActivity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<IActivity | null>(null);
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const[submitting, setSubmitting]  = useState(false);
  const [activityTarget, setActivityTarget]= useState('');

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
    setSubmitting(true);
    Agent.Activities.create(activity)
    .then(()=>{
      setActivities([...activities, activity]);
    setSelectedActivity(activity);
    setEditMode(false);
    }).then(()=>setSubmitting(false));
  };
  const handleDeleteActivity = (id:string)=>{

    setSubmitting(true);
    setActivityTarget(id);
    Agent.Activities.delete(id)
    .then(()=>{
      setActivities(activities.filter(act=>act.id !== id));
    
    setEditMode(false);
    }).then(()=>setSubmitting(false));
  };

 

  const handleEditActivity = (activity: IActivity)=>{
    setSubmitting(true);
    Agent.Activities.update(activity)
    .then(()=>{
      setActivities([...activities.filter(a=>a.id !==activity.id),activity]);
    setSelectedActivity(activity);
    setEditMode(false);
    }).then(()=>setSubmitting(false));
  };
  
  useEffect(()=>{
    activityStore.loadActivities()



    },[activityStore]);
   
  
 

  
 
  if(activityStore.loadingInitial)  return <LoadingComponent inverted ={true} content="Loading Activities ..."/>

    

    return (
      <Fragment>
     <NavBar openCreateForm={handleOpenCreateForm} />
    
     <Container style={{marginTop: '7rem'}}>
    >
      <ActivitiesDashboard activities={activityStore.activities} selectActivity ={handleSelectActivity}  setEditMode={setEditMode}  setSelectedActivity={setSelectedActivity} 
      createActivity={handleCreateActivity} editActivity={handleEditActivity} deleteActivity={handleDeleteActivity}
      submitting={submitting} activityTarget={activityTarget} />
     </Container>
      </Fragment>
    );
  
}

export default observer(App);
