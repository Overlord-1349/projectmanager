import firebase from './Init';

const refDB = firebase.database().ref();
const refTasks = refDB.child('tasks');
const refSprints = refDB.child('sprints');
const refProjects = refDB.child('projects');


export {refTasks};
export {refSprints};
export {refProjects};
export default refDB;