$(function() {
  // listen for change event on a text field
  $('#name').change((event) => {
    console.log($(event.currentTarget).val())

    // $('h1').text($(event.currentTarget).val())
  })

  // listen for change event on a select dropdown
  $('#city-select').change((event) => {
    console.log($(event.currentTarget).find(':selected').val())
  })
})
