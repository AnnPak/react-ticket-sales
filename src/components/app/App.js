import BuyTicketsForm from '../buyTicketsForm/BuyTicketsForm';
import Header from '../header/Header';

import '../../styles/index.scss';

const App = () => {
    return(
        <main className="app">
            <div className="content">
                <Header/>
                <BuyTicketsForm/>
            </div>
        </main>
    )
}

export default App;