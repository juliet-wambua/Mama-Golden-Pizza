//Business Logic
var myOrder = function(size) {
  if (pizza-size==="1"){
    return "small"
  }else if (pizza-size==="2") {
    return "medium"
  }else if (pizza-size==="3"){
    retuen "large"
  }
}
var counter = 0

function deliver(size, name){
  this.delivery = [];
  this.size = size;
  this.cost = 950;
  this.name = name;
}
deliver.prototype.toppings = function(array){
  for(i=0;i<array.length;i++) {
    this.delivery.push(parseInt(array[i]));
  }
}


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










});
