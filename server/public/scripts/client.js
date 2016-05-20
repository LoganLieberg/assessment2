$(document).ready(function () {
  $.get('/animals', getAnimals);
  $('#animalZoo').on('click', '#submit', function (){
        postAnimals();
        getAnimals();
      });


});


function getAnimals (){
  event.preventDefault();
  $.ajax({
    type: 'GET',
    url: '/animals',
    success: function (animals) {
      console.log(animals);
      $('#animalTable').empty();
      $('#animalTable').append('<tr>' +
      '<th>Animal</th>' +
      '<th>Number of species</th>' +
      '</tr>');

      animals.forEach(function(row) {
        console.log(row.animal_type);
        console.log(row.type);
        var $el = $('<tr>' + '<td>' + row.animal_type + '</td>' + '<td>' + row.animal_number + '</td>');
          $('#animalTable').append($el);
      })

    }
  })
}

function postAnimals(){
  event.preventDefault();
  var animal = {};
  $.each($('#animalZoo').serializeArray(), function (i, field) {
    animal[field.name] = field.value;
    $('#animalZoo').find('input[type=text]').val('');
})


  $.ajax({
    type: 'POST',
    url: '/animals',
    data: animal,
    success: function(data) {
      console.log(data);

    }
  })
}

// function getNumber() {
//   $.ajax({
//     type: 'GET',
//     url: '/random',
//     success: function(crap) {
//       console.log();
//
//     }
//   })
// }
