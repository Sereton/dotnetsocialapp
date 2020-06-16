import React from 'react'
import { Segment, Form, Button } from 'semantic-ui-react'

interface IProps{
    showEdit: (editMode: boolean)=>void;
}

export const ActiviyForm: React.FC<IProps> = ({showEdit}) => {
    return (
        <Segment clearing>
            <Form>
            <Form.Input placeholder='Title' />
            <Form.TextArea rows={2} placeholder='Description' />
            <Form.Input placeholder='Category' />
            <Form.Input type='date' placeholder='Date' />
            <Form.Input placeholder='City' />
            <Form.Input placeholder='Venue' />
            <Button content="Submit"  floated="right" color="brown" type="submit" />
            <Button onClick={()=> showEdit(false)} content="Cancel"   floated="right"  type="submit" />
            </Form>
        </Segment>
    )
}
