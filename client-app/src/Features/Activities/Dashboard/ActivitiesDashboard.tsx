import React from 'react'
import {  Grid} from 'semantic-ui-react';
import { IActivity } from '../../../App/Models/activity'
import { ActivityList } from './ActivityList';
import { ActivityDetails } from '../Details/ActivityDetails';
import { ActivityForm } from '../Form/ActivityForm';

interface IProps {
    activities: IActivity[];
    selectActivity: (id: string)=> void;
    selectedActivity: IActivity | null;
    editMode: boolean;
    setEditMode: (editMode: boolean)=>void;
    setSelectedActivity: (activity: IActivity|null)=>void;
    createActivity: (activity: IActivity)=> void;
    
    editActivity: (activity: IActivity)=> void;
    deleteActivity: (id: string)=> void;
    submitting: boolean;
    activityTarget: string;
    
    
}

export const ActivitiesDashboard: React.FC<IProps> = ({activities, selectActivity, selectedActivity,editMode,setEditMode, setSelectedActivity, createActivity, editActivity, deleteActivity,submitting, activityTarget}) => {
    return (
        <Grid>
            
            <Grid.Column width={10}>

                <ActivityList activities={activities} selectActivity ={selectActivity} deleteActivity={deleteActivity} submitting={submitting} activityTarget={activityTarget}/>
            
      
            </Grid.Column>
            <Grid.Column width={6}>

             {selectedActivity && !editMode && <ActivityDetails selectedActivity={selectedActivity} showEdit={setEditMode} setSelectedActivity={setSelectedActivity}/>}
             {/* eslint-disable-next-line */}
              {editMode && (<ActivityForm key={selectedActivity && selectedActivity.id || 0 } activity={selectedActivity!} showEdit={setEditMode} editActivity={editActivity} createActivity={createActivity} submitting={submitting}/>)}
        
      
            </Grid.Column>
       
        </Grid>
    )
}
