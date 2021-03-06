import React, { useContext } from 'react'
import {observer} from 'mobx-react-lite'
import {  Grid} from 'semantic-ui-react';
import ActivityList from './ActivityList';
import ActivityDetails  from '../Details/ActivityDetails';
import ActivityForm  from '../Form/ActivityForm';
import ActivityStore from '../../../App/stores/activityStore'



const ActivitiesDashboard: React.FC = () => {
    const activityStore = useContext(ActivityStore)
    const { selectedActivity, editMode} =activityStore
    return (
        <Grid>
            
            <Grid.Column width={10}>

            <ActivityList />
            
      
            </Grid.Column>
            <Grid.Column width={6}>

          <h2>Activity Filters</h2>
        
      
            </Grid.Column>
       
        </Grid>
    )
}

export default observer(ActivitiesDashboard)