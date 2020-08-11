import React from 'react';
import SprintViewer from '../../containers/sprint-viewer/SprintViewer';
import About from '../about/About';
import SignIn from '../sign-in-out/SignIn';
import {Switch, BrowserRouter, Route} from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import { Menu, Icon } from 'semantic-ui-react';
import MyTasks from '../../containers/mytasks/MyTasks';
const layout = (props) => {
    return <React.Fragment>
        <BrowserRouter>
            <header>
                <Menu borderless tabular fluid stackable >
                    <Menu.Item as='a' href='/mytasks'><Icon name='tasks' />My Tasks</Menu.Item>
                    <Menu.Item as='a' href='/sprintviewer'><Icon name='dashboard' /> Dashboards</Menu.Item>
                    <Menu.Item as='a' href='/about'><Icon name='question' /> About</Menu.Item>
                    <Menu.Item as='a' position='right' href='signin'><Icon name='sign in' />Sign in</Menu.Item>
                </Menu>
            </header>
            <br />
            <section>
                <Switch>
                    <Route path='/sprintviewer/:sprintId' component={SprintViewer} />
                    <Route exact path='/' component={MyTasks} />
                    <Route exact path='/mytasks' component={MyTasks} />
                    <Route exact path='/sprintviewer' component={SprintViewer} />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/signin' component={SignIn} />
                </Switch>
                
            </section>
        </BrowserRouter>
    </React.Fragment>
}

export  {layout as Layout };
export default layout;