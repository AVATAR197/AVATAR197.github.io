<?php
    $firstName = $_GET['firstname'];
    $lastName = $_GET['lastname'];
    $visitor_email = $_GET['E-mail'];
    $message = $_GET['text'];

    $email_form = 'danko622@centrum.sk';

    $email_subject = "New Form Submission";

    $email_body = "User Name: $firstName.\n".
                    "User Email: $visitor_email.\n".
                        "User Message: $message.\n";

    $to = 'daniel.dopiriak@gmail.com';

    $headers = "From: $email_form \r\n";

    $headers .= "Reply-To: $visitor_email \r\n";

    mail($to, $email_subject, $email_body, $headers);

    header("Location: contact.html");
?>

