import Navigation from "./navigation/Navigation";
import Aboutme from "./components/Aboutme";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {
  return (
    <Router>
    <Navigation />
    <main>
      <Switch>
      <Route path="/"> 
            <Aboutme />
          </Route>
       </Switch>
    </main>
  </Router>
  );
}

export default App;
