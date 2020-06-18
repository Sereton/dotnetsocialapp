import React, { useContext } from 'react'
import { Item,  Button, Label, Segment} from 'semantic-ui-react'
import { IActivity } from '../../../App/Models/activity'
import { observer } from 'mobx-react-lite'
import ActivityStore from '../../../App/stores/activityStore'

interface IProps {
 
    
    deleteActivity: (id: string)=> void;
    activityTarget: string;
    submitting: boolean;

}

const ActivityList: React.FC<IProps> = ({ deleteActivity,submitting, activityTarget}) => {
    const activityStore = useContext(ActivityStore)
    const {selectActivity, activities} = activityStore

    return (

        <Segment  clearing>
                 <Item.Group divided>
    

     {activities.map((activity: IActivity)=>(<Item key={activity.id}>



<Item.Content>
  <Item.Header as='a'>{activity.title}</Item.Header>
  <Item.Meta>{activity.date}</Item.Meta>
  <Item.Description>
    <div>{activity.description}</div>
    <div>{activity.city}, {activity.venue}</div>
  </Item.Description>
  <Item.Extra>
      <Button basic floated='right' content="View" color="brown" onClick={()=>(selectActivity(activity.id))}  />
      <Button basic loading={submitting&&activityTarget===activity.id} floated='right'  content="Delete" color="red" onClick={()=>(deleteActivity(activity.id))}  />
      <Label basic content= {activity.category} />
  </Item.Extra>
</Item.Content>
</Item>
                 ))}
     
                     

    
  </Item.Group>
        </Segment>
   
    )
}

export default observer(ActivityList)