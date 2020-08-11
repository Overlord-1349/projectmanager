import React from 'react';
import {Grid, Segment, Input, Button} from 'semantic-ui-react';
import { refProjects } from '../../firebase/Database';

const AddProject = () => {
    let name;
    const saveProject = () => {
        refProjects.push({name: name})
    }
    return <React.Fragment>
        <Segment>
            <Grid>
                <Grid.Row>
                    <Grid.Column>
                        <Input  placeholder='Enter project name' >
                            <input onChange={(el) => name = el.target.value} value={name} />
                        </Input>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Button.Group>
                            <Button color='twitter' onClick={() => saveProject()}>Save</Button>
                            <Button.Or></Button.Or>
                            <Button color='google plus'>Cancel</Button>
                        </Button.Group>
                    </Grid.Column>
                </Grid.Row>
               
            </Grid>
        </Segment>
    </React.Fragment>
}

export default AddProject;