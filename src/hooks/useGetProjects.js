import {useState, useEffect} from 'react';

import {refProjects} from '../firebase/Database';

const useGetProjects = (userId) => {
    const [projects, setProjects] = useState(null);
    useEffect(() => {
        refProjects.on('value', (snap) => {
            const resp = [];
            snap.forEach( obj => {
                const task = {...obj.val()};
                task.key = obj.key;
                resp.push(task); 
            }); 
            if(JSON.stringify(resp) !== JSON.stringify(projects)){
                setProjects(resp);
            }
        } );
     });
     return projects;
}

export default useGetProjects;