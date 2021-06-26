import React, {useEffect} from 'react' ;
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer'
import Login from './components/login';
import Register from './components/register';
import Home from "./components/home";
import Main from './components/main';
import { useDispatch, useSelector } from 'react-redux';
import { isUserLoggedIn, getAllRequest } from "./actions";

function App() {

  const dispatch = useDispatch();
const auth = useSelector(state => state.login);

useEffect(() => {
  if(!auth.authenticate){
  dispatch(isUserLoggedIn());
}
 dispatch(getAllRequest());
}, []);
  return (
    <Router>
    <>
      <Header />
      <Switch >
      <Route exact path ="/dashboard">
          <Main/>
        </Route>
        <Route exact path ="/home">
          <Home/>
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
      </Switch>
      {/* <Footer /> */}
    </>
    </Router>
  );
}

export default App;
