import React, { Component } from 'react';
import apiService from '../../services/monster-index-api-service';
import {Link} from 'react-router-dom'
// import DisplayMonster from './DisplayMonster'
import DataContext from '../../Components/Context'


export default class MonsterIndex extends Component {
  static contextType = DataContext;



//   callAPI() {
//     return fetch("http://localhost:8080/api/monsters")
//         .then(res => res.json())

// }

// actually should just use the API service import


//  showSearch = () => {
//    if (this.state.showSearch === true) {
//      return <>
//      <div className='searchBar'>
//        <form onChange={this.filterSearch}>
//          <fieldset>
//            <legend>Search</legend>
//            <label>Search</label>
//            <input type='text' />
//          </fieldset>
//        </form>
//      </div>
//      </>
//    }
//  }


//  searchSelect = () => {
//    if (this.state.selectSearch === true) {
//      return <>
//      <div className='searchSelect'>
//        <form onChange={this.showSearch}>
//          <fieldset>
//            <legend>How Would You Like To Search?</legend>
//            <select defaultValue='Choose One'>
//              <option>Choose One</option>
//              <option>Base Setting</option>
//              <option>Climate/Terrain</option>
//              <option>Alignment</option>
//              <option>Int</option>
//              <option>Author</option>
//              <option>Everything</option>
//            </select>
//          </fieldset>
//        </form>
//      </div>
//      </>
//    }
//  }


  componentDidMount() {
    this.context.getMonsters()
    
    // apiService.monsterAPI() 
    // .then(monsters => {
    //   console.log('made it to first THEN')
    //   this.setState({monsters})
    // })
    // .catch(console.error)
    }
    
    

   
    // sorterAlpha = () => {
    //   const sortedAlpha = this.state.monsters.monsterName.sort()
    //   this.setState({monsters: sortedAlpha})
    // }

    // sorterHD = () => {
    //   const sortedHD = this.state.monsters.hd.sort()
    //   this.setState({monsters: sortedHD})
    // }

    // sorterDate = () => {
    //   const sortedDate = this.state.id.sort()
    //   this.setState({monsters: sortedDate})
    // }

    // handleSort = (e) => {
    //   const selected = e.target.select.value
    //   if (selected === 'Alphabetical'){
    //     this.sorterAlpha()
    //   }
    //   if (selected === 'Newest') {
    //     this.sorterDate()
    //   }
    //   if (selected === 'Hit Die') {
    //     this.sorterHD()
    //   }
    // }

    // filterSearch = (e) => {
    //   let searchTerm = this.target.value;
    //   this.setState({currentSearch: searchTerm})
    // }

    // sortAlpha = () => {
    // const monsterArray = this.context.monsters
    // console.log(monsterArray)
    // const sortedArray = monsterArray.monster_name.sort()
    // return <ul>
    //       {sortedArray.map((a, index) => (
    //         <li key={index}><Link to={"/"+a.id}>{a.monster_name}</Link></li>
    //       ))}
          
    //   </ul>
    
      


    // }

    sortId = () => {
      const monsterArray = this.context.monsters
      return <ul>
      {monsterArray.map((a) => (
        <li key={a.id}><Link to={"/"+a.id}>{a.monster_name}</Link></li>
      ))}
      
  </ul>
    }

    // showSortAlpha= () => {
    //   if (this.state.showSortAplpha === true) {
    //     return this.sortAlpha()
    //   }
    // }




    // <section className='sort'>
    //     <h2>Sort By:</h2>
    //       <select defaultValue ='select'>
    //         <option>Select</option>
    //         <option>Alphabetical</option>
    //         <option>Newest</option>
    //         <option>Hit Die</option>
    //         <option>Search By Name</option>
    //       </select>
          
    //   </section>



  render() {
    console.log(this.context.monsters)

    // const searchedMonsters = this.state.monsters.filter(data => {
    //   let searchInput = this.state.currentSearch.toLowerCase()
    //   if(data.monster_name.toLowerCase().includes(searchInput) || 
    //   data.base_setting.toLowerCase().includes(searchInput)){
    //     return data
    //   }
    // }

    //  const name = this.props.match.params.monster_name;

    // put in better sorting and categories

    //select is on a OnChange which runs the sort function and rerenders

  return(
    <div className='monsterIndexWrapper'>
      <h2>Here's the stuff to browse</h2>
      <section className='indexList'>
      
      {this.sortId()}
      {/* {this.showSortAlpha()} */}
      
      {/* <ul>
          {this.context.monsters.map((a) => (
            <li key={a.id}><Link to={"/"+a.id}>{a.monster_name}</Link></li>
          ))}
          
      </ul> */}
     
        

        
        
      </section>
    </div>
  )
}
}