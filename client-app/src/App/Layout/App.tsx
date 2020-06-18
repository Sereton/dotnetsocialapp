import React, {  useEffect, Fragment, useContext } from 'react';
import {  Container} from 'semantic-ui-react';
import NavBar from '../../Features/Nav/NavBar';
import ActivitiesDashboard  from '../../Features/Activities/Dashboard/ActivitiesDashboard';
import { LoadingComponent } from './LoadingComponent';
import  ActivityStore from '../stores/activityStore';
import {observer} from 'mobx-react-lite'
import {Route} from 'react-router-dom'
import { HomePage } from '../../Features/Home/HomePage';
import ActivityForm from '../../Features/Activities/Form/ActivityForm';

const App =  ()=> {

  const activityStore = useContext(ActivityStore);
 
  useEffect(()=>{
    activityStore.loadActivities()
    },[activityStore]);
   
  
  if(activityStore.loadingInitial)  return <LoadingComponent inverted ={true} content="Loading Activities ..."/>

  return (
    <Fragment>
     <NavBar  />

  
    
    <Container style={{marginTop: '7rem'}}>
    <Route exact path='/' component={HomePage}/>
    <Route path='/activities' component={ActivitiesDashboard}/>
    <Route path='/createActivity' component={ActivityForm}/>
    
    </Container>
    </Fragment>
    );
  
}

export default observer(App);
