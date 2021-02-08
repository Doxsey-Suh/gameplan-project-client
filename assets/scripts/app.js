'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')
const goalsEvents = require('./goals/events')
const stepsEvents = require('./steps/events')

// use require without a reference to ensure a file is bundled
// require('./example')
// console.log('hello from app.js')

$(() => {
  // your JS code goes here

  $('#test-button').on('click', goalsEvents.testButton)
  // $('#test-button').on('submit', console.log('test button is firing '))

  $('#message').text('sign in to sort out your life')
  $('#sign-up-form').hide()
  $('#buttons').hide()
  // hide the signed-in auth forms
  //hide and show change password forms
  $('#change-password-form').hide()
  $('#show-change-password-form-button').on('click', authEvents.onShowChangePasswordForm)
  //
  $('#cancel').on('click', authEvents.onCancelChangePassword)
  $('#show-change-password-form-button').hide()
  $('#sign-out-form').hide()
  // show the signed in auth forms
  $('#show-signup-form-button').on('click', authEvents.onShowSignUp)
  $('#show-signin-form-button').hide()
  $('#show-signin-form-button').on('click', authEvents.onShowSignIn)
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#sign-out-form').on('submit', authEvents.onSignOut)
  // goals
  $('#create-goal-form').on('submit', goalsEvents.onCreateGoal)
  $('#hide-goals-button').hide()
  $('#index-goals-button').on('click', goalsEvents.onIndexGoals)
  // $('#index-all-goals').on('click', goalsEvents.onIndexAllGoals)
  $('#hide-goals-button').on('click', goalsEvents.onHideGoals)
  $('#show-goal-form').on('submit', goalsEvents.onShowGoal)
  $('#show-goal').on('click', goalsEvents.onShowGoal)
  $('#update-goal-form').on('submit', goalsEvents.onUpdateGoal)
  
  $('#delete-goal-form').on('submit', goalsEvents.onDeleteGoal)
  //steps
  // $('#create-step-form').hide()
  $('.create-step-form').on('submit', stepsEvents.onCreateStep)
  
  $('#hide-steps-button').hide()
  $('#index-steps-button').on('click', stepsEvents.onIndexSteps)
  $('#index-steps-button').hide()
  $('#hide-steps-button').on('click', stepsEvents.onHideSteps)
  $('#hide-steps-button').hide()
  $('#show-step-form').on('submit', stepsEvents.onShowStep)
  $('#show-step-form').hide()
  $('#update-step-form').on('submit', stepsEvents.onUpdateStep)
  $('#update-step-form').hide()
  $('#delete-step-form').on('submit', stepsEvents.onDeleteStep)
  $('#delete-step-form').hide()
  // hide the GOAL crud forms
  $('#create-goal-form').hide()
  $('#show-goal-form').hide()
  $('#update-goal-form').hide()
  $('#delete-goal-form').hide()
  // show GOAL crud forms
  $('#create-goal-button').on('click', goalsEvents.onShowCreateGoalForm)
  $('#delete-goal-button').on('click', goalsEvents.onShowDeleteGoalForm)
  $('#delete-goal-button').hide()
  $('#show-goal-button').on('click', goalsEvents.onShowShowGoalForm)
  $('#update-goal-button').on('click', goalsEvents.onShowUpdateGoalForm)
  $('#update-goal-button').hide()
    // hide the STEP crud forms
  // $('#create-step-form').hide()
  // $('#show-step-form').hide()
  // $('#update-step-form').hide()
  // $('#delete-step-form').hide()
  // show STEP crud forms
  $('#create-step-button').on('click', stepsEvents.onShowCreateStepForm)
  $('#create-step-button').hide()
  $('#delete-step-button').on('click', stepsEvents.onShowDeleteStepForm)
  $('#delete-step-button').hide()
  $('#show-step-button').on('click', stepsEvents.onShowShowStepForm)
  $('#show-step-button').hide()
  $('#update-step-button').on('click', stepsEvents.onShowUpdateStepForm)
  $('#update-step-button').hide()
})
