'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')
const goalsEvents = require('./goals/events')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
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
  $('#create-goal-form').on('submit', goalsEvents.onCreateGoal)
  $('#hide-goals-button').hide()
  $('#index-goals-button').on('click', goalsEvents.onIndexGoals)
  $('#index-all-goals').on('click', goalsEvents.onIndexAllGoals)
  $('#hide-goals-button').on('click', goalsEvents.onHideGoals)
  $('#show-goal-form').on('submit', goalsEvents.onShowGoal)
  $('#update-goal-form').on('submit', goalsEvents.onUpdateGoal)
  $('#delete-goal-form').on('submit', goalsEvents.onDeleteGoal)
  // hide the crud forms
  $('#create-goal-form').hide()
  $('#show-goal-form').hide()
  $('#update-goal-form').hide()
  $('#delete-goal-form').hide()
  // show crud forms
  $('#create-goal-button').on('click', goalsEvents.onShowCreateGoalForm)
  $('#delete-goal-button').on('click', goalsEvents.onShowDeleteGoalForm)
  $('#show-goal-button').on('click', goalsEvents.onShowShowGoalForm)
  $('#update-goal-button').on('click', goalsEvents.onShowUpdateGoalForm)
})
