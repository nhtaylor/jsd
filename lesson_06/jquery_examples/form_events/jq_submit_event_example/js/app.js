$(function() {
  // submit can only be used for .submit() methods
  $("#registration-form").submit((event) => {

    // call .preventDefault() to prevent form from being submitted
    event.preventDefault()

    console.log("submitting form")

    // use serialize or serialArray
    // to extract submitted information from the form
    console.log($(event.currentTarget).serializeArray())
    alert($(event.currentTarget).serialize())
  })
})
