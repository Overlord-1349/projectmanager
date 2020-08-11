import React from 'react';
import { Segment, Grid, List, Icon, Label, Popup, Divider } from 'semantic-ui-react';
import useGetProjects from '../../hooks/useGetProjects';
const taskStatus = {
    backlog: 'Backlog',
    inprogress: 'In Progress',
    done: 'Completed'
};

const Task = (props) => {
    const {userName, header, description, onEdit, onDelete, id, status, project} = props;
    const projects = useGetProjects('dfds');
    const labelsHash = [];
    if(status)
        labelsHash.push(taskStatus[status]);
    if(project){
        let displayProj = projects 
            ? projects
                .filter( el =>  el.key === project)
                .map( el => el.name )
            : [];
        displayProj = displayProj.length > 0 ? displayProj[0] : '';
        labelsHash.push(displayProj);
    }
    const editButton = <Grid.Row>
        <Grid.Column >
            <Label color='blue' as='a' image onClick={() => onEdit(id, header, description, userName, status, project) }><Icon name='edit' /> Edit</Label>
            <Label color='red' as='a' image onClick={() => onDelete(id)} ><Icon name='delete'/> Delete</Label>
        </Grid.Column>
    </Grid.Row>
    return (
        <Segment raised secondary>
            <Grid >
                <Grid.Row>
                    {userName ? <Grid.Column width={2}>
                        <Popup
                            trigger={<Icon name='user circle' size='big' />}
                            header={userName}
                        />
                    </Grid.Column> : null}
                    
                    <Grid.Column width={14}>
                        <List>
                            <List.Item>
                                <List.Content>
                                    <List.Header>{header}</List.Header>
                                    <List.Description>{description}</List.Description>
                                </List.Content>
                            </List.Item>
                        </List>
                    </Grid.Column>
                </Grid.Row>
                {labelsHash.length > 0 ?
                    <Grid.Row>
                        <Grid.Column>
                            <List horizontal>
                                {labelsHash.map(el => {
                                    return <List.Item>
                                        <List.Content>
                                            <List.Header>
                                                <Label color='purple'>{el}</Label>
                                            </List.Header>
                                        </List.Content>
                                    </List.Item>
                                })}
                            </List>

                        </Grid.Column>
                    </Grid.Row>
                : null }
                {onEdit ? editButton : null}
            </Grid>
        </Segment>
    )
}

export default Task;