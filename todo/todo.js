$(function() {

  $(".country").on("click", function(event) {
    event.preventDefault()
    var elementThatWasClicked = $(this)
    elementThatWasClicked.parent().remove()

    })

})
