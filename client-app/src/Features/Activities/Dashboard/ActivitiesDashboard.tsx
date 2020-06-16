import React from 'react'
import {  Grid} from 'semantic-ui-react';
import { IActivity } from '../../../App/Models/activity'
import { ActivityList } from './ActivityList';

interface IProps {
    activities: IActivity[]
}

export const ActivitiesDashboard: React.FC<IProps> = ({activities}) => {
    return (
        <Grid>
            <Grid.Column width={10}>

                <ActivityList activities={activities}/>
            
        {/* <List>
        {activities.map((acti: IActivity)=>(<ListItem key={acti.id}>La actividad coolito {acti.title} sera en el venue {acti.venue}</ListItem>))}
        </List> */}
      
            </Grid.Column>
        </Grid>
    )
}
