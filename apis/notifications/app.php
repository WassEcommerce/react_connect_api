<?php
require_once 'headers.php';

$con = mysqli_connect('localhost', 'root', '', 'reactecommerce');

   if ($_SERVER['REQUEST_METHOD'] == 'GET'){
  if (isset($_POST['productid'])){
    $id = $con ->real_espace_string($_POST['productid']);
    $sql = $con->query("SELECT * FROM products WHERE id = '$id'");
    $data = $sql->fetch_assoc();
}else{
    $data = array();
    $sql = $con->query("SELECT * FROM  products");
    while ($d = $sql->fetch_assoc()){
        $data[]= $d;
    }
}
exit(json_encode($data));
    }
      if ($_SERVER['REQUEST_METHOD'] === 'POST'){
       
    }
    if ($_SERVER['REQUEST_METHOD'] === 'PUT'){
        
    }

    if ($_SERVER['REQUEST_METHOD'] === 'DELETE'){
        
    }

?>