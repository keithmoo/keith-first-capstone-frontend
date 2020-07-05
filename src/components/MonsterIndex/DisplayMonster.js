import React, {Component} from 'react'
import {Link} from 'react-router-dom'


export default class MonsterIndex extends Component {
  

    // report = (e) => {
    //   e.preventDefault();
    //   return <div className='reportText'>
    //     <form onSubmit={this.submitReport}>
    //       <fieldset>
    //         <legend>
    //           Report Reason
    //         </legend>
    //         <select>
    //           <option>Copyright</option>
    //           <option>Vulgar</option>
    //           <option>Broken Data / Clearly Unfinished</option>
    //         </select>
    //         <button>Submit Report</button>
    //       </fieldset>
    //     </form>
    //   </div>
    // }

    // submitReport = (e) => {
    //   e.preventDefault();
    //   this.setState({
    //     reportShow: false,
    //   })
    // }

    // showComment = (e) => {
    //   e.preventDefault();
    //   return <>
    //   <div className='comments'>

    //   </div>
    //   </>
    // }

render(){
  console.log(this.props.monster)
  return(
    <div className='displayWrapper'>
    <h2 id='monName'>{this.props.monster.monster_name}</h2>
          
          <ul>
            <li>
              <span className='blue'>Base Setting:</span> {this.props.monster.base_setting}
            </li>
            <li>
            <span className='blue'>Climate/Terrain:</span> {this.props.monster.climate}
            </li>
            <li>
              <span className='blue'>Frequency:</span> {this.props.monster.frequency}  
            </li>
            <li>
              <span className='blue'>Organization:</span> {this.props.monster.org}       
              
            </li>
            <li>
              <span className='blue'>Activity Cycle:</span> {this.props.monster.activity}    
              
            </li>
            <li>
              <span className='blue'>Diet:</span> {this.props.monster.diet}  
            </li>
            <li>
              <span className='blue'>Intelligence:</span> {this.props.monster.int}
            </li>
            <li>
              <span className='blue'>Treasure:</span> {this.props.monster.treasure}
            </li>
            <li>
              <span className='blue'>Alignment:</span> {this.props.monster.alignment}       
            </li>
            <li>
              <span className='blue'>No. Appearing:</span> {this.props.monster.appearing}
            </li>
            <li>
              <span className='blue'>Armor Class:</span> {this.props.monster.ac}
            </li>
            <li>
              <span className='blue'>Movement:</span> {this.props.monster.movement}
            </li>
            <li>
              <span className='blue'>Hit Dice:</span> {this.props.monster.hd}
            </li>
            <li>
              <span className='blue'>THAC0:</span> {this.props.monster.thac0}
            </li>
            <li>
              <span className='blue'>No. of Attacks:</span> {this.props.monster.attacks}
            </li>
            <li>
              <span className='blue'>Damage/Attack:</span> {this.props.monster.damage}
            </li>
            <li>
              <span className='blue'>Special Attacks:</span> {this.props.monster.specialAttacks}
            </li>
            <li>
              <span className='blue'>Special Defenses:</span> {this.props.monster.specialDefense}
            </li>
            <li>
              <span className='blue'>Magic Resistance:</span> {this.props.monster.mr}
            </li>
            <li>
              <span className='blue'>Size:</span> {this.props.monster.size}
            </li>
            <li>
              <span className='blue'>Morale:</span> {this.props.monster.morale}
            </li>
            <li>
              <span className='blue'>XP Value:</span> {this.props.monster.xp}
            </li>
            <li><p></p>
              <span className='blue'>Summary:</span> <p>{this.props.monster.summary}</p>
            </li>
            <li>
              <span className='blue'>Habitat/Society:</span> <p>{this.props.monster.habitat}</p>
            </li>
            <li>
              <span className='blue'>Ecology:</span> <p>{this.props.monster.ecology}</p>
            </li>
          </ul>
          <Link to='/'>Home</Link>
{/* <p>
  <button onSubmit={this.report}>Report</button>
  <button onSubmit={this.comment}>Show Comments</button>
</p> */}

    </div>
  )
}

  }