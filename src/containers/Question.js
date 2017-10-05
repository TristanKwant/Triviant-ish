import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import {List, ListItem} from 'material-ui/List';
import Questions from '../fixtures/questions'
import Checkbox from 'material-ui/Checkbox';
import Toggle from 'material-ui/Toggle';
import Timer from './Timer';
import './Questions.css'
import fetchQuestions from '../actions/questions/fetch'
import PropTypes from 'prop-types'
import resettimer from '../actions/resettimer'

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};


class Question extends PureComponent {
  componentWillMount() {
    this.props.fetchQuestions()
  //  this.props.resettimer()
  }

  componentDidUpdate() {
    // this.props.resettimer()
  }

  renderQuestion(q, index) {

      if(index === 0){
        return <p>{q.question}</p>
      }

  }

  render() {
    const { questions, timer } = this.props

    return (
      <div className="Questions-container">

        <p> { this.props.questions.map(this.renderQuestion.bind(this)) } </p>
        <Timer />

      </div>
    )
  }

}

const mapStateToProps = ({ games, currentUser, subscriptions, questions, timer }) => (
  {
    games,
    currentUser,
    questions,
    subscribed: subscriptions.includes('games'),
    timer,
  }
)
const mapDispatchToProps = { fetchQuestions, resettimer }

export default connect(mapStateToProps, mapDispatchToProps)(Question)
