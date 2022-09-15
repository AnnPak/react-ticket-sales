import {useHttp} from '../hooks/http.hook';



export const useEventServise = () => {

    const {request} = useHttp();

    const getEvent = async (id) => {
        let res = await request(`https://rupor.biz/api/event_info/${id}`);

        return _transformEvents(res);
    }

    const _transformEvents = (event) => {
        return {
            id: event.id,
            title: event.title,
            description: event.description ? `${event.description.slice(0, 210)}...` : 'There is no description for this character',
        }
    }

    return {
        getEvent
    }
}