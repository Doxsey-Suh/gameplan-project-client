'use strict'
import dateFormat from 'dateformat'

const createStepSuccess = function (response) {
  console.log(response)
  const index = response.goal.step.length
  $('#message').text('"You just added new step ' + response.goal.step[index - 1].text + '"')
  $('form').trigger('reset')
  // $('.create-step-form').hide()
  // console.log(response.step.text)
}

const createStepFailure = function (response) {
  $('#message').text('unable to create step. take a nap and come back to it')
  $('form').trigger('reset')
}


const showStepSuccess = function (response) {
  $('#steps').html('')
  $('form').trigger('reset')
 
  
//   const deleteStep = function () {
//   console.log('delete button clicked')
// }
  const stepShow = (`
      <section class="border">
      <h1> ${response.step.text} </h1>
      <p> ${response.step._id} </p>
      <p> created on ${dateFormat(response.step.createdAt, 'dddd, mmmm dS, yyyy')} </p>
      <input type="checkbox" id="checkbox" name="checkbox" value="isChecked"> <br/>
      <button onClick="{console.log('help')}">delete</button>
      </section>
      `)

      $('#steps').append(stepShow)
}


const indexStepsSuccess = function (response) {
  console.log(response.steps.length)
  console.log(response)
  $('#steps').show()
  $('#steps').html('')
  if (response.steps.length === 0) {
    $('#steps').text('steps list is empty')
    $('#hide-steps-button').show()
    $('#index-steps-button').hide()
    $('form').trigger('reset')
  }
  let count = 1
  response.steps.forEach(steps => {
      const stepList = (`
      <section class="border">
      <h1> Step ${count}: ${steps.text} </h1>
      <p> id: ${steps._id} </p>
      <input type="checkbox" id="checkbox" name="checkbox" value="isChecked">
      
      </section>
      `)

      $('#steps').append(stepList)
      $('#hide-steps-button').show()
      $('#index-steps-button').hide()
      $('form').trigger('reset')
      return count += 1
    })
  }
  

const indexStepsFailure = function (response) {
  $('#message').text('unable to index steps')
  $('form').trigger('reset')
}

const hideStepsSuccess = function (response) {
  $('#steps').text('')
  $('#index-steps-button').show()
  $('#hide-steps-button').hide()
  $('form').trigger('reset')
}

const hideStepsFailure = function (response) {
  $('#message').text('something wrong')
  $('form').trigger('reset')
}

const showStepFailure = function (response) {
  $('#message').text('step could not be found')
  $('form').trigger('reset')
}

const updateStepSuccess = function (response) {
  $('#message').text('step has been updated')
  $('form').trigger('reset')
  $('update-step-form').hide()
}

const updateStepFailure = function (response) {
  $('#message').text('step failed to update')
  $('form').trigger('reset')
}

const destroyStepSuccess = function () {
  $('#message').text('step deleted')
  $('form').trigger('reset')
  $('#delete-step-form').hide()
}

const destroyStepFailure = function (response) {
  $('#message').text('step failed to delete')
  $('form').trigger('reset')
  $('#steps').hide()
}

module.exports = {
  createStepSuccess,
  createStepFailure,
  indexStepsSuccess,
  indexStepsFailure,
  showStepSuccess,
  showStepFailure,
  updateStepSuccess,
  updateStepFailure,
  hideStepsSuccess,
  hideStepsFailure,
  destroyStepSuccess,
  destroyStepFailure
}
