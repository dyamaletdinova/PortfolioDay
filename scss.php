<?php
require_once "scssphp/scss.inc.php";
use Leafo\ScssPhp\Server;
$sccs_directory = "css";
Server::serveFrom($sccs_directory);