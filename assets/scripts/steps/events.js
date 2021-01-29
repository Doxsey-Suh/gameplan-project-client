// const getFormFields = require('./../../../lib/get-form-fields')
const ui = require('./ui')
const api = require('./api')
const getFormFields = require('./../../../lib/get-form-fields')
// const { Console } = require('console')
// const store = require('./../store')

const onShowCreateStepForm = function (event) {
  event.preventDefault()
  $('.create-step-form').show()
  $('#delete-step-form').hide()
  $('#show-step-form').hide()
  $('#update-step-form').hide()
}

const onShowDeleteStepForm = function (event) {
  event.preventDefault()
  $('#delete-step-form').show()
  $('.create-step-form').hide()
  $('#show-step-form').hide()
  $('#update-step-form').hide()
}

const onShowShowStepForm = function (event) {
  event.preventDefault()
  $('#show-step-form').show()
  $('#delete-step-form').hide()
  $('.create-step-form').hide()
  $('#update-step-form').hide()
}

const onShowUpdateStepForm = function (event) {
  event.preventDefault()
  $('#update-step-form').show()
  $('#show-step-form').hide()
  $('#delete-step-form').hide()
  $('.create-step-form').hide()
}

const onCreateStep = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.createNewStep(data)
    .then(ui.createStepSuccess)
    .then(console.log('after ui create step success'))
    .then(api.indexSteps)
    .then(ui.indexStepsSuccess)
    .then(console.log('after ui index steps success'))
    .catch(console.log('something went wrong'))
    // .catch(ui.createStepFailure)
    // .catch(ui.indexStepsFailure)
}

const onIndexSteps = function (event) {
  event.preventDefault()
  api.indexSteps()
    .then(ui.indexStepsSuccess)
    .catch(ui.indexStepsFailure)
}

const onHideSteps = function () {
  event.preventDefault()
  api.indexSteps()
    .then(ui.hideStepsSuccess)
    .catch(ui.hideStepsFailure)
}

const onShowStep = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.showStep(data)
    .then(ui.showStepSuccess)
    .catch(ui.showStepFailure)
}

const onUpdateStep = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.updateStep(data)
    .then(ui.updateStepSuccess)
    .then(api.indexSteps)
    .then(ui.indexStepsSuccess)
    .catch(ui.updateStepFailure)
}

const onDeleteStep = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.destroyStep(data)
    .then(ui.destroyStepSuccess)
    .then(api.indexSteps)
    .then(ui.indexStepsSuccess)
    .catch(ui.destroyStepFailure)
}
module.exports = {
  onCreateStep,
  onIndexSteps,
  onShowStep,
  onUpdateStep,
  onHideSteps,
  onDeleteStep,
  onShowCreateStepForm,
  onShowDeleteStepForm,
  onShowShowStepForm,
  onShowUpdateStepForm
}
