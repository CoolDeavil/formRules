<?php
cors();
$needle = false;
$label='';
$data  = file_get_contents('mock.data.json');
$parsed = json_decode($data);

$findByMail = function($email) use($parsed) {
    foreach ($parsed as $entry){
        if($entry->email === $email ){
            return true;
        }
    }
    return false;
};

$findByName = function($user) use($parsed) {
    foreach ($parsed as $entry){
        if($entry->name === $user ){
            return true;
        }
    }
    return false;
};
$find = fn($f)=>$f;

if(  isset($_GET['email'])){
    $find = $findByMail;
    $needle = $_GET['email'];
    $label = "You are on the blacklist, came back later...";
} else if (isset($_GET['name'])){
    $find = $findByName;
    $needle = $_GET['name'];
    $label = "The name is already taken...";
} else {
    $label = "Sorry, Unknown needle";
}

$status = $needle && !$find($needle);
echo json_encode([
    'status' => $status,
    'label' => $label,
], JSON_PRETTY_PRINT);


function cors() {
    if (isset($_SERVER['HTTP_ORIGIN'])) {
        header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
        header('Access-Control-Allow-Credentials: true');
        header('Access-Control-Max-Age: 86400');    // cache for 1 day
    }
    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
            header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
            header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
        exit(0);
    }
}