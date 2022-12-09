<?php
  session_start();
  if(!$_SESSION['user']) {
    header('Location: gamePage.html');
  }
 ?>

<!DOCTYPE html>
<html lang="en">

<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Profile</title>
   <link rel="stylesheet" href="../css/profile.css">
   <link href="https://fonts.googleapis.com/css?family=Montserrat:regular,500,600,700,800&display=swap"
      rel="stylesheet">
</head>

<body>
   <header>
      <div class="shell">
         <div class="logo">
            <img src="../img/logosvg.svg" alt="" width="110px">
         </div>
         <div class="navigation-block">
            <nav>
               <a href="../html/index.html" class="navigation">Главная</a>
               <a href="../html/secondpage.html" class="navigation">О нас</a>
               <a href="../html/thirdpage.html" class="navigation">Продукты</a>
            </nav>
            <a href="../html/profile.php" class="profiledrop">
               <img src="../img/user_5.png" alt="" class="profile">
            </a>
         </div>
         <div class="registration">
            <a href="../html/startPage.php" class="loginhref">
               <button class="buttonlogin">Вход</button>
            </a>
            <a href="../html/startPage.php" class="registrationhref">
               <button class="buttonregistration">Зарегистрироваться</button>
            </a>
         </div>
      </div>
   </header>
   <div class="container">
      <div class="container-inner">
         <h1 class="profiletitle">
            Профиль
         </h1>
         <div class="profileinner">
            <div class="profilepicture">
               <img src="../img/greyface.png" alt="" class="profilephoto">
            </div>
            <div class="profiletext">
               <p class="firsttext">Привет, <?= $_SESSION['user']['fullName']?>!</p>
               <p class="secondtext">education@mail.ru</p>
            </div>
         </div>
         <div class="achievements">
            <div class="buttonsrow">
               <button class="firstbutton active">Основное</button>
               <a href="../html/profileachievments.php"><button class="firstbutton">Достижения</button></a>
            </div>
         </div>
         <div class="raiting">
            <h2 class="raitingtext">
               О себе
            </h2>
            <div class="raitingblock">

            </div>
         </div>
         <div class="buttonexit">
            <a href="exit.php">
               <button class="exit">
                  Выйти из профиля
               </button>
            </a>
         </div>
      </div>
   </div>
</body>

</html>
