<?php
require_once 'vendor/autoload.php'; // composer autoloader

try {
    $student = PowerAPI\PowerAPI::authenticate("https://ps01.bergen.org/", "celper19", "Iamdivergent4");
} catch (PowerAPI\Exceptions\Authentication $e) {
    die('Something went wrong! '.$e->getMessage());
}

foreach ($student->sections as $section) {
    echo $section->name."\n";
}

$term = $student->sections[0]->finalGrades["S1"];

        ?>
    <html>

    <head>
        <title>Login</title>

    </head>

    <body>

        <?php 

        
        echo $term;

        ?>

    </body>

    </html>