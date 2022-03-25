import React from 'react';
import {BrowserRouter as Router ,Route,Switch} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Shop from './components/pages/Shop';
import Magazine from './components/pages/Magazine';
import Login from './components/pages/Login';
import Home from './components/pages/Home/Home';

const App = () => {
  return (
    <Router>
     <Navbar/>
     <Switch>
       <Route path="/" components={Home}exact>
         <Home/>
       </Route>
       <Route path="/shop" components={Shop} exact>
         <Shop/>
       </Route>
       <Route path="/Magazine" components={Magazine} exact>
         <Magazine/>
       </Route>
       <Route path="/Login" components={Login} exact>
         <Login />
       </Route>
     </Switch>
    </Router>
  )
}

export default App