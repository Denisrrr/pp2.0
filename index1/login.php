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
   <title>Форма регистрации</title>
   <link rel="stylesheet" href="../css/login.css" type="text/css">
</head>

<body>
   <main class="main">
      <div class="register-form">
         <div class="loginregistr">
            <a href="../html/startPage.php">
               <h2 class="form-title">
                  Вход
               </h2>
            </a>
            <a href="#">
               <h2 class="form-title active">
                  Регистрация
               </h2>
            </a>
         </div>
         <div class="form-fields">
            <div class="from-field">
               <form action="check.php" method="post">
               <input type="text" name="fullName" placeholder="ФИО">
            </div>
            <!--<div class="from-field">
               <input type="text" name="name" placeholder="Имя">
            </div>
            <div class="from-field">
               <input type="text" name="patronymic" placeholder="Отчество">
            </div>-->
            <div class="from-field">
               <input type="text" name="mail" placeholder="Почта">
            </div>
            <div class="from-field">
               <input type="password" name="password" placeholder="Пароль">
            </div>
            <div class="from-field">
               <input type="password" name="returnPassword" placeholder="Повторите пароль">
            </div>
            <p class="msg none"></p>
         </div>
         <div class="form-buttons">
            <button class="button" type="submit">
               Регистрация
            </button>
            <div class="divider">
               или
            </div>
            <button href="#" class="button button-google">
               Вконтакте
            </button>
         </div>
      </div>
   </main>
</body>

</html>
