import './App.css';
import Header from "./Header/Header";
import Main from "./Main/Main";
import Skills from "./Skills/Skills";
import MyProj from "./MyProjects/MyProj";
import Contacts from "./Contacts/Contacts";

function App() {
    return (
        <div className="App">

            <Header/>
            <Main/>
            <Skills/>
            <MyProj/>
            <Contacts/>


        </div>
    );
}

export default App;
