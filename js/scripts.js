

// User interface logic
$(document).ready(function(){
  $(".small-icon").click(function(){
    $(".small").show();
    $(".small-icon").hide();
  });
  $(".small").click(function(){
    $(".small-icon").show();
    $(".small").hide();
  });
  $(".medium-icon").click(function(){
    $(".medium").show();
    $(".medium-icon").hide();
  });
  $(".medium").click(function(){
    $(".medium-icon").show();
    $(".medium").hide();
  });
  $(".large-icon").click(function(){
    $(".large").show();
    $(".large-icon").hide();
  });
  $(".large").click(function(){
    $(".large-icon").show();
    $(".large").hide();
  });
  $("#order-button").click(function(){
    $(".order").show();
    $("#order-button").hide();
  });
});
  function Pizza(size, toppings1,crust){
    this.size = size;
    this.toppings1 = toppings1;
    this.crust = crust;
  };

  Pizza.prototype.price = function(){
    var total = this.toppings1 + this.crust + this.size;
    return total;
  };


  $(document).ready(function(){
    $("#pizzaOrder").submit(function(event){
      event.preventDefault();
      var size = parseFloat($("#size").val());
      var toppings1 = parseFloat($("#toppings1").val());
      var crust = parseFloat($("#crust").val());
      var userPizza = new Pizza(size,toppings1,crust);

      $("#customerOrder").slideToggle(500);
      $("ul").append("<li>" + "$" + userPizza.price().toFixed(2) + "</li>");
      $("li").remove();
      $("ul").append("<li>" + "$" + userPizza.price().toFixed(2) + "</li>");
      alert("Thank you for choosing Mama Golden Pizza");
    });
    $("#submittion").click(function(event){
       var name = $("input#name").val();
       var email =$("input#email").val();
       var location=$("input#location").val();
       if(name && email && location != " " ){
           alert("Thank you" + name + " for your order.Your order will be delivered at " + location + "during the day ");
       }
       else{
           alert("Kindly fill in your details in the inputs provided for delivery");
       }
       event.preventDefault();
      });
  });
