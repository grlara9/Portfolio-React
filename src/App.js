import Navigation from "./navigation/Navigation";
import Aboutme from "./components/Aboutme";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {
  return (
    <Router>
    <Navigation />
    <main>
      <Switch>
      <Route path="/portfolio"> 
            <Portfolio />
          </Route>
      <Route path="/contact"> 
            <Contact />
          </Route>
      <Route path="/"> 
            <Aboutme />
          </Route>
       </Switch>
    </main>
  </Router>
  );
}

export default App;
