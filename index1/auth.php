<?php
  session_start();
  require_once 'connect.php';

  $mail = $_POST['mail'];
  $password = $_POST['password'];

  $error_fields = [];

  if ($mail === '') {
    $error_fields[] = 'mail';
  }

  if ($password === '') {
    $error_fields[] = 'password';
  }

  if(!empty($error_fields)){
    $response = [
      "status" => false,
      "type" => 1,
      "message" => "Проверьте правильность введеных данных",
      "fields" => $error_fields
    ];

    echo json_encode($response);

    die();
  }

  $password = md5($password);

  $check_user = mysqli_query($connect, "SELECT * FROM `users` WHERE `mail` = '$mail' AND `password` = '$password'");
  if (mysqli_num_rows($check_user) > 0) {

      $user = mysqli_fetch_assoc($check_user);

      $_SESSION['user'] = [
          "id" => $user['id'],
          "fullName" => $user['fullName']
      ];

      //header('Location: index.html');
      $response = [
        "status" => true
      ];
      echo json_encode($response);
  } else {
    //$_SESSION['message'] = 'Не верный логин или пароль';
    //header('Location: startPage.php');
    $response = [
      "status" => false,
      "message" => 'Неверный логин или пароль'
    ];

    echo json_encode($response);
  }
































  /*$mail = filter_var(trim($_POST['mail']),
  FILTER_SANITIZE_STRING);
  $password = filter_var(trim($_POST['password']),
  FILTER_SANITIZE_STRING);
  $secondName = filter_var(trim($_POST['secondName']),
  FILTER_SANITIZE_STRING);
  $name = filter_var(trim($_POST['name']),
  FILTER_SANITIZE_STRING);

  $password = md5($password);

  $mysql = new mysqli('localhost','root','root','registration');

  $result = $mysql->query("SELECT * FROM `users` WHERE `mail` =
  '$mail' AND `password` = '$password'");
  $user = $result->fetch_assoc();
  if(count($user) == 0) {
    echo "Такой пользователь не найден";
    exit();
  }

  setcookie('user', $user['mail'], time() + 3600 * 24, "/");

  $mysql->close();

  header('Location: gamepage.html') */
 ?>
