import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import './Questions.css'
import {List, ListItem} from 'material-ui/List';
import Questions from '../fixtures/questions'
import Checkbox from 'material-ui/Checkbox';
import Toggle from 'material-ui/Toggle';
import PropTypes from 'prop-types'
import fetchQuestions from '../actions/games/fetch'


const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};

export class Question extends PureComponent {
  static propTypes = {
    question: PropTypes.string.isRequired,
  }
  componentWillMount() {
    this.props.fetchQuestions()
    this.props.subscribeToRecipesService()
  }

  renderRecipe(question, index) {
    return <Question
      key={index} { ...question } />
  }

  render() {
    return (
      <div className="Questions-container">
        <h1>{question.question}</h1>
    )
  }
}

const mapStateToProps = ({ recipes }) => ({ recipes })
const mapDispatchToProps = { fetchRecipes, subscribeToRecipesService }

export default connect(mapStateToProps, { Question })(Question)
