'use strict'
import dateFormat from 'dateformat'

const createGoalSuccess = function (response) {
  $("#message").show().delay(2000).fadeOut().html('added "' + response.goal.name +'" to list!')
  $('form').trigger('reset')
  $('#change-password-form').hide()
  const list = document.createElement('a')
  const list2 = document.createElement('div')

          const goalList= (`
        <section class="container" id="goal-border">
        <p href="#" data-target="#show-steps" id="show-goal" data-toggle="collapse">
         ${response.goal.name}
        </p>
        </section>
       <div class="collapse out" id="show-steps">
       <p>
        ${response.goal.description}
       </p>
        </div>
      `)

  // goals list
  $(list).addClass('list-group-item list-group-item-action')
  $(list).attr('data-toggle', 'list')
  $(list).attr('href', 'list-' + response.goal._id)
  // $(list).attr('id', response.goal._id)
  $(list).html(goalList)
  //add the new goal to the beginning of the list
  $('#goals').prepend(list)

  // see more
  $(list2).addClass('tab-pane fade')
  $(list2).attr('id', 'list-' + response.goal._id)
  //add the 'see more' to the goal
  $(list2).html(response.goal.description)
}

const createGoalFailure = function (response) {
  $('#message').text('unable to create goal. take a nap and come back to it')
  $('form').trigger('reset')
}

const indexGoalsSuccess = function (response) {
  // const emptyGoals = (`
  // <section class="container" id="empty-goals">
  // no goals to display
  // </section>
  // `)
  // display empty goals message if there are no goals
  // console.log(response.goals.length)
  // if (response.goals.length === 0) {
  //   $('#goals').html(emptyGoals)
  //   $('form').trigger('reset')
  // }
  $('#goals').empty()
    // iterate through the goals
    for (let i = 0; i < response.goals.length; i++) {

      const list = document.createElement('a')
      // define the goal list item as a collapsable <a> tag and the collapse out class that contains the hidden info
          const goalList= (`
        <section class="container" id="goal-border">
        <p href="#" data-target="#show-steps" id="show-goal" data-toggle="collapse">
         ${response.goals[i].name}
        </p>
        </section>
       <div class="collapse out" id="show-steps">
       <p>
        ${response.goals[i].description}
       </p>
        </div>
      `)
      $(list).addClass('list-group-item list-group-item-action')
      $(list).attr('data-toggle', 'list')
      $(list).attr('href', '#list-' + response.goals[i]._id)
      // $(list).attr('id', response.goals[i]._id)
      $(list).attr('role', 'tab')
      // $(list).html('<a>' + response.goals[i].name + '</a>')
      $(list).html(goalList)
      // add the new goal to the top of the list
      $('#goals').prepend(list)



      // const seeMore = (`
      // <section class="container">
      // <h1 id="goal-name">${goals.name}</h1>
      // <h2 id="goal-description">${goals.description}</h2>
      // <p id="date-created"> Created on ${dateFormat(goals.createdAt, 'dddd, mmmm dS, yyyy')} </p>
      // </section>
      // `)
      
      // $('#goals').prepend(goalList)
      // $('form').trigger('reset')
      // $('#see-more').html(seeMore).hide()

      
      // end of for loop
    }
  // end of index function
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
  createGoalSuccess,
  createGoalFailure,
  indexGoalsSuccess,
  indexGoalsFailure,
  // showGoalSuccess,
  showGoalFailure,
  updateGoalSuccess,
  updateGoalFailure,
  hideGoalsSuccess,
  hideGoalsFailure,
  destroyGoalSuccess,
  destroyGoalFailure
}
