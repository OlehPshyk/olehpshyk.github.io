<?php

error_reporting(E_ALL);
require __DIR__ . '/inc/class.simple_mail.php';

// Config
define('MAIL_TO_ADDR', 'leads@trendfx.com');
define('MAIL_TO_NAME', 'leads');
define('MAIL_FROM_ADDR', 'leads@trendfx.com');
define('MAIL_FROM_NAME', 'leads');
define('MAIL_REPLY_ADDR', 'leads@trendfx.com');
define('MAIL_REPLY_NAME', 'Tecleadsh');
define('MAIL_SUBJECT', '[Altın Yatırımı LP] Yeni Lead ' . date('Y.m.d H:i:s'));

define('SMTP_HOST', 'smtp.yandex.com');
define('SMTP_USER', 'leads@trendfx.com');
define('SMTP_PASS', 'LeadsFX2019!');

require __DIR__ . '/phpmailer/PHPMailer.php';
require __DIR__ . '/phpmailer/SMTP.php';

// User data
$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$utm_source = isset($_POST['utm_source']) ? $_POST['utm_source'] : '';
$utm_campaign = isset($_POST['utm_campaign']) ? $_POST['utm_campaign'] : '';
$utm_medium = isset($_POST['utm_medium']) ? $_POST['utm_medium'] : '';


$data = date('Y.m.d H:i:s') . " name: {$name} phone: {$phone} email: {$email} utm Source: {$utm_source} utm Campaign: {$utm_campaign} utm Medium: {$utm_medium}\n";

file_put_contents(__DIR__ . '/requests.log', $data, FILE_APPEND);

$mailToAddr = MAIL_TO_ADDR;
$mailToName = MAIL_TO_NAME;
$mailFromAddr = str_replace('%s', $_SERVER['SERVER_NAME'], MAIL_FROM_ADDR);
$mailFromName = MAIL_FROM_NAME;
$mailReplyAddr = str_replace('%s', $_SERVER['SERVER_NAME'], MAIL_REPLY_ADDR);
$mailReplyName = MAIL_REPLY_NAME;

// Generating mail
$mailSubject = MAIL_SUBJECT;
$mailMessage = <<<EOM
Name: {$name}<br>
Phone: {$phone}<br>
Email: {$email}<br>
utm Source: {$utm_source}<br>
utm Campaign: {$utm_campaign}<br>
utm Medium: {$utm_medium}<br>
Name:
<div id="field_name">{$name}</div>
Email:
<div id="field_email">{$email}</div>
Phone Number:
<div id="field_phonenumber">{$phone}</div>
Source:
<div id="custom_field_2">Altin Yatirimi</div>
EOM;

$mail = new PHPMailer\PHPMailer\PHPMailer;

$mail->isSMTP();
$mail->Host = SMTP_HOST;
$mail->SMTPAuth = true;
$mail->Username = SMTP_USER; // Ваш логин в Яндексе. Именно логин, без @yandex.ru
$mail->Password = SMTP_PASS; // Ваш пароль
$mail->SMTPSecure = 'ssl';
$mail->Port = 465;
$mail->setFrom(MAIL_FROM_ADDR); // Ваш Email
$mail->addAddress(MAIL_TO_ADDR); // Email получателя
$mail->SMTPDebug = 1;

// Письмо
$mail->isHTML(true);
$mail->Subject = MAIL_SUBJECT; // Заголовок письма
$mail->Body = $mailMessage; // Текст письма
try {


    if (!$mail->send()) {
        exit('Could not send email. Please, contact administrator.');
    } else {
        header("Location: thanks.html");
    }
} catch (Exception $e){
    echo $e->getMessage();
}

?><h4 class="title">Talebiniz alınmıştır! Yatırım danışmanlarımız sizinle kısa süre içinde irtibata geçecek</h4><?php // end
