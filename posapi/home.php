<?php

include 'database.php';
$posts = [];
$sql = "SELECT count(Company) as countCompany,Company,Product,sum(Price_USD) as sumPrice,QTY FROM `maindataset` group by Company LIMIT 10";
if($result = $db->query($sql))
{
$i = 0;
while($row = $result->fetch_assoc())
{
$posts[$i]['countCompany'] = $row['countCompany'];
$posts[$i]['Company'] = $row['Company'];
$posts[$i]['Product'] = $row['Product'];
$posts[$i]['sumPrice'] = $row['sumPrice'];
$posts[$i]['QTY'] = $row['QTY'];
$i++;
}
echo json_encode($posts);
}
else
{
http_response_code(404);
}
?>