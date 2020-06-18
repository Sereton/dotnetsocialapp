import React, { useContext } from 'react'
import {observer} from 'mobx-react-lite'
import {  Grid} from 'semantic-ui-react';
import { IActivity } from '../../../App/Models/activity'
import ActivityList from './ActivityList';
import ActivityDetails  from '../Details/ActivityDetails';
import { ActivityForm } from '../Form/ActivityForm';
import ActivityStore from '../../../App/stores/activityStore'

interface IProps {
    activities: IActivity[];
    selectActivity: (id: string)=> void;
  
    setEditMode: (editMode: boolean)=>void;
    setSelectedActivity: (activity: IActivity|null)=>void;
    createActivity: (activity: IActivity)=> void;
    
    editActivity: (activity: IActivity)=> void;
    deleteActivity: (id: string)=> void;
    submitting: boolean;
    activityTarget: string;
    
    
}

const ActivitiesDashboard: React.FC<IProps> = ({activities, selectActivity,setEditMode, setSelectedActivity, createActivity, editActivity, deleteActivity,submitting, activityTarget}) => {
    const activityStore = useContext(ActivityStore)
    const { selectedActivity, editMode} =activityStore
    return (
        <Grid>
            
            <Grid.Column width={10}>

                <ActivityList  deleteActivity={deleteActivity} submitting={submitting} activityTarget={activityTarget}/>
            
      
            </Grid.Column>
            <Grid.Column width={6}>

             {selectedActivity && !editMode && <ActivityDetails  showEdit={setEditMode} setSelectedActivity={setSelectedActivity}/>}
             {/* eslint-disable-next-line */}
              {editMode && (<ActivityForm key={selectedActivity && selectedActivity.id || 0 } activity={selectedActivity!} showEdit={setEditMode} editActivity={editActivity} createActivity={createActivity} submitting={submitting}/>)}
        
      
            </Grid.Column>
       
        </Grid>
    )
}

export default observer(ActivitiesDashboard)