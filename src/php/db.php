<?php
  try
  {
    $bdd = new PDO('mysql:host=localhost;dbname=azimuthme;charset=utf8', 'root', '');
  }

  catch (Exception $e) 
  {
    die('Erreur : '.$e->getMessage());
  }

  $req = $bdd->prepare('INSERT INTO user (last_name, first_name, username, email, password, roles, created) VALUES(:last_name, :first_name, :username, :email, ;password, :roles, :created');
  $req->execute(array(
    'last_name' => $name,
    'first_name' => $firstname,
    'username' => $username,
    'email' => $email,
    'password'=> $password,
    'roles' => $select,
    'created' => $inscriptiondate
  ));
?>

