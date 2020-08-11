import React, { useState, useEffect } from 'react';
import Tasks from '../../components/tasks/Tasks';
import { Grid, Modal, Dimmer } from 'semantic-ui-react';
import useGetTasks from '../../hooks/useGetTasks';
import {refTasks} from '../../firebase/Database';
import AddTask from '../../components/task/AddTask';

const SprintViewer = () => {

    const tasks = useGetTasks('dfdsfdf');
    const statuses = [ 
        {header:'Backlog', status:'backlog' },
        {header:'In Progress', status:'inprogress' },
        {header:'Done', status:'done' },
     ] ;
    const [openAddTaskModal, setOpenAddTaskModal] = useState(false);

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
     
     /*
    if(!tasks){
        
        return (
            <Dimmer active>
                <Loader size='huge' />
            </Dimmer>
        );
    }*/
    return (
        <div>
            <Modal open={openAddTaskModal} onClose={() => setOpenAddTaskModal(false)} closeIcon>
            <Modal.Content>
                <AddTask onClose={onCloseTask} {...taskDetail} />
            </Modal.Content>
        </Modal>
            <Grid stackable>
                {statuses.map( status => {return (
                    <Grid.Column width={Math.round(16/statuses.length)}>
                        <Tasks onEdit={onEditTask} onDelete={onDeleteTask} status={status.status} header={status.header} tasks={tasks ? tasks.filter( task => task.status === status.status) : tasks} /> 
                    </Grid.Column>
                    )} 
                )}
           </Grid>
        </div>
    );

}


export default SprintViewer;