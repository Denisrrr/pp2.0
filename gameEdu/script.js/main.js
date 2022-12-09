$('.login-button').click(function (e) {
  e.preventDefault();

  let mail = $('input[name="mail"]').val(),
      password = $('input[name="password"]').val();

  $.ajax({
    url: '/html/auth.php',
    type: 'POST',
    dataType: 'json',
    data: {
      mail: mail,
      password: password,
    },

    success (data){

      if (data.status) {
        document.location.href = '/html/profile.php'
      } else {

        if(data.typee === 1) {
          data.fields.forEach(function (field){
              $(`input[name="${field}"]`)
          });

        }

        $('.msg').removeClass('none').text(data.message);
      }
    }
  });
});
