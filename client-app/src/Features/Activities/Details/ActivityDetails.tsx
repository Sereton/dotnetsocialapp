import React, {useContext} from 'react'
import {  Card, Image,  Button } from 'semantic-ui-react'
import { IActivity } from '../../../App/Models/activity'
import ActivityStore from '../../../App/stores/activityStore'
import { observer } from 'mobx-react-lite'



interface IProps {
    
    
    showEdit: (editMode: boolean)=> void;
    setSelectedActivity: (activity: IActivity|null)=>void;
}


const ActivityDetails: React.FC<IProps> = ({ showEdit, setSelectedActivity}) => {
  const activityStore = useContext(ActivityStore)
    const { selectedActivity} =activityStore
  
    return (
        
        <Card fluid>
<Image src={`/assets/categoryImages/${selectedActivity!.category}.jpg`} wrapped ui={false} />
<Card.Content>
  <Card.Header>{selectedActivity!.title}</Card.Header>
  <Card.Meta>
    <span className='date'>{selectedActivity!.date}</span>
  </Card.Meta>
  <Card.Description>
    {selectedActivity!.description}
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

export default observer(ActivityDetails)