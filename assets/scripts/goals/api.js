const config = require('./../config')
const store = require('./../store')

const createNewGoal = function (data) {
  return $.ajax({
    url: config.apiUrl + '/goals',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data
  })
}

const showGoal = function (data) {
  console.log(data)
  return $.ajax({
    url: config.apiUrl + '/goals/' + data.goals._id,
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data
  })
}

const indexGoals = function () {
  return $.ajax({
    url: config.apiUrl + '/goals',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const updateGoal = function (data) {
  return $.ajax({
    url: config.apiUrl + '/goals/' + data.goal.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data
  })
}

const destroyGoal = function (data) {
  return $.ajax({
    url: config.apiUrl + '/goals/' + data.goal.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data
  })
}

module.exports = {
  createNewGoal,
  showGoal,
  indexGoals,
  updateGoal,
  destroyGoal
}
