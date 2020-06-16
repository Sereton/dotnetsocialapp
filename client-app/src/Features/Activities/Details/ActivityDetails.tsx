import React from 'react'
import { Segment, Card, Image, Icon, ButtonGroup, Button } from 'semantic-ui-react'

export const ActivityDetails = () => {
    return (
        
            <Card fluid>
    <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
    <Card.Content>
      <Card.Header>Title</Card.Header>
      <Card.Meta>
        <span className='date'>Date</span>
      </Card.Meta>
      <Card.Description>
        Description
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <Button.Group widths={2}>
          <Button basic content="Edit" color="brown"/>
          <Button basic content="Cancel" color="grey"/>
      </Button.Group>
    </Card.Content>
  </Card>
      
    )
}
