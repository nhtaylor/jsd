$(function() {

  // one way to do it anonymously
  // $('.box').hover(
  //   (event) => {
  //     console.log(event)
  //      // 1st handler function
  //      // add .red class on hover
  //      $(event.currentTarget).addClass('red')
  //   },
  //   (event) => {
  //      // 2nd handler function
  //      // remove .red class when hover is exited
  //      $(event.currentTarget).removeClass('red')
  //   }
  // )

  /* .hover is a shortcut .mouseenter() and .mouseleave() methods, so if you wanted to implement a hover effect using .on(), you would need do something like the following: */

  // doing same thing before, just in two steps

  // listen for using .on
  $('.box').on("mouseenter", (event) => {
    // 1st handler function
    // add .red class on hover
    $(event.currentTarget).addClass('red')
  })

  // when the mouse leaves a div with this class
  // then do this thing
  $('.box').on("mouseleave", (event) => {
    // 2nd handler function
    // remove .red class when hover is exited
    $(event.currentTarget).removeClass('red')
  })

  // when you trigger an event with hover, you have options!
  //
})
