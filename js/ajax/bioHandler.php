<?php
$bio_json = file_get_contents("bio.json");
$bio = json_decode($bio_json, true);

$name = $_POST['name'];

echo $bio[$name]['bio'];