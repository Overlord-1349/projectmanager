import {useState, useEffect} from 'react';

import {refSprints} from '../firebase/Database';

const useGetSprints = (userId) => {
    const [sprints, setSprints] = useState(null);
    useEffect(() => {
        refSprints.on('value', (snap) => {
            const resp = [];
            snap.forEach( obj => {
                const sprint = {...obj.val()};
                sprint.key = obj.key;
                resp.push(sprint); 
            }); 
            if(JSON.stringify(resp) !== JSON.stringify(sprints)){
                setSprints(resp);
            }
        } );
     });
     return sprints;
}

export default useGetSprints;