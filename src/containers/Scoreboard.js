import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class Scoreboard extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {

      score: 0,
      currentUser: 'name',


    }
  }

  render(){
    const { game } = this.props

       if (game.players.length > 1) {
    return (
      <div>
        <p>{ game.players[0].name} - score: {game.players[0].points} points</p>
        <p>{ game.players[1].name} - score: {game.players[1].points} points</p>
      </div>
     )
   }
    else {
     return (
       <div>
         <p>{ game.players[0].name} - score: {game.players[0].points} points</p>
         <p> waiting for an opponent</p>
       </div>
     )
   }
 }
}



const mapStateToProps =  ({ score, currentUser, currentGame, games, subscriptions }) => {

  const game = games.filter((g) => (g._id === currentGame))[0]
  const currentPlayer = game && game.players.filter((p) => (p.userId === currentUser._id))[0]

  return {
  currentPlayer,
  score,
  game,
  currentUser,
  subscribed: subscriptions.includes('games'),
}
}


export default connect (mapStateToProps)(Scoreboard)
