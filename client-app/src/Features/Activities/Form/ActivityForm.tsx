import React, { useState} from 'react'
import { Segment, Form, Button } from 'semantic-ui-react'
import { IActivity } from '../../../App/Models/activity'
import {v4 as uuid} from 'uuid';

interface IProps{
    showEdit: (editMode: boolean)=>void;
    activity: IActivity;
    createActivity: (activity: IActivity)=> void;
    
    editActivity: (activity: IActivity)=> void;
}

// just renaming activity with the activity: newName
    
export const ActivityForm: React.FC<IProps> = ({showEdit,activity: initializeFormState, createActivity, editActivity}) => { 
    const initializeForm =() => {
       return initializeFormState ? initializeFormState : {id:'', title:'',category:'',description:'',date:'',city:'',venue:''};
    }

    const [activity, setActivity] = useState<IActivity>(initializeForm());

    const handleSubmit = ()=>{
        if(activity.id.length===0){
            let newActivity = {...activity, id: uuid()};
            createActivity(newActivity);
            console.log(newActivity);
        }
        else{
            editActivity(activity);
        }
    }

    const formInputsHandler = (event: React.FormEvent<HTMLInputElement>|React.FormEvent<HTMLTextAreaElement>)=> {
       
        setActivity({...activity , [event.currentTarget.name]: event.currentTarget.value});
    }

    return (
        <Segment clearing>
            <Form>
            <Form.Input name="title" placeholder={"Title"} onChange={formInputsHandler} value={activity.title}/>
            <Form.TextArea rows={2} name="description" placeholder='Description' value={activity.description} onChange={formInputsHandler} />
            <Form.Input placeholder='Category' name="category" value={activity.category} onChange={formInputsHandler} />
            <Form.Input type='date' name="date" placeholder='Date' value={activity.date} onChange={formInputsHandler}/>
            <Form.Input placeholder='City' name="city" value={activity.city} onChange={formInputsHandler} />
            <Form.Input placeholder='Venue' name="venue" value={activity.venue} onChange={formInputsHandler} />
            <Button content="Submit" onClick={handleSubmit}  floated="right" color="brown" type="submit"  onChange={formInputsHandler}/>
            <Button onClick={()=> showEdit(false)} content="Cancel"   floated="right"  type="submit" />
            </Form>
        </Segment>
    )
}
