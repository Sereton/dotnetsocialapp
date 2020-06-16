import React from 'react'
import {  Grid, GridRow} from 'semantic-ui-react';
import { IActivity } from '../../../App/Models/activity'
import { ActivityList } from './ActivityList';
import { ActivityDetails } from '../Details/ActivityDetails';

interface IProps {
    activities: IActivity[]
}

export const ActivitiesDashboard: React.FC<IProps> = ({activities}) => {
    return (
        <Grid>
            
            <Grid.Column width={10}>

                <ActivityList activities={activities}/>
            
      
            </Grid.Column>
            <Grid.Column width={6}>

              <ActivityDetails />
        
      
            </Grid.Column>
       
        </Grid>
    )
}
