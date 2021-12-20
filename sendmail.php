<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'phpmailer/src/Exception.php';
    require 'phpmailer/src/PHPMailer.php';

    $mail = new PHPMailer(true);
    $mail->CharSet ='UTF-8';
    $mail->setLanguage('ru', 'phpmailer/language/');
    $mail->IsHTML(true);

try {
    $mail->setFrom('bfdeck2021@gmail.com', 'BFDeck');
} catch (Exception $e) {
}
try {
    $mail->addAddress('alexshow271@gmail.com');
} catch (Exception $e) {
}
$mail->Subject = 'HI';

    $body = '<h1>Письмо</h1>';

    if(trim(!empty($_POST['name']))){
        $body.='<p><strong>ИМЯ:</strong> '.$_POST['name'].'</p>';
    }
    if(trim(!empty($_POST['email']))){
        $body.='<p><strong>EMAIL:</strong> '.$_POST['email'].'</p>';
    }

    $mail->Body = $body;

try {
    if (!$mail->send()) {
        $message = 'Ошибка';
    } else {
        $message = 'Данные отправлены';
    }
} catch (Exception $e) {
}

$response = ['message' => $message];

    header('Content-type: application/json');
    echo json_encode($response);