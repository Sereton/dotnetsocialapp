import React from 'react'
import { Segment, Card, Image, Icon, ButtonGroup, Button } from 'semantic-ui-react'
import { IActivity } from '../../../App/Models/activity'

interface IProps {
    
    selectedActivity: IActivity;
    showEdit: (editMode: boolean)=> void;
    setSelectedActivity: (activity: IActivity|null)=>void;
}


export const ActivityDetails: React.FC<IProps> = ({selectedActivity, showEdit, setSelectedActivity}) => {
  
    return (
        
        <Card fluid>
<Image src={`/assets/categoryImages/${selectedActivity.category}.jpg`} wrapped ui={false} />
<Card.Content>
  <Card.Header>{selectedActivity.title}</Card.Header>
  <Card.Meta>
    <span className='date'>{selectedActivity.date}</span>
  </Card.Meta>
  <Card.Description>
    {selectedActivity.description}
  </Card.Description>
</Card.Content>
<Card.Content extra>
  <Button.Group widths={2}>
      <Button basic onClick={()=> showEdit(true)} content="Edit" color="brown"/>
      <Button basic onClick={()=>setSelectedActivity(null)} content="Cancel" color="grey"/>
  </Button.Group>
</Card.Content>
</Card>
  
);

   
}
