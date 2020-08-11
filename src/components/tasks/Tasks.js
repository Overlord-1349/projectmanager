import React from 'react';
import { Segment, Label, Dimmer, Loader, Divider } from 'semantic-ui-react';
import Task from '../task/Task';

const statusesColors = {'backlog': 'red', 'inprogress': 'violet', 'done': 'green'};
    
const Tasks = (props) => {
    const {tasks, header, status} = props; 
    
    return <Segment style={{'minHeight': '100px'}}>
        {status ? <Label color={statusesColors[status] || 'blue'} size='large' active attached='top'>{header}</Label> : null}
        {tasks ? tasks.map( task => {
            return <Task
                {...props}
                key={task.key}
                id={task.key}
                userName={task.assigned ? task.assigned.name: null}
                header={task.name}
                description={task.description}
                status={task.status}
                project={task.project}
                />
        } ): <div > <Divider clearing /> <Dimmer active inverted><Loader inverted content='Loading'/></Dimmer> </div>}
    </Segment>
}

export default Tasks;