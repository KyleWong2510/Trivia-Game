import React from  'react'
import './Form.css'
import thunk from 'redux-thunk'

import { Link, withRouter } from 'react-router-dom'
import { setPlayerName, isLoading } from '../actions'
import { getQuestions } from '../thunks/getQuestions'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class Form extends React.Component {
  constructor() {
    super()
    this.state={
      name: '',
      round1: '',
      round2: '',
      round3: '',
      round4: '',
      round5: '',
      round6: '',
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.setPlayerName(this.state.name)
    this.getAllQuestions()
    this.props.history.push('/play')
  }

  getAllQuestions = async () => {
    this.props.isLoading(true)
    await this.props.getQuestions(this.state.round1, 'easy')
    // await this.props.getQuestions(this.state.round2, 'easy')
    // await this.props.getQuestions(this.state.round3, 'medium')
    // await this.props.getQuestions(this.state.round4, 'medium')
    // await this.props.getQuestions(this.state.round5, 'hard')
    // await this.props.getQuestions(this.state.round6, 'hard')
    this.props.isLoading(false)
  }

  renderInputs = () => {
    let inputs = []
    for(let i = 1; i < 7; i++) {
      inputs.push(
        <section className='round-label' key={i}>
          <h3>{`Round ${i}`}</h3>
          <select 
            name={`round${i}`}
            onChange={this.handleChange}
            data-testid={`round${i}`}
          >
            <option>Select a subject...</option>
            <option value='23'>History</option>
            <option value='22'>Geography</option>
            <option value='19'>Math</option>
            <option value='25'>Art</option>
            <option value='17'>Science & Nature</option>
            <option value='10'>Books</option>
          </select>
        </section>
      )
    }
    return inputs
  }

  render() {
    return (
      <form 
        className='start-game-form'
        onSubmit={this.handleSubmit}
      >
        <h1>Welcome to BlahBlah</h1>
        <label className='player-input'>
          Player:
          <input 
            type='text'
            name='name'
            placeholder='Name'
            value={this.state.name}
            onChange={(e) => this.handleChange(e)}
          />
        </label>
        <section className='categories'>
          {this.renderInputs()}
        </section>
        <input 
          className='play-btn'
          type='submit'
          value='Play!'
        />
      </form>
    )
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     getQuestions: (cat, diff) => dispatch(getQuestions(cat, diff)),
//     setPlayerName: () => dispatch(setPlayerName())
//   }
// }

const mapDispatchToProps = dispatch => (
  bindActionCreators({ setPlayerName, getQuestions, isLoading }, dispatch)
)



export default connect(null, mapDispatchToProps)(withRouter(Form))