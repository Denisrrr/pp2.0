<?php

  session_start();
  require_once 'connect.php';

  $fullName = $_POST['fullName'];
  $mail = $_POST['mail'];
  $password = $_POST['password'];
  $returnPassword = $_POST['returnPassword'];

  if ($password === $returnPassword) {
    $password = md5($password);
    mysqli_query($connect, "INSERT INTO `users` (`id`, `fullName`, `mail`, `password`)
    VALUES (NULL, '$fullName', '$mail', '$password')");

    $_SESSION['message'] = 'Регистрация прошла успешно!';
    header('Location: startPage.php');

  } else {
    $_SESSION['message'] = 'Пароли не совпадают';
    header('Location: login.php');
    exit();
  }



























  /*$secondName = filter_var(trim($_POST['secondName']),
  FILTER_SANITIZE_STRING);
  $name = filter_var(trim($_POST['name']),
  FILTER_SANITIZE_STRING);
  $patronymic = filter_var(trim($_POST['patronymic']),
  FILTER_SANITIZE_STRING);
  $mail = filter_var(trim($_POST['mail']),
  FILTER_SANITIZE_STRING);
  $password = filter_var(trim($_POST['password']),
  FILTER_SANITIZE_STRING);

  $password = md5($password);

  $mysql = new mysqli('localhost','root','root','registration');
  $mysql->query("INSERT INTO `users` (`secondName`, `name`, `patronymic`, `mail`, `password`)
  VALUES('$secondName', '$name', '$patronymic', '$mail', '$password')");
  $mysql->close();

  header('Location: login.html') */
 ?>
