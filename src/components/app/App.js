import { FirstStep } from "../pages/FirstStep";
import { SecondStep } from "../pages/SecondStep";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "../header/Header";

import '../../styles/index.scss';

const App = () => {
    return(
        <Router>
            <main className="app">
                <div className="content">
                    <Header/>
                    <Routes>
                        <Route path="/event/:elemId" element={<FirstStep/>}/>
                        <Route path="/userinf/:elemId" element={<SecondStep/>}/>

                    </Routes>
                   
                </div>
            </main>
        </Router>
    )
}

export default App;