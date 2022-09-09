import BuyTicketsForm from '../buyTicketsForm/BuyTicketsForm';
import Header from '../header/Header';
import EventInformation from '../eventInformation/EventInformation'

import '../../styles/index.scss'

const App = () => {
    return(
        <main className="app">
            <div className="content">
                <Header/>
                <EventInformation/>
                <BuyTicketsForm/>
            </div>
        </main>
    )
}

export default App;