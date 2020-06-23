import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import './App.css';
import Main from './containers/App';
import Details from './containers/SongDetails';
import 'antd/dist/antd.css'; 
import Store from './configureStore';
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={Store}>
      <Router>
        <Switch>
          <Route path="/details" component={Details} />
          <Route path="/" component={Main} />
        </Switch>
      </Router> 
    </Provider>
  );
}

export default App;
