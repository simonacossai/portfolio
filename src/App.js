import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Portfolio from './components/Portfolio/Portfolio';
function App() {
  
  return (
    <div className="App">
    <NavBar/>
    <Home/>
    <About/>
    <Skills/>
    <Portfolio/>
    </div>
  );
}

export default App;
