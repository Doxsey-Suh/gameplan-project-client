// const getFormFields = require('./../../../lib/get-form-fields')
const ui = require('./ui')
const api = require('./api')
const getFormFields = require('./../../../lib/get-form-fields')
// const store = require('./../store')

const onCreateGoal = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.createNewGoal(data)
    .then(ui.createGoalSuccess)
    .catch(ui.createGoalFailure)
}

const onIndexGoals = function (response) {
  event.preventDefault()
  // console.log(response)
  api.indexGoals()
    .then(ui.indexGoalsSuccess)
    .catch(ui.indexGoalsFailure)
}

const onShowGoal = function (event) {
  event.preventDefault()
  // console.log(event)
  const form = event.target
  console.log(form)
  const data = getFormFields(form)
  console.log(data)
  api.showGoal()
    .then(ui.showGoalSuccess)
    .catch(ui.showGoalFailure)
}

const onUpdateGoal = function (event) {
  event.preventDefault(
    api.updateGoal
      .then(ui.updateGoalSuccess)
      .catch(ui.updateGoalFailure)
  )
}
module.exports = {
  onCreateGoal,
  onIndexGoals,
  onShowGoal,
  onUpdateGoal
}
