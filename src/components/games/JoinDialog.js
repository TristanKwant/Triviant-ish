import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import joinGame from '../../actions/games/join'

const mapDispatchToProps = { push, joinGame }

export class JoinDialog extends PureComponent {
  handleNo = () => {
    this.props.push('/')
  }

  handleYes = () => {
    const { joinGame, game } = this.props
    joinGame(game._id)
  }

render() {
  const { game } = this.props
 

  const actions = [
      <FlatButton
        label="No"
        primary={true}
        onClick={this.handleNo}
      />,
      <FlatButton
        label="Uhu"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleYes}
      />,
    ]

    return (
      <div>
        <RaisedButton label="Dialog" onClick={this.handleOpen} />
        <Dialog
          title={`Want to join ${game.title}?`}
          actions={actions}
          modal={false}
          open={game.isJoinable}
          onRequestClose={this.handleClose}
        >
          <p>Want to play a game with {game.players[0].name}?</p>
        </Dialog>
      </div>
    )
  }
}

export default connect(null, mapDispatchToProps)(JoinDialog)
