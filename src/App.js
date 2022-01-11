
import './App.css';
import LandingPage from './Pages/LandingPage';
import Explore from './Pages/Explore';
import {BrowserRouter, Route} from 'react-router-dom';
import Work from './Pages/Work';
import ProjectPage from './Pages/ProjectPage';
import Project from './component/Project';
import { data } from './assets/data';
import Contact from './Pages/Contact';



function App() {

  const names = [];

  data.forEach((each)=>{
    names.push("/"+each.name);
  });


  return (
    <BrowserRouter>
    <Route path="/" exact> 
      <LandingPage/>
    </Route>
    <Route path="/explore" exact>
      <Explore/>
    </Route>
    <Route path="/work" exact>
      <Work/>
    </Route>
    <Route path="/project">
      <ProjectPage/>
    </Route>
    <Route path={names} exact>
    <Project/>
    </Route>
    <Route path="/contact">
      <Contact/>
    </Route>
    </BrowserRouter>
  );
}

export default App;
