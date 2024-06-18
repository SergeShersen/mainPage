import './App.css';
import { Header } from './layout/header/Header';
import {Main} from "./layout/main/Main";
import {Trusted} from "./layout/trusted/Trusted";
import {Progect} from "./layout/progect/Progect";
import {Footer} from "./layout/footer/Footer";
import {Planning} from "./layout/planning/Planning";
import {Skills} from "./layout/skillss/Skills";
import {FormPage} from "./layout/forms/FormPage";
import {TablePage} from "./layout/table/TablePage";
import {TabePage} from "./layout/tabsePage/TabePage";
import {SliderPage} from "./layout/sliderPage/SliderPage";



function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <TabePage/>
            <Skills/>
            <Trusted/>
            <Progect/>
            <SliderPage/>
            <Planning/>
            <FormPage/>
            <TablePage/>

            <Footer/>
        </div>
    );
}

export default App;
