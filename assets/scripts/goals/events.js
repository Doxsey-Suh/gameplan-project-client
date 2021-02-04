// const getFormFields = require('./../../../lib/get-form-fields')
const ui = require('./ui')
const api = require('./api')
const getFormFields = require('./../../../lib/get-form-fields')
// const store = require('./../store')

const testButton = function (event) {
  event.preventDefault()
  console.log('test button clicked')
}


const onShowCreateGoalForm = function (event) {
  event.preventDefault()
  $('#create-goal-form').show()
  $('#delete-goal-form').hide()
  $('#show-goal-form').hide()
  $('#update-goal-form').hide()
}

const onShowDeleteGoalForm = function (event) {
  event.preventDefault()
  $('#delete-goal-form').show()
  $('#create-goal-form').hide()
  $('#show-goal-form').hide()
  $('#update-goal-form').hide()
}

const onShowShowGoalForm = function (event) {
  event.preventDefault()
  $('#show-goal-form').show()
  $('#delete-goal-form').hide()
  $('#create-goal-form').hide()
  $('#update-goal-form').hide()
}

const onShowUpdateGoalForm = function (event) {
  event.preventDefault()
  $('#update-goal-form').show()
  $('#show-goal-form').hide()
  $('#delete-goal-form').hide()
  $('#create-goal-form').hide()
}

const onCreateGoal = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.createNewGoal(data)
    .then(ui.createGoalSuccess)
    .then(api.indexGoals)
    .then(ui.indexGoalsSuccess)
    .catch(ui.createGoalFailure)
}

const onIndexGoals = function (event) {
  // event.preventDefault()
  console.log('onindexgoal is firing')
  api.indexGoals()
    .then(ui.indexGoalsSuccess)
    .catch(ui.indexGoalsFailure)
}

const onHideGoals = function () {
  event.preventDefault()
  api.indexGoals()
    .then(ui.hideGoalsSuccess)
    .catch(ui.hideGoalsFailure)
}

const onShowGoal = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  // console.log('before the api request')
  api.showGoal(data)
    // .then(console.log('after the api request'))
    .then(ui.showGoalSuccess)
    // .then(console.log('after the ui response'))
    .catch(ui.showGoalFailure)
}

const onUpdateGoal = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.updateGoal(data)
    .then(ui.updateGoalSuccess)
    .then(api.indexGoals)
    .then(ui.indexGoalsSuccess)
    .catch(ui.updateGoalFailure)
}

const onDeleteGoal = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.destroyGoal(data)
    .then(ui.destroyGoalSuccess)
    .then(api.indexGoals)
    .then(ui.indexGoalsSuccess)
    .catch(ui.destroyGoalFailure)
}
module.exports = {
  testButton,
  onCreateGoal,
  onIndexGoals,
  onShowGoal,
  onUpdateGoal,
  onHideGoals,
  onDeleteGoal,
  onShowCreateGoalForm,
  onShowDeleteGoalForm,
  onShowShowGoalForm,
  onShowUpdateGoalForm
}
