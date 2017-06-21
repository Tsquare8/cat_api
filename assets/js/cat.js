(function() {

  $(function(){


  $.get("http://localhost:1337/cat", function(data) {
  console.log(data);

      // $.each(data, function(index, value) {
      // //
      // //   // $("#image").html(value.image);
      // //   // $("#breed").html(value.breed);
      // //   // $("#size").html(value.size);
      // //
      // // //   // answer = value.answer;
      // // //   // answerPoints = value.value
      // // //
      //     console.log(data);
      // });

});

});

})();
