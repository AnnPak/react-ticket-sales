import {useHttp} from '../hooks/http.hook';



export const useEventServise = () => {

    const {request} = useHttp();

    const getEvent = async (id) => {
        const res = await request(`https://events2.free.beeceptor.com`);
        const newArr = res.events.filter(el => el.id == id)
        return _transformEvents(newArr[0]);
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