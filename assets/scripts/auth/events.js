'use strict'
const getFormFields = require('./../../../lib/get-form-fields')
const ui = require('./ui')
const api = require('./api')
// const store = require('./../store')

const onSignUp = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  $('#sign-in-form').fadeIn()
  $('#sign-up-form').fadeOut()
  $('#show-signin-form-button').fadeOut()
  $('#show-signup-form-button').fadeIn()
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onShowSignUp = function (event) {
  event.preventDefault()
  $('#sign-up-form').fadeIn()
  $('#sign-in-form').fadeOut()
  $('#show-signup-form-button').fadeOut()
  $('#show-signin-form-button').fadeIn()
}

const onShowSignIn = function (event) {
  event.preventDefault()
  $('#sign-in-form').fadeIn()
  $('#sign-up-form').fadeOut()
  $('#show-signin-form-button').fadeOut()
  $('#show-signup-form-button').fadeIn()
}

const onShowChangePasswordForm = function (event) {
  event.preventDefault()
  $('#change-password-form').fadeIn()
  $('#show-change-password-form-button').fadeOut()
}

const onCancelChangePassword = function (event) {
  event.preventDefault()
  $('#change-password-form').fadeOut()
  $('#show-change-password-form-button').fadeIn()
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onShowSignUp,
  onShowSignIn,
  onShowChangePasswordForm,
  onCancelChangePassword
}
