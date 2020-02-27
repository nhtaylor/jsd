$(function() {
  $("#registration-form").submit((event) => {
    // call .preventDefault() to prevent form from being submitted
    event.preventDefault()

    // use serialize or serialArray 
    // to extract submitted information from the form
    console.log($(event.currentTarget).serializeArray())
    alert($(event.currentTarget).serialize())
  })
})
