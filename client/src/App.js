import React from 'react';
import { Router } from '@reach/router';
import Main from './views/Main';
import Create from './views/Create';
import Update from './views/Update';
import Error from './views/Error';
import Detail from './views/Detail';
import './App.css'

function App() {
  return (
    <div className="App">
      <div className="tableForm">
        <Router>
          <Main path="/" />
          <Create path="/new" />
          <Update path="/edit/:id" />
          <Error path="/error" />
          <Detail path="/detail/:id" />
        </Router>
      </div>
    </div>
  );
}

export default App;
