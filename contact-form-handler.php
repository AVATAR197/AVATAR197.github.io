<?php
    $firstName = $_Post['firstname'];
    $lastName = $_Post['lastname'];
    $visitor_email = $_Post['E-mail'];
    $message = $_Post['text'];

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

