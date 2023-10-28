<?php

include 'database.php';
$posts = [];
$sql = "SELECT sum(Price_USD) as total,  FORMAT(AVG(Price_USD), 2) as Average, count(Price_USD) as count,count(DISTINCT COUNTRY) as country FROM `maindataset`";
if($result = $db->query($sql))
{
$i = 0;
$row = $result->fetch_assoc();

$posts['total'] = $row['total'];
$posts['Average'] = $row['Average'];
$posts['count'] = $row['count'];
$posts['country'] = $row['country'];
$posts['hc'] = '11000';
$posts['is'] = '15';


echo json_encode($posts);
}
else
{
http_response_code(404);
}
?>