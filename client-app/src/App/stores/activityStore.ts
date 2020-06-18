import { observable, action, computed} from 'mobx';
import { createContext } from 'react'
import { IActivity } from '../Models/activity';
import Agent from '../Api/agent';

class ActivityStore {
    // Observable map
    @observable activitiesRegistry = new Map();
    @observable activities: IActivity[] = [];
    @observable loadingInitial: boolean = false
    @observable selectedActivity: IActivity|undefined
    @observable editMode = false
    @observable submitting = false
    @observable activityTarget =''

    @computed get activitiesByDate(){
        return Array.from(this.activitiesRegistry.values()).sort((a,b)=>Date.parse(a.date)-Date.parse(b.date));
    }

    @action loadActivities = async () => {
        this.loadingInitial = true
    
        try{
            const activities = await Agent.Activities.list()
            activities.forEach(activity=>{
            activity.date = activity.date.split('.')[0];
            this.activitiesRegistry.set(activity.id,activity)});
            this.loadingInitial=(false)
            }
        catch(error){
            console.log(error);
            this.loadingInitial=(false)
        }
    }

   
    @action createActivity = async(activity: IActivity)=>{
        this.submitting =true;
        try {
           await  Agent.Activities.create(activity);
           this.activitiesRegistry.set(activity.id, activity);
           this.selectedActivity = activity;
           this.editMode = false;

           this.submitting =false;

        }
        catch(error){
            console.log(error);
            this.submitting=false
        }
    }

    @action openCreateForm = ()=>{
        this.editMode =true;
        this.selectedActivity = undefined;
    }


    @action selectActivity =(id:string) => {
       this.selectedActivity= this.activitiesRegistry.get(id)
       this.editMode = false
       document.body.scrollTop = document.documentElement.scrollTop = 0;
    }

    @action editActivity = async(activity: IActivity)=> {
        this.submitting=true
        try{
            await Agent.Activities.update(activity)
            this.activitiesRegistry.set(activity.id, activity)
            this.selectedActivity= activity
            this.editMode = false
            document.body.scrollTop = document.documentElement.scrollTop = 0;
            this.submitting=false
        }
        catch(error){
            console.log(error)
            this.submitting= false
        }

        
    }
    @action deleteActivity = async(id: string)=>{
        this.submitting=true
        try{
            await Agent.Activities.delete(id)
            this.activitiesRegistry.delete(id)
            this.activityTarget = id
            this.selectedActivity= undefined
            this.editMode = false
            document.body.scrollTop = document.documentElement.scrollTop = 0;
            this.submitting=false
        }
        catch(error){
            console.log(error)
            this.submitting= false
        }

    }
    @action showEdit =(value: boolean)=> this.editMode=value;
    @action setSelectedActivity =(value: IActivity|undefined)=> this.selectedActivity=value;

}


export default createContext(new ActivityStore())