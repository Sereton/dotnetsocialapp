import { observable, action} from 'mobx';
import { createContext } from 'react'
import { IActivity } from '../Models/activity';
import Agent from '../Api/agent';

class ActivityStore {
    @observable activities: IActivity[] = [];
    @observable loadingInitial: boolean = false
    @observable selectedActivity: IActivity|undefined
    @observable editMode = false

    @action loadActivities = () => {
        this.loadingInitial = true
        Agent.Activities.list()
    .then((activities)=>{
      activities.forEach(activity=>{
        activity.date = activity.date.split('.')[0];
        this.activities.push(activity);
      })
     
  }).finally(()=> this.loadingInitial=(false))
    }

    @action selectActivity =(id:string) => {
       this.selectedActivity= this.activities.find(a=>a.id===id)
       this.editMode = false
    }
    
}


export default createContext(new ActivityStore())