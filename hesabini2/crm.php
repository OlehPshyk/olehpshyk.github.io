<?php

$post = [
    'source_id' => '9a35cb991017',
    'name' => $_POST['name'],
    'email' => $_POST['email'],
    'phone' => $_POST['phone'],

    'utm_campaign' => isset($_POST['utm_campaign']) ? $_POST['utm_campaign'] : "",
    'utm_source' => isset($_POST['utm_source']) ? $_POST['utm_source'] : "",
    'utm_medium' => isset($_POST['utm_medium']) ? $_POST['utm_medium'] : ""
];
//print_r($post);
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, "http://37.220.1111.1111/insertfromlp");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_PORT, 80);
curl_setopt($ch, CURLOPT_TIMEOUT, 30);
curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($post));
curl_setopt($ch, CURLOPT_HTTPHEADER, array("Content-Type: application/x-www-form-urlencoded"));
$response = curl_exec($ch);
$err = curl_error($ch);

curl_close($ch);

if ($err) {
//     echo "cURL Error #:" . $err;
} else {
//     echo $response;
}

$logFilePointer = fopen("altin-yatirimi_log.csv",'a');
fputcsv($logFilePointer, $post);


header("Location: thanks.html");