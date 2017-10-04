import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import RecipeItem from './Question'
import fetchRecipes from '../actions/games/fetch'

export class QuestionsContainer extends PureComponent {
  static propTypes = {
    questions: PropTypes.array.isRequired,
    fetchQuestions: PropTypes.func.isRequired,
  }

  componentWillMount() {
    this.props.fetchQuestions()
    this.props.subscribeToQuestionsService()
  }

  renderQuestion(question, index) {
    return <Question
      key={index} { ...question } />
  }

  render() {
    return(
      <div className="recipes wrapper">
        <main>
          { this.props.questions.map(this.renderQuestion.bind(this)) }
        </main>
      </div>
    )
  }
}

const mapStateToProps = ({ questions }) => ({ questions })
const mapDispatchToProps = { fetchQuestions, subscribeToQuestionsService }

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsContainer)
