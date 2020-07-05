import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import DisplayMonster from './Components/MonsterIndex/DisplayMonster'
import { BrowserRouter} from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
  <App />
    {/* <Switch>
            <Route exact path='/'><App /></Route>
            <Route path='/:id'><DisplayMonster 
           
            /></Route>
          </Switch> */}
  </BrowserRouter>,

          

  document.getElementById('root')
);
