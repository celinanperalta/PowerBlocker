<?php
require_once 'vendor/autoload.php'; // composer autoloader

try {
    $student = PowerAPI\PowerAPI::authenticate("https://ps01.bergen.org/", "celper19", "Iamdivergent4");
} catch (PowerAPI\Exceptions\Authentication $e) {
    die('Something went wrong! '.$e->getMessage());
}


foreach ($student->sections as $section) {

 echo $section->name.'<br>';
     
}
        ?>

    <html>

    <head>
        <title>Login</title>

    </head>

    <body>


    </body>

    </html>