import React, { Component } from 'react';
// import { Route, Switch } from 'react-router-dom';
import './App.css';
// import Nav from "./Components/Nav/Nav"
// import HomePage from './Components/HomePage/HomePage';
// import MonsterIndex from './Components/MonsterIndex/MonsterIndex';
// import TemplatePage from './Components/TemplatePage/TemplatePage';
// import Create from './Components/Create/Create';
// import NotFoundPage from './Components/NotFoundPage/NotFoundPage';
import {Switch, Route} from 'react-router-dom'
import DisplayMonster from './Components/MonsterIndex/DisplayMonster'
import View from './View'
import DataContext from './Components/Context'
import apiService from './services/monster-index-api-service'


export default class App extends Component {
  constructor(props){
    super(props)
      this.state = {
        monsters: []
            
      }
    }
  // state = { hasError: false }

  // static getDerivedStateFromError(error) {
  //   console.error(error)
  //   return { hasError: true }
  // };

    ///initial api calls
    // componentDidMount() {
    //   fetch("http://localhost:8080/folders")
    //     .then((response) => response.json())
    //     .then((data) => {
    //       this.setState({
    //         folders: data,
    //       });
    //     });
  
    //   fetch("http://localhost:8080/notes")
    //     .then((response) => response.json())
    //     .then((data) => {
    //       console.log(data);
    //       this.setState({
    //         notes: data,
    //       });
    //     });
    // }

    /* <Switch>
          <Route
            exact
            path={'/'}
            component={HomePage}
          />
          <Route
           path={'/index'}
           component={MonsterIndex}
           />
           <Route 
           path={'/beforeCreate'}
           component={TemplatePage}
           />
           <Route 
           path={'/create'}
           component={Create}
           />
           <Route 
           component={NotFoundPage}
           />
           </Switch> */

           getMonsters = () =>  {
            apiService.monsterAPI() 
            .then(monsters => {
              
              this.setState({monsters})
            })
            .catch(console.error)
            }
            

  
  render() {
    console.log(this.state.monsters)

      const contextValue = {
        monsters: this.state.monsters,
        getMonsters: this.getMonsters
      }

    return (
      <div className='view'>
        <DataContext.Provider value={contextValue}>
         <Switch>
            <Route exact path='/'><View /></Route>
            <Route path='/:id' render={routeProps => {
             
              
              const foundMonster = this.state.monsters.find(m => m.id.toString() === routeProps.match.params.id)
              console.log(foundMonster)
              return <DisplayMonster monster={foundMonster} />
            }}></Route>
         </Switch>
         </DataContext.Provider>
           
        </div>
      
    )
  }
}



