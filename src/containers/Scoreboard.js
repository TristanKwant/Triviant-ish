import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

export class Scoreboard extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {

      score: 0,
      currentUser: 'name',
      opponents: 'name'
    }
    // this.increaseScore = this.increaseScore.bind(this)
    // this.decreaseScore = this.decreaseScore.bind(this)
  }
//
//   increaseScore(p) {
//     this.setState({
//       //if user.answer === true
//       score: (this.state.players.score + 1),
//     })
//   }
//
//   decreaseScore(p) {
//     this.setState({
//       //if user.answer === false
//       score: (this.state.players.score - 1),
//     })
//   }
//
// renderScore(s, index){
//   return <p>{s.players.score}</p>
// }

  render(){
    const { currentUser } = this.props

    return (
      <div>
      <p>{ currentUser.name } - score: {this.state.score} points</p>
      <p>{ this.state.opponents} - score: {this.state.opponents.score} points </p>
      </div>
     )}


}



const mapStateToProps =  ({ currentUser, score }) => ({
  currentUser,
  score
}
)
export default connect (mapStateToProps)(Scoreboard)
