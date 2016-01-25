<?php
include_once("../conect.php");

//retorna un json
//header('Content-Type: application/json');

$query = 'SELECT * FROM alumnos ORDER BY nombre ASC ';
/*$result = mysql_query($query) or die('Consulta fallida: ' . mysql_error());

//echo $result;
//echo Database::get_json_rows($result);
while ($line = mysql_fetch_array($result, MYSQL_ASSOC)) {
    foreach ($line as $col_value) {
        echo "$col_value";
    }
  
}

*/

getArraySQL($query);

?>