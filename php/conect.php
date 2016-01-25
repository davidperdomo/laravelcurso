<?php
/*
// Conectando, seleccionando la base de datos
$link = mysql_connect('localhost', 'root', '')
    or die('No se pudo conectar: ' . mysql_error());
mysql_select_db('univer_db') or die('No se pudo seleccionar la base de datos');

*/

Class Conectar
{
    define(HOST, 'localhost');
    define(USER, 'root');
    define(PASS, '');
    define(DB, 'univer_dc');

    public static function con(){
        $con = mysql_connect(HOST,USER,PASS);
        mysql_query("SET NAMES: utf-8");
        mysql_db(DB):
        return $con;
    }
}

?>
