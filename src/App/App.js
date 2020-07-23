import React from 'react';
import './App.css';
import Form from '../Form/Form';
import TeachersPets from '../TeachersPets/TeachersPets';
import Chalkboard from '../Chalkboard/Chalkboard'

import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import { hasErrored } from '../actions';
// import { setCurrentRound } from '../actions';

const App = (props) => {
  if(props.isLoading) {
    return (
      <p>Loading...</p>
    )
  }

  return (
    <main className='App'>
      <Switch>
        <Route exact path='/'>
          <Form />
        </Route>
        <Route path='/play'>
          <Chalkboard />
        </Route>
      </Switch>

    </main>
  )
}

const mapStateToProps = ({ setPlayerName, setQuestions, setCurrentQuestion, setCurrentRound, isLoading, hasErrored }) => ({
  playerName: setPlayerName,
  questions: setQuestions,
  currentQuestion: setCurrentQuestion,
  currentRound: setCurrentRound,
  isLoading: isLoading,
  error: hasErrored
})

export default connect(mapStateToProps)(App);