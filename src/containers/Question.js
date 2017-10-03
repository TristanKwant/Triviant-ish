import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import './Questions.css'
import {List, ListItem} from 'material-ui/List';
import Questions from '../fixtures/questions'
import Checkbox from 'material-ui/Checkbox';
import Toggle from 'material-ui/Toggle';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};

class Question extends PureComponent {

  render() {
    const question = Questions[Math.floor(Math.random() * Questions.length)];
    const answer1 = question.optionA[0]
    const answer2 = question.optionB[0]
    const answer3 = question.optionC[0]
    const answer4 = question.optionD[0]

    const answers = answer1 + " " + answer2+ " " + answer3+ " " + answer4
    console.log(answers);

    return (
      <div className="Questions-container">
        <h1>{question.question}</h1>
        <ListItem
          leftCheckbox={<Checkbox />}
          primaryText={answer1}
        />
        <ListItem
          leftCheckbox={<Checkbox />}
          primaryText={answer2}
        />
        <ListItem
          leftCheckbox={<Checkbox />}
          primaryText={answer3}
        />
        <ListItem
          leftCheckbox={<Checkbox />}
          primaryText={answer4}
        />
      </div>
    )
  }

}

const mapStateToProps = ({ games, currentUser, subscriptions }) => (
  {
    games,
    currentUser,
    subscribed: subscriptions.includes('games'),
  }
)

export default connect(mapStateToProps, { Question })(Question)
