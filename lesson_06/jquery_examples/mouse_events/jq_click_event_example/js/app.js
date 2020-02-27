$(function() {

  // named function (re-usable)
  // name something when you're going to employ a function again
  // function toggleBgClass() {
  //   $('body').toggleClass('purple-bg')
  // }
  // $('#change-bg').click(toggleBgClass)

  // anonymouse function (all arrow functions are anonymous)
  // used only when you're applying code once!
  // this is the standard you'll see out in the wild
  // $('#change-bg').click(() => {
  //   $('body').toggleClass('purple-bg')
  // })

  /* An alternative way to listen for the a click event using .on() */
  $('#change-bg').on("click", () => {
    $('body').toggleClass('purple-bg')
  })
})
