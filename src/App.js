import React from 'react' ;
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer'
import Login from './components/login';
import Register from './components/register';

function App() {
  return (
    <Router>
    <>
      <Header />
      <Switch >
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
      </Switch>
      <Footer />
    </>
    </Router>
  );
}

export default App;
