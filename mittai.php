<?php
error_reporting(0);
$servername = "localhost";
$username   = "root";
$password   = "";
$dbname     = "kishor";

$connection = mysqli_connect($servername, $username, $password, $dbname);

if($connection)
{
    echo "connection ok";
} 
else
{
    echo "connection failed";
}

if(isset($_POST['submit']))
{
   echo $user_email=$_POST['email'];

   

    $admin="realityeducation10@gmail.com";

    $subject1="New Enrolled";

    $subject2= "Enrolled successfully  | EDX website";

    $message1 = " Congratulations sir"."\n\n"." Recently, a new student join us." ;

    $message2= " Hello Dear"."\n\n"." Now you can enjoy our content and study matrial.";

    $headers = "From: ".$user_email;

    $headers2="From: ".$admin;

    // echo $output= mail($admin, $subject1, $message1, $headers);//send to website owner
    // $output2= mail($user_email, $subject2, $message2, $headers2);

    if(mail($admin, $subject1, $message1, $headers))
    { 
        echo" <script> alert( email sent)</script>";
    }
    else{
        echo" <script> alert(failed)</script>";
    }


    echo "mittai";

//database
             $query=" SELECT * FROM student WHERE email='$user_email' ";

            $result=mysqli_query($connection, $query);

            $total = mysqli_num_rows($result);

            if($total == 1)
                {
                    echo "<script> alert('you are already enrolled')</script>";
                }
            else
                {
                        $sql= " INSERT INTO student (email) VALUES ('$user_email')";

                        $data = mysqli_query($connection, $sql);

                        if($data)
                        {
                            echo "<script> alert('you are enrolled')</script>";

                        }
                        else{
                            echo "<script> alert('failed')</script>";

                        }
               } 
}
?>