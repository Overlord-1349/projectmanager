import React, { useState } from 'react';
import { Modal, Grid, Button, Icon, Segment, Label, } from 'semantic-ui-react';
import AddTask from '../../components/task/AddTask';
import useGetTasks from '../../hooks/useGetTasks';
import Tasks from '../../components/tasks/Tasks';
import AddProject from '../../components/project/AddProject';
import useGetProjects from '../../hooks/useGetProjects';
import useGetSprints from '../../hooks/useGetSprints';

import {refTasks, refProjects} from '../../firebase/Database';

const MyTasks  = () => {
    const tasks = useGetTasks('fdsfdsds');
    const projects = useGetProjects('fdsfdsfds');
    const sprints = useGetSprints('ggdfgfdg');
    const [openAddTaskModal, setOpenAddTaskModal] = useState(false);
    const [openAddProjectModal, setOpenAddProjectModal] = useState(false);

    const [taskDetail, setTaskDetail] = useState({id: null, header: null, description: null, userId: null, status: null, project:null})
    const onEditTask = (id, header, description, userName, status, project) => {
        setOpenAddTaskModal(true);
        setTaskDetail({id: id, header: header, description: description, userId: userName, status: status, project:project});
    }

    const onDeleteTask = id => {
        console.log('deleting', id);
        //useDeleteTask(id);
        refTasks.child(id).remove();
    }

    const onCloseTask = () => {
        setOpenAddTaskModal(false);
        setTaskDetail({id: null, header: null, description: null, userId: null, status: null});
    }
    
    const onDeleteProject = id => {
        console.log('deleting project', id);
        refProjects.child(id).remove();

    }

    return <React.Fragment>
        <Modal open={openAddTaskModal} onClose={() => setOpenAddTaskModal(false)} closeIcon>
            <Modal.Content>
                <AddTask onClose={onCloseTask} {...taskDetail} />
            </Modal.Content>
        </Modal>
        <Modal open={openAddProjectModal} onClose={() => setOpenAddProjectModal(false)} closeIcon>
            <Modal.Content>
                <AddProject />
            </Modal.Content>
        </Modal>
        <Grid stackable relaxed>
            <Grid.Row>
                <Grid.Column>
                    <Button animated icon active color='teal' labelPosition='left' onClick={() => setOpenAddTaskModal(true)}>
                        Task
                        <Icon name='plus'></Icon>
                    </Button>
                    <Button icon active color='olive' labelPosition='left' onClick={() => setOpenAddProjectModal(true)}>
                        Project
                        <Icon name='plus'></Icon>
                    </Button>
                    <Button icon active color='purple' labelPosition='left' onClick={() => setOpenAddTaskModal(true)}>
                        Sprint
                        <Icon name='plus'></Icon>
                    </Button>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column width={8}>
                    <Label color='teal' size='large' attached='top' style={{'textAlign': 'center'}}>My Tasks</Label>
                    <br /><br />
                    <Tasks onEdit={onEditTask} onDelete={onDeleteTask} tasks={tasks ? tasks.filter( task => task.status === 'inprogress') : tasks} /> 
                    {tasks && tasks.filter( task => task.status === 'inprogress').length === 0 ? <Segment textAlign='center'><p><Label color='green' icon basic size='massive'><Icon name='smile outline'  />You have no tasks in progress</Label> </p></Segment> : null}
                </Grid.Column>
                <Grid.Column width={8}>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column>
                                <Label color='olive' size='large' attached='top' style={{'textAlign': 'center'}}>Projects</Label>
                                <br /><br />
                                <Tasks onEdit={[]} onDelete={onDeleteProject} tasks={projects} /> 
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                <Label color='purple' size='large' attached='top' style={{'textAlign': 'center'}}>Sprints</Label>
                                <br /><br />
                                <Tasks tasks={sprints} /> 
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </React.Fragment>
}

export default MyTasks;