import React from 'react';
import { List } from 'semantic-ui-react';

const modules = [
    {name: 'react-router-dom', description: 'Used to route calls', website: null},
    {name: 'semanti-ui-react', description: 'Wrapper for semantic-ui', website: null},
    {name: 'semanti-ui', description: 'CSS framework', website: null},
];

const About = (props) => {
    return <React.Fragment>
        <List>
            {modules.map( module => {
                return (
                    <List.Item>
                        <List.Content>
                            <List.Header>{module.name}</List.Header>
                            <List.Description>{module.description}</List.Description>
                        </List.Content>
                    </List.Item>
                );
            })}
        </List>
    </React.Fragment>
}

export default About;