import React from 'react';
import Navbar from './components/navbar'
import Posts from './screens/posts/posts'
import Post from './screens/posts/post'
import Login from './screens/login/login'
import Register from './screens/login/register'
import {
  BrowserRouter  as Router,
  Switch,
  Route,
} from 'react-router-dom'

function App() {
  return (
    <>
     <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Posts />
        </Route>
        <Route exact path="/login">
            <Login />
        </Route>
        <Route exact path="/register">
           <Register />
        </Route>
        <Route exact path="/:id">
          <Post />
        </Route>
      </Switch>
      </Router>
    </>
  );
}

export default App;
