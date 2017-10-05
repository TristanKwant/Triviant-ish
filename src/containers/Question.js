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
import Paper from 'material-ui/Paper';
import {GridList, GridTile} from 'material-ui/GridList';


const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },

  gridList: {
    overflowY: 'auto',
  },
  checkbox: {
    textAlign:'left',
    marginTop:30,
    width:100,
  },
};



class Question extends PureComponent {
  componentWillMount() {
    this.props.fetchQuestions()
  }

  componentDidUpdate() {
    if(this.props.timer == 0 ){
    }
  }

  renderQuestion(q, index) {
      if(index === this.props.questionsNr){
        return <h2>{q.question}</h2>
      }
  }

  getAnswer(a){
    console.log(a)

  }



  renderAnswers(answers, index) {
      var optionA = "A"
      if(index === this.props.questionsNr){
        return <GridList
                cols={2}
                cellHeight={100}
                padding={10}
                style={styles.gridList}

              >
              <Checkbox
                className={'answer-checkbox'}
                label={answers.optionA}

                style={styles.checkbox}
                onClick={() => this.getAnswer("A")}
              />
              <Checkbox
                className={'answer-checkbox'}
                label={answers.optionB}
                value="optionB"
                style={styles.checkbox}
                onClick={() => this.getAnswer("B")}
              />
              <Checkbox
                className={'answer-checkbox'}
                label={answers.optionC}
                value="optionC"
                style={styles.checkbox}
                onClick={() => this.getAnswer("C")}
              />
              <Checkbox
                className={'answer-checkbox'}
                label={answers.optionD}
                value="optionD"
                style={styles.checkbox}
                onClick={() => this.getAnswer("D")}
              />
              </GridList>


      }
  }


  render() {
    const { questions, timer } = this.props

    return (
      <div className="Questions-container">
        <Paper className="paper" styles="padding: 20px;">
          { this.props.questions.map(this.renderQuestion.bind(this)) }
          <Timer />
          { this.props.questions.map(this.renderAnswers.bind(this)) }
        </Paper>
      </div>
    )
  }

}

const mapStateToProps = ({ games, currentUser, subscriptions, questions, timer, questionsNr }) => (
  {
    games,
    currentUser,
    questions,
    subscribed: subscriptions.includes('games'),
    timer,
    questionsNr,
  }
)
const mapDispatchToProps = { fetchQuestions, resettimer }

export default connect(mapStateToProps, mapDispatchToProps)(Question)
