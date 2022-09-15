import { useParams } from 'react-router-dom';
import {useState, useEffect} from 'react';

import { useEventServise } from '../../services/EventService';
import { setFirstStateContent } from '../../utils/setFirstStateContent';

export const FirstStep = () => {
    const { elemId } = useParams();

    const [data, setData] = useState(null);

    const { getEvent } = useEventServise();

    useEffect(() => {
        updateEvent()
    }, [elemId])

    const updateEvent = () => {
        getEvent(elemId).then(onElementLoad);
    }

    const onElementLoad = (data) => {
        setData(data);
    }


    return(
        <>
            {setFirstStateContent(data)}
        </>
        
    )
}