// Business logic
function Order(first, last){
  this.firstName = first;
  this.lastName = last;
  this.location = [];
}
Name.prototype.fullName = function(){
  return this.firstName + " " + this.lastName;
}

// User Interface logic
$(document).ready(function(){
$("form#first-name").submit(function(event){
  event.preventDefault();

  var inputtedFirstName = $("input#first-name").val();
  var inputtedLastName = $("input#last-name").val();
  var inputtedLocation = $("input#location").val();

  var order = order(inputtedFirstName, inputtedLastName, inputtedLocation);


});
$("#details").submit(function(event){
  var sizePizza = $("input#pizza-size").val();
  var crust = $("input#pizza-crust").val();
  var topping = $("input#pizza-topping").val();
  var firstName = $("input#first-name").val();
  var lastName = $("input#last-name").val();
  var location = $("input#location").val();
  if(pizza-size && pizza-crust && pizza-topping && first-name && last-name&& location !=" "){
    alert("thank you " + first-name + "for placing your order.")
  }
  else{
    alert("Kindly place an order by filling in your details.")
  }
  event.preventDefault();
});
});
