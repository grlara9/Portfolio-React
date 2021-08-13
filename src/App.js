import Navigation from "./navigation/Navigation";
import Aboutme from "./components/Aboutme";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {
  return (
    <Router>
    <Navigation />
    <main>
      <Switch>
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
