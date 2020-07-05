import React, { Component } from 'react';


export default class Create extends Component {
  constructor(props){
    super(props)
      this.state = {
        
        showBefore: true

      }
    }



    handleSubmit = (e) => {
      e.preventDefault()
      const base_setting = e.target.baseSetting.value
      const monster_name = e.target.monsterName.value
      const climate = e.target.climate.value
      const frequency = e.target.frequency.value
      const organization = e.target.org.value
      const activity = e.target.activity.value
      const diet = e.target.diet.value
      const intelligence = e.target.int.value
      const treasure = e.target.treasure.value
      const alignment = e.target.alignment.value
      const appearing = e.target.appearing.value
      const ac = e.target.ac.value
      const movement = e.target.movement.value
      const hd = e.target.hd.value
      const thac0 = e.target.thac0.value
      const attacks = e.target.attacks.value
      const damage = e.target.damage.value
      const special_attack = e.target.sAttack.value
      const special_defence = e.target.sdefense.value
      const magic_resistance = e.target.mr.value
      const size = e.target.size.value
      const morale = e.target.morale.value
      const xp = e.target.xp.value
      const summary = e.target.summary.value
      const habitat = e.target.habitat.value
      const ecology = e.target.ecology.value
      const generatedMonster = { base_setting, monster_name, climate, frequency, organization, activity, diet, intelligence, 
      treasure, alignment, appearing, ac, movement, hd, thac0, attacks, damage, special_attack, special_defence, magic_resistance, size, 
    morale, xp, summary, habitat, ecology}
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(
          generatedMonster
        )
      }
      fetch('http://localhost:8000/api', requestOptions)
        .then(response => response.json())
        
  
        .catch(console.error)
    }




  hideToggle = () => {
    this.setState({showBefore: !this.state.showBefore})
  }

  noticeShow = () => {
    if (this.state.showBefore === true){
      return <>
      <div>
          <h2>Before making a new entry...</h2>
          <p>
              You should read the template and tips first!
          </p>
          
          <button onClick={this.hideToggle}>Yeah, yeah, I got it</button>
      </div>
      </>
    }
    if (this.state.showBefore === false) {
      return <>
      <button onClick={this.hideToggle}>Wait, bring that notice back!</button>
      </>
    }
  }



  

  showHide = () => {
    
    return <>
        <div className='createWrapper'>
        {this.noticeShow()}
    
    
    <form id='creationForm' onSubmit={this.handleSubmit}>
      <fieldset>
        <legend>This is the Legend</legend>
          <ul>
            <li>
              <label htmlFor="">Base Setting</label>       
              <input type='text' id="baseSetting" name="baseSetting" />
            </li>
            <li>
              <label htmlFor="">Monster Name/Species*</label>       
              <input type='text' id="monsterName" name="monsterName" required />
            </li>
            <li>
              <label htmlFor="">Climate/Terrain</label>       
              <input type='text' id="climate" name="climate" />
            </li>
            <li>
              <label htmlFor="">Frequency</label>       
              <input type='text' id="frequency" name="frequency" />
            </li>
            <li>
              <label htmlFor="">Organization*</label>       
              <input type='text' id="org" name="org" required />
            </li>
            <li>
              <label htmlFor="">Activity Cycle</label>       
              <input type='text' id="activity" name="activity" />
            </li>
            <li>
              <label htmlFor="">Diet*</label>       
              <input type='text' id="diet" name="diet" required />
            </li>
            <li>
              <label htmlFor="">Intelligence*</label>       
              <input type='text' id="int" name="int" required />
            </li>
            <li>
              <label htmlFor="">Treasure</label>       
              <input type='text' id="treasure" name="treasure" />
            </li>
            <li>
              <label htmlFor="">Alignment</label>       
              <input type='text' id="alignment" name="alignment" />
            </li>
            <li>
              <label htmlFor="">No. Appearing</label>       
              <input type='text' id="appearing" name="appearing" />
            </li>
            <li>
              <label htmlFor="">Armor Class*</label>       
              <input type='text' id="ac" name="ac" required />
            </li>
            <li>
              <label htmlFor="">Movement*</label>       
              <input type='text' id="movement" name="movement" required />
            </li>
            <li>
              <label htmlFor="">Hit Dice*</label>       
              <input type='text' id="hd" name="hd" required />
            </li>
            <li>
              <label htmlFor="">THAC0*</label>       
              <input type='text' id="thac0" name="thac0" required />
            </li>
            <li>
              <label htmlFor="">No. of Attacks*</label>       
              <input type='text' id="attacks" name="attacks" required />
            </li>
            <li>
              <label htmlFor="">Damage/Attack*</label>       
              <input type='text' id="damage" name="damage" required />
            </li>
            <li>
              <label htmlFor="">Special Attacks</label>       
              <input type='text' id="sAttack" name="sAttack" />
            </li>
            <li>
              <label htmlFor="">Special Defenses</label>       
              <input type='text' id="sdefense" name="sdefense" />
            </li>
            <li>
              <label htmlFor="">Magic Resistance</label>       
              <input type='text' id="mr" name="mr" />
            </li>
            <li>
              <label htmlFor="">Size*</label>       
              <input type='text' id="size" name="size" required />
            </li>
            <li>
              <label htmlFor="">Morale</label>       
              <input type='text' id="morale" name="morale" />
            </li>
            <li>
              <label htmlFor="">XP Value</label>       
              <input type='text' id="xp" name="xp" />
            </li>
            <li>
              <label htmlFor="">Summary*</label>
              <textarea name="summary" id="summary" rows="10" cols="99" required />
            </li>
            <li>
              <label htmlFor="">Habitat/Society*</label>
              <textarea name="habitat" id="habitat" rows="10" cols="99" required />
            </li>
            <li>
              <label htmlFor="">Ecology*</label>
              <textarea name="ecology" id="ecology" rows="10" cols="99" required />
            </li>
          </ul>
          <button id='createButton' type='submit'>submit</button>
      </fieldset>
    </form>
    </div>
    </>
  }


  render() {
    return(
      <>
      {this.showHide()}
      
      
      </>
    )
  }
}
