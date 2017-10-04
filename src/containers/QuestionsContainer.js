import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import getCurrentGame from '../actions/games/get'
import fetchGames from '../actions/games/fetch'
import subscribeToGames from '../actions/games/subscribe'
import Question from './Question'

class Game extends PureComponent {


  render() {

    return (
      <div className="Game">
        <Question />
      </div>
    )
  }
}

const mapStateToProps = ({ currentUser, currentGame, games, subscriptions }) => {}

export default connect(mapStateToProps, {
  getCurrentGame,
  fetchGames,
  subscribeToGames,
})(Game)
