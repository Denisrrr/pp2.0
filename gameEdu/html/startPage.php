<?php
  session_start();
  if($_SESSION['user']) {
    header('Location: profile.php');
  }
 ?>

<!DOCTYPE html>
<html lang="en">

<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <link href="https://fonts.googleapis.com/css?family=Montserrat:regular,500,600,700,800&display=swap"
      rel="stylesheet">
   <title>Relvice</title>
   <link rel="stylesheet" href="../css/startpage.css" type="text/css">
</head>

<body>
   <div class="container">
      <div class="loginform">
         <div class="loginredistr">
            <a href="#" class="login">
               <h2 class="form-title active">
                  Вход
               </h2>
            </a>
            <a href="../html/login.php" class="login">
               <h2 class="form-title">
                  Зарегистрироваться
               </h2>
            </a>
         </div>
         <div class="formfields">
            <div class="form-field">
               <input type="text" name="mail" placeholder="Почта">
            </div>
            <div class="form-field">
               <input type="password" name="password" placeholder="Пароль">
            </div>
         </div>
         <div class="form-button">
            <button class="login-button" type="submit">Войти</button>
         </div>
         <p class="msg none"></p>
      </div>
      <div class="registrationform">
         <h2 class="second-title">
            Войти через Google
         </h2>
         <div class="form-button">
            <a href="index.html" class="teleportation">
               <button class="registration-button">
                  Google
               </button>
            </a>
         </div>
      </div>
   </div>
   <script src="/script.js/jquery-3.6.1.min.js"></script>
   <script src="/script.js/auth.js"></script>
</body>

</html>
