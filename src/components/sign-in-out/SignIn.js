import React from 'react';
import { Segment, Grid, Input, Icon, Modal, Button } from 'semantic-ui-react';

const SignIn = (props) => {
    const {history} = props;
    return <React.Fragment>
        <Modal open size='mini' closeIcon closeOnEscape closeOnDimmerClick onClose={() => history ? history.goBack() : window.location.href='/'}>
            <Modal.Content>
                <Segment >
                    <Grid >
                        <Grid.Row centered textAlign='center'>
                            <Grid.Column >
                                <Input icon iconPosition='left' placeholder='Enter your email id'>
                                    <input type='email' onFocus={true} />
                                    <Icon name='mail' />
                                </Input>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column >
                                <Input icon iconPosition='left' placeholder='Enter your password'>
                                    <input type='password' />
                                    <Icon name='lock' />
                                </Input>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                <Button.Group>
                                    <Button positive>Sign in</Button>
                                    <Button.Or />
                                    <Button color='blue'>Sign up</Button>
                                </Button.Group>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
            </Modal.Content>
        </Modal>
    </React.Fragment>
}

export default SignIn;