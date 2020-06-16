import React from 'react'
import {  Grid} from 'semantic-ui-react';
import { IActivity } from '../../../App/Models/activity'
import { ActivityList } from './ActivityList';
import { ActivityDetails } from '../Details/ActivityDetails';
import { ActiviyForm } from '../Form/ActiviyForm';

interface IProps {
    activities: IActivity[];
    selectActivity: (id: string)=> void;
    selectedActivity: IActivity | null;
    editMode: boolean;
    setEditMode: (editMode: boolean)=>void;
    setSelectedActivity: (activity: IActivity|null)=>void;
}

export const ActivitiesDashboard: React.FC<IProps> = ({activities, selectActivity, selectedActivity,editMode,setEditMode, setSelectedActivity}) => {
    return (
        <Grid>
            
            <Grid.Column width={10}>

                <ActivityList activities={activities} selectActivity ={selectActivity}/>
            
      
            </Grid.Column>
            <Grid.Column width={6}>

             {selectedActivity && !editMode && <ActivityDetails selectedActivity={selectedActivity} showEdit={setEditMode} setSelectedActivity={setSelectedActivity}/>}
              {editMode && <ActiviyForm  showEdit={setEditMode} />}
        
      
            </Grid.Column>
       
        </Grid>
    )
}
