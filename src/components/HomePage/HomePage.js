import React, { Component } from 'react';
import maeglinImageSmall from '../../maeglinImageSmall.png'


export default class HomePage extends Component {
  render() {
  return(
    <main>
        
        <div className='mainImage'>
        <img src={maeglinImageSmall} alt='alt' id='mImage' />
        </div>
        
    </main>
  )
}
}