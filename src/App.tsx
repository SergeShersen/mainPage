import './App.css';
import { Header } from './layout/header/Header';
import {Main} from "./layout/main/Main";

import {Trusted} from "./layout/trusted/Trusted";
import {Progect} from "./layout/progect/Progect";
import {Footer} from "./layout/footer/Footer";
import {Planning} from "./layout/planning/Planning";
import {Careeres} from "./layout/careeres/Careeres";
import {Skillss} from "./layout/skillss/Skillss";



function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skillss/>
            <Trusted/>
            <Progect/>
            <Planning/>
            <Careeres/>
            <Footer/>
        </div>
    );
}

export default App;
