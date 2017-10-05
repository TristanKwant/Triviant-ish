import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import joinGame from '../../actions/games/join'

const mapDispatchToProps = { push, joinGame }

export class JoinDialog extends PureComponent {
  handleNope = () => {
    this.props.push('/') // back to the lobby with you!
  }

  handleYeah = () => {
    const { joinGame, game } = this.props
    joinGame(game._id)
  }

  render() {
    const { game } = this.props
    if (!game.isJoinable) return null

    const actions = [
      <FlatButton
        label="Nope"
        primary={true}
        onClick={this.handleNope}
      />,
      <FlatButton
        label="Hell, Yeah!"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleYeah}
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
          <p>Hey there! Do you think you can beat the mighty {game.players[0].name}? Or are you scared??? :)</p>
        </Dialog>
      </div>
    )
  }
}

export default connect(null, mapDispatchToProps)(JoinDialog)
