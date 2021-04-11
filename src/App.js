import Home from './Pages/Home';
import About from './Pages/About';
import Todo from './Pages/Todo';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Submission from './Pages/Submission';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/about'>
          <About />
        </Route>
        <Route exact path='/todo'>
          <Todo />
        </Route>
        <Route exact path='/submission'>
          <Submission />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
