// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(() => {
  $(".devoured").on("click", function (event) {
    const id = $(this).data("id");

    const burgerSelected = {
      id: id
    };

    // Send the PUT request.
    $.ajax(`/api/burgers/${id}`, {  
      type: "PUT",
      data: burgerSelected
    }).then(
      () => {
        console.log("Devoured Yum");
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function (event) {

    event.preventDefault();
console.log("hety");
    const newBurger = {
      burger_name: $("#burger").val().trim()
    };
    console.log("bod = " , newBurger);
    if (newBurger.burger_name.length > 0) {
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        () => {
          console.log("created new Burger to be devoured");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    }

  });

});



