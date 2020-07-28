import React from 'react';
import './TeachersPets.css';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const TeachersPets = (props) => {
  if(props.teachersPets.length) {
    let pets = props.teachersPets.map(pet => {
      return <li>{pet.initials}: {pet.score}</li>
    })
    return (
      <section className='scoreboard'>
        <h2 className='scoreboard-title'>Teacher's Pets:</h2>
        <ul className='scoreboard-list'>
          {pets}
        </ul>
        <Link to='/'><button className='nes-btn'>Home</button></Link>
      </section>
    )
  } else {
    return (
      <section className='scoreboard'>
        <h2>No high scores</h2>
        <Link to='/'><button className='nes-btn'>Home</button></Link>
      </section>
    )
  }
}

TeachersPets.propTypes = {
  teacherPets: PropTypes.array
}

const mapStateToProps = ({ setTeachersPets }) => ({
  teachersPets: setTeachersPets
})

export default connect(mapStateToProps)(TeachersPets);