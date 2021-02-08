'use strict'
import dateFormat from 'dateformat'
import { apiUrl } from '../config'
const goalsEvents = require ('./events')
const stepsEvents = require('./../steps/events')

const testButtonSuccess = function (response) {
  console.log('test button from ui')
  $('#test-button').on('submit', console.log('test button clicked'))
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
  console.log('indexgoalsucess is firing')
  console.log(response.goals)
  // $('#goals').append('hello')
  $('#goals').show()
  $('#goal-stuff').show()
  $('#step-stuff').show()
  // $('#goals').html('')
  if (response.goals.length === 0) {
    $('#goals').text('goals list is empty')
    $('#hide-goals-button').show()
    $('#index-goals-button').hide()
    // $('form').trigger('reset')
  }

  // <button id="test-button" type="submit"> hey </button>
  //  const handleclick =() => console.log('hello')  onclick= ${handleclick}
  // response.goals.forEach(goal =>
  for (let i = 0; i < response.goals.length; i++) {
    const goal = response.goals[i]
    const goalDescription = () => {
      if (!goal.description){
        return " no description"
      }
      return goal.description

    }
    const goalList = (`
      
      <a class="container border list-group-item list-group-item-action " id="list-goal-list" data-toggle='list' role="tab" href="#list-${goal._id}" >
      <h1 id="show-goal">  ${goal.name}  </h1>
     <p> ${goalDescription()} </p>
      <p> id: ${goal._id} </p>
      
      </a>
      `)
    $('#goals').append(goalList)

    const stepCreate = (

      `<div class="tab-pane fade " id="list-${goal._id}" role="tabpanel" aria-labelledby="list-step-list">
         <form class= "create-step-form">
            <legend>new step</legend>
            <input type="text" name="step[text]" placeholder="create step">
            <input type="hidden" value=${goal._id} name="step[goalId]" placeholder="reference associated goal" required>
            <button class= "btn btn-secondary"type="submit">create</button>
          </form>
      </div> `
    )

    $('#steps').append(stepCreate)
    if (goal.step.length === 0) {
      $(`#list-${goal._id}`).append('<p>stepList empty</p>')
    }
    for (let j = 0; j < goal.step.length; j++) {
      const stepList = (`<p> ${goal.step[j].text}</p>`)
      $(`#list-${goal._id}`).append(stepList)
    }
    $('form').trigger('reset')
  }
  $('.create-step-form').on('submit', stepsEvents.onCreateStep)
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
