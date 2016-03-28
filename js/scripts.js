$(document).ready(function() {

$("form").submit(function(event) {

  // alert("hello");

  var array = []

  var input1 = $("#favorite1").val();
  var input2 = $("#favorite2").val();
  var input3 = $("#favorite3").val();
  var input4 = $("#favorite4").val();
  var input5 = $("#favorite5").val();

  array.push(input1, input2, input3, input4, input5);
  console.log(array);

  var array2 = []

  array2.push(input2, input1, input3);
  $("#first").text(input2);
  $("#second").text(input1);
  $("#third").text(input3);
  $("#fourth").text(input4);
  $("#five").text(input5);
  console.log(array2);

  event.preventDefault();



  // console.log("Yolo");

  });
});
