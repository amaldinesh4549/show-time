import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import MainNavigation from "./components/shared/Navigation/MainNavigation";
import Movies from "./pages/Movies";
import AddMovie from "./pages/AddMovie";
import UpdateMovie from "./pages/UpdateMovie";
import LoginPage from "./pages/LoginPage"

import './App.css';

const App = () => {
  return (
    <Router>
      <main>
        <Switch>
        <Route path="/" exact>
            <LoginPage />
          </Route>
          <Route path="/movies" exact>
            <Movies />
          </Route>
          <Route path="/addmovie" exact>
            <AddMovie />
          </Route>
          <Route path="/:id/updatemovie" exact>
            <UpdateMovie />
          </Route>
        </Switch>
      </main>
    </Router>

  );
}

export default App;
