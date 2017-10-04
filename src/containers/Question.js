import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import './Questions.css'
import {List, ListItem} from 'material-ui/List';
import Questions from '../fixtures/questions'
import Checkbox from 'material-ui/Checkbox';
import Toggle from 'material-ui/Toggle';
import fetchQuestions from '../actions/questions/fetch'
import PropTypes from 'prop-types'

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};


class Question extends PureComponent {
  componentWillMount() {
    this.props.fetchQuestions()
  }

  renderQuestion(q, index) {
      return <p>{q.question}</p>

}
  render() {
    const { questions } = this.props

    return (
      <div className="Questions-container">
        <p> { this.props.questions.map(this.renderQuestion.bind(this)) } </p>
      </div>
    )
  }

}

const mapStateToProps = ({ games, currentUser, subscriptions, questions }) => (
  {
    games,
    currentUser,
    questions,
    subscribed: subscriptions.includes('games'),
  }
)
const mapDispatchToProps = { fetchQuestions }

export default connect(mapStateToProps, mapDispatchToProps)(Question)
