import {useState, useEffect} from 'react';

import {refTasks} from '../firebase/Database';

const useGetTasks = (userId) => {
    const [tasks, setTasks] = useState(null);
    useEffect(() => {
        refTasks.on('value', (snap) => {
            const resp = [];
            snap.forEach( obj => {
                const task = {...obj.val()};
                task.key = obj.key;
                resp.push(task); 
            }); 
            if(JSON.stringify(resp) !== JSON.stringify(tasks)){
                setTasks(resp);
            }
        } );
     });
     return tasks;
}

export default useGetTasks;