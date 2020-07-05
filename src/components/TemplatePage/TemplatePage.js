import React, { Component } from 'react';
// import { Link } from 'react-router-dom'


export default class TemplatePage extends Component {
    constructor(props){
        super(props)
          this.state = {
            
    
          }
        }


        

  render() {
    
  return(
      
    <div ClassName='superWrap'>
        <div ClassName='templatePageWrapper'>
          <section>
            <h3>How to make an entry + info</h3>
            <p>Simply navigate to Create and fill out the form!  
              Remember, right now there is no way to edit or delete your post!
                Be sure to get it right.  If there is a mistake, feel free to repost 
                with a "version 2" or however you'd like to mark it. </p>
          </section>
          <section>
            <h3>Tips for quality submissions</h3>
            <p>Everyone plays ad&d 2e differently; and that's how it should be!  2e is not a 
              "one size fits all" sort of system.  It doesn't have much a "core mechanic" and as 
              such can be editted freely without all the math breaking.  That said, some of the 
              entries will look wildly different.  Some groups try to keep damage numbers limited 
              so that each HD a monster has is roughly equivilent to the number of hits that 
              it takes to slay it.  Others have no issue with damage getting into the triple digits 
              at very high level play.  Some play groups scoff at the very idea of high level play.
              This is all fine!  If you are making something for your custom setting, put it in the 
              "Base Setting" label; that way everyone knows to take everything with a grain of salt; 
              just try to keep creations for your setting keeping to the tone of your setting.  For 
              monsters used in Greyhawk or Forgotten Realms, they should be in the tone of those official 
              settings.  If 2e Greyhawk has a diety with 120hp and that is supposed to be an overwhelming amount, 
              you shouldn't make a monster with more hp that isn't supposed to be seen as a huge deal.
              </p>

              <p>
                I have heard some complain about d&d content being "shallow".  Well, in a sense, it 
                is supposed to be!  All d&d content; official or otherwise, should be changed and molded 
                to the needs and tone of the play group using it.  Never take these stats as set in stone;
                if you like some part of something, use it!  Running d&d isn't about being original, 
                it is about running a good game!  Good artists borrow, great artist steal.  Everything 
                posted here should be used by you for whatever it can be used for.  If you like a whole 
                monster, use it.  If you like only a bit of it; rip it apart and use it.  No shame!
            </p>
          </section>
        </div>
        </div>
        
  )
}
}