import React, { useState , useEffect} from 'react';
import { Segment, Grid , TextArea, Input, Button, Dimmer, Loader, Dropdown, Form} from 'semantic-ui-react';
import {refTasks} from '../../firebase/Database';
import useGetProjects from '../../hooks/useGetProjects';

const taskStatuses = [
    {text: 'Backlog', value:'backlog', key:'taskBacklog'},
    {text: 'In Progress', value:'inprogress', key:'taskInprogress'},
    {text: 'Completed', value:'done', key:'taskDone'},
]

const AddTask = (props) => {
    const [name, setName]= useState(props.header);
    const [description, setDescription]= useState(props.description);
    const [status, setStatus] = useState(props.status);
    const [id, setId] = useState(props.id);
    const [project, setProject] = useState(props.project);
    const [saving, setSaving] = useState(false);
    const {onClose} = props ;
    const projects = useGetProjects('fdsfdsfds');
    console.log(props, projects);
    
    const addTask = () => {
        setSaving(true);
        if(id){
            refTasks.child(id).update({
                name: name,
                description: description,
                status: status,
                project: project,
                assigned: {
                    name: 'J. Enrique'
                }}
            )
            .then((resp) => {  })
            .catch((resp) => {})
            .finally(() => {
                setSaving(false);
                if (onClose)
                    onClose();
            })
        }
        else{
            refTasks.push({
                name: name,
                description: description,
                status: status,
                project: project,
                assigned: {
                    name: 'J. Enrique'
                }
            })
            .then((resp) => {  })
            .catch((resp) => {})
            .finally(() => {
                setSaving(false);
                if (onClose)
                    onClose();
            })
        }
  
    }


    if(saving === true){
        return <Dimmer active>
            <Loader size='huge' />
        </Dimmer>
    }
    return <React.Fragment>
        <Segment>
            <Grid>
                <Grid.Row>
                    <Grid.Column>
                        <Input placeholder='Enter task name' >
                            <input onChange={(el) => setName(el.target.value)} value={name} />
                        </Input>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Form>
                        <TextArea 
                            className='textarea'
                            placeholder='Enter task description' 
                            onChange={(el) => setDescription(el.target.value)} 
                            value={description}
                            rows={4}
                            >
                            
                        </TextArea>
                        </Form>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Dropdown 
                            placeholder='Status' 
                            search 
                            selection 
                            options={taskStatuses} 
                            onChange={(ev, data) => setStatus(data.value)}
                            value={status}
                            />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Dropdown 
                            placeholder='Project' 
                            search 
                            selection 
                            options={projects ? projects.map( el => {return {text: el.name, value: el.key, key: el.key}}): null} 
                            onChange={(ev, data) => setProject(data.value)}
                            value={project}
                            />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Button.Group>
                            <Button color='twitter' onClick={() => addTask()}>{id ? 'Update' : 'Save'}</Button>
                            <Button.Or></Button.Or>
                            <Button color='google plus' onClick={() => onClose()}>Cancel</Button>
                        </Button.Group>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    </React.Fragment>
}

export default AddTask;