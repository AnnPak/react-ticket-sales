import BuyTicketsForm from '../components/buyTicketsForm/BuyTicketsForm'
import EventInformation from '../components/eventInformation/EventInformation'

export const setFirstStateContent = (data) => {
    return (
        <>
            <EventInformation data={data}/>
            <BuyTicketsForm data={data}/>
        </>
    )
}