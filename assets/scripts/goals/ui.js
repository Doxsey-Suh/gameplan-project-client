'use strict'
import dateFormat from 'dateformat'
import { apiUrl } from '../config'



const testButtonSuccess = function (response) {
  console.log('test button from ui')
  $('#test-button').on("submit", console.log('test button clicked'))
}

const createGoalSuccess = function (response) {
  $('#message').text('new goal is ' + response.goal.name + ' and its id is ' + response.goal._id + '. good luck')
  $('form').trigger('reset')
  $('#create-goal-form').hide()
  $('#goals').html('')
  // $('#goals').html(response.goal.name)
  console.log(response.goal)
  console.log(response)
}

const createGoalFailure = function (response) {
  $('#message').text('unable to create goal. take a nap and come back to it')
  $('form').trigger('reset')
}


const showGoalSuccess = function (response) {
  $('#goals').html('')
  $('form').trigger('reset')
  console.log(response)
  console.log(response.goal._id)
  
  //   const deleteGoal = function () {
    //   console.log('delete button clicked')
    // }
    const goalShow = (`
    <section class="border">
    <h1> ${response.goal.name} </h1>
    <p> ${response.goal._id} </p>
    <p> created on ${dateFormat(response.goal.createdAt, 'dddd, mmmm dS, yyyy')} </p>
    <input type="checkbox" id="checkbox" name="checkbox" value="isChecked"> <br/>
    <button onClick="{console.log('help')}">delete</button>
    </section>
    `)
    
    $('#goals').append(goalShow)
  }
  
  const indexGoalsSuccess = function (response) {
    console.log(response.goals.length)
    $('#goals').show()
    // $('#goals').html('')
    if (response.goals.length === 0) {
      $('#goals').text('goals list is empty')
      $('#hide-goals-button').show()
      $('#index-goals-button').hide()
      // $('form').trigger('reset')
    }
    
    // <button id="test-button" type="submit"> hey </button> 
    //  const handleclick =() => console.log('hello')  onclick= ${handleclick}
    response.goals.forEach(goals => {
      
      const goalList = (`
      
      <section class="container border">
      <h1 id="show-goal"> <a href="#"> ${goals.name} </a> </h1>
      <p> description: ${goals.description} </p>
      <p> id: ${goals._id} </p>
      
      </section>
      `)
      
      // $('#goals').html('')
      $('#goals').prepend(goalList)
      $('#hide-goals-button').show()
      $('#index-goals-button').hide()
      $('form').trigger('reset')
      
      document.getElementById("show-goal").addEventListener("click", handleClick)

      function handleClick () {
      alert('steps placeholder')
    }
    })
    
  }
  
  
const indexGoalsFailure = function (response) {
  $('#message').text('unable to index goals')
  $('form').trigger('reset')
}

const hideGoalsSuccess = function (response) {
  $('#goals').text('')
  $('#index-goals-button').show()
  $('#hide-goals-button').hide()
  $('form').trigger('reset')
}

const hideGoalsFailure = function (response) {
  $('#message').text('something wrong')
  $('form').trigger('reset')
}

const showGoalFailure = function (response) {
  $('#message').text('goal could not be found')
  $('form').trigger('reset')
}

const updateGoalSuccess = function (response) {
  $('#message').text('goal has been updated')
  $('form').trigger('reset')
  $('update-goal-form').hide()
}

const updateGoalFailure = function (response) {
  $('#message').text('goal failed to update')
  $('form').trigger('reset')
}

const destroyGoalSuccess = function () {
  $('#message').text('goal deleted')
  $('form').trigger('reset')
  $('#delete-goal-form').hide()
}

const destroyGoalFailure = function (response) {
  $('#message').text('goal failed to delete')
  $('form').trigger('reset')
  $('#goals').hide()
}

module.exports = {
  testButtonSuccess,
  createGoalSuccess,
  createGoalFailure,
  indexGoalsSuccess,
  indexGoalsFailure,
  showGoalSuccess,
  showGoalFailure,
  updateGoalSuccess,
  updateGoalFailure,
  hideGoalsSuccess,
  hideGoalsFailure,
  destroyGoalSuccess,
  destroyGoalFailure
}
