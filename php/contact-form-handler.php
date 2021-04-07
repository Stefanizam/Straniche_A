<?php
    $name = $_POST['name'];
    $visitor_email = $_POST['email'];
    $message = $_POST['message'];


    $email_from = 'bozinovski.stefan@protonmail.com';

    $email_subject = "New Form Submission";

    $email_body = "User name: $name.\n".
                    "User e-mail: $visitor_email.\n".
                        "User message: $message.\n";

    $to = "bozinovski.stefan@gmail.com";

    $headers = "From: $email_from \r\n";

    $headers .= "Reply-To: $visitor_email \r\n";

    mail($to,$email_subject,$email_body,$headers)

    header("Location: index.html");
?>