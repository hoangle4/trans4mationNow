import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import ContactUs from './components/ContactUs';
import Navbar from './components/Home/Navbar';
import Event from './components/Event';

const App = () => {
  return (
    <div className='container'>
      <Navbar />
      <Router>
        <Switch>
          <Route exact path={'/'} render={() => <Home />} />
          <Route exact path={'/contactus'} render={() => <ContactUs />} />
          <Route exact path={'/event'} render={() => <Event />} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
