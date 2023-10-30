<?php

use Slim\Http\Request;
use Slim\Http\Response;
use Slim\Http\UploadedFile;
use League\Csv\Reader;
use League\Csv\Writer;

require '../vendor/league/csv/autoload.php';

$container = $app->getContainer();
$container['upload_directory'] = '..' . __DIR__ . '/uploads';

require (__DIR__ . "/../phpmailer/class.phpmailer.php");
require ("mailtemplate.php");
date_default_timezone_set('America/Toronto');


$app->get('/', function (Request $request, Response $response, array $args) {
    try {
        // Specify the correct printer name

        return $response->withJson(['error' => false, 'message' => 'Printed successfully']);
    } catch (\Exception $e) {
        // Log or print the error message to identify issues
        error_log("Printing error: " . $e->getMessage());

        return $response->withJson(['error' => true, 'message' => $e->getMessage()]);
    }
});

$app->get('/print', function ($request, $response, $args) {
    $htmlContent = '<html><body><h1>Hello, World!</h1></body></html>';

    echo "<html><body>$htmlContent</body></html>";

    echo '<script type="text/javascript">
        function printPage() {
            var printWindow = window.open("", "Print", "width=600,height=600");
            printWindow.document.open();
            printWindow.document.write(\'<html><body>' . $htmlContent . '</body></html>\');
            printWindow.document.close();
            printWindow.print();
            printWindow.close();
        }

        window.onload = printPage;
    </script>';

    return $response->write($htmlContent);
});


$app->get('/getuser', function (Request $request, Response $response, array $args)
{
    try
    {
        
       $currentDate = date('Y-m-d');
   
$s="SELECT u.userid AS 'userid', u.username AS 'username', u.role AS 'role', COALESCE(o.total, 0) AS 'total', CURDATE() AS 'date', COALESCE(TIME_TO_SEC(TIMEDIFF(NOW(), l.clockedin)) / 3600, 0) AS 'hrs' FROM users u LEFT JOIN logs l ON u.userid = l.userid LEFT JOIN (SELECT userid, SUM(total) AS total FROM orders WHERE DATE(created_at) = CURDATE() GROUP BY userid) o ON u.userid = o.userid WHERE DATE(l.clockedin) = CURDATE();";
$stmt = $this->db->prepare($s);

$stmt->execute();
$today = $stmt->fetchAll();


$w="SELECT u.userid AS 'userid', u.username AS 'username', u.role AS 'role', o.total AS 'total', DATE(l.clockedin) AS 'date', TIME_TO_SEC(TIMEDIFF(l.clockedout, l.clockedin)) / 3600 AS 'hrs' FROM users u LEFT JOIN orders o ON u.userid = o.userid LEFT JOIN logs l ON u.userid = l.userid Group By date,u.userid ORDER By date;";
$stmt = $this->db->prepare($w);

$stmt->execute();
$daily = $stmt->fetchAll();






		//select category_name as 'Others',product_id,quantity,subtotal from order_items where product_id=0 and date(created)='2023-10-13'
		
        return $this
            ->response
            ->withJson(['error' => false, 'message' => "APIs are working... Yipee",'today'=>$today,'daily'=>$daily]);
    }
    catch(PDOException $e)
    {
        return $this
            ->response
            ->withJson(['error' => true, 'message' => $e->getMessage() ]);
    }
    catch(Exception $e)
    {
        return $this
            ->response
            ->withJson(['error' => true, 'message' => $e->getMessage() ]);
    }

});


$app->get('/getphonereceipt', function (Request $request, Response $response, array $args)
{
    try
    {
        
       $currentDate = date('Y-m-d');

         
        $sql = "SELECT
    phones.phone, phones.imei, phones.price, phones.documentNumber, phones.documentType, phones.notes,
    orders.orderId,orders.created_at, orders.subtotal, orders.tax,  orders.type,orders.total, orders.due, orders.cash, orders.card, orders.giftcard, orders.userid, orders.customerid,
    customers.customerName, users.username
FROM
    orders
INNER JOIN phones ON orders.id = phones.orderId
INNER JOIN customers ON customers.id = orders.customerid
INNER JOIN users ON users.userid = orders.userid
WHERE
    orders.type != 'product'
ORDER BY
    orders.id DESC;";
$stmt = $this->db->prepare($sql);

$stmt->execute();
$orders = $stmt->fetchAll();	
		//select category_name as 'Others',product_id,quantity,subtotal from order_items where product_id=0 and date(created)='2023-10-13'
		
        return $this
            ->response
            ->withJson(['error' => false, 'message' => "APIs are working... Yipee",'orders'=>$orders]);
    }
    catch(PDOException $e)
    {
        return $this
            ->response
            ->withJson(['error' => true, 'message' => $e->getMessage() ]);
    }
    catch(Exception $e)
    {
        return $this
            ->response
            ->withJson(['error' => true, 'message' => $e->getMessage() ]);
    }

});
$app->get('/getservicereceipt', function (Request $request, Response $response, array $args)
{
    try
    {
        
       $currentDate = date('Y-m-d');

         
        $sql = "SELECT * from orders inner join order_items on orders.id=order_items.order_id where orders.type='product' && order_items.product_id='0' order by orders.id DESC";
$stmt = $this->db->prepare($sql);

$stmt->execute();
$orders = $stmt->fetchAll();	
		//select category_name as 'Others',product_id,quantity,subtotal from order_items where product_id=0 and date(created)='2023-10-13'
		
        return $this
            ->response
            ->withJson(['error' => false, 'message' => "APIs are working... Yipee",'orders'=>$orders]);
    }
    catch(PDOException $e)
    {
        return $this
            ->response
            ->withJson(['error' => true, 'message' => $e->getMessage() ]);
    }
    catch(Exception $e)
    {
        return $this
            ->response
            ->withJson(['error' => true, 'message' => $e->getMessage() ]);
    }

});
$app->get('/getreceipt', function (Request $request, Response $response, array $args)
{
    try
    {
        
       $currentDate = date('Y-m-d');

         
        $sql = "SELECT * from orders where DATE(created_at) = :currentDate order by id DESC";
$stmt = $this->db->prepare($sql);
$stmt->bindParam(':currentDate', $currentDate);
$stmt->execute();
$orders = $stmt->fetchAll();	
		//select category_name as 'Others',product_id,quantity,subtotal from order_items where product_id=0 and date(created)='2023-10-13'
		
        return $this
            ->response
            ->withJson(['error' => false, 'message' => "APIs are working... Yipee",'orders'=>$orders]);
    }
    catch(PDOException $e)
    {
        return $this
            ->response
            ->withJson(['error' => true, 'message' => $e->getMessage() ]);
    }
    catch(Exception $e)
    {
        return $this
            ->response
            ->withJson(['error' => true, 'message' => $e->getMessage() ]);
    }

});
$app->get('/getreport', function (Request $request, Response $response, array $args)
{
    try
    {
        
       $currentDate = date('Y-m-d');

         
        $sql = "SELECT reports.*, users.username 
        FROM reports 
        JOIN users ON reports.user_id = users.userid
        WHERE DATE(reports.created_at) = :currentDate";
$stmt = $this->db->prepare($sql);
$stmt->bindParam(':currentDate', $currentDate);
$stmt->execute();
$report = $stmt->fetch();
        
$sql = "SELECT
	(SELECT SUM(total) FROM orders WHERE status = 'Pay Later') AS total_due,
	(SELECT SUM(subtotal) FROM orders WHERE status = 'Complete' AND DATE(created_at) = :currentDate) AS total_subtotal,
	(SELECT SUM(tax) FROM orders WHERE status = 'Complete' AND DATE(created_at) = :currentDate) AS total_tax,
	
	(SELECT SUM(card) FROM orders WHERE status = 'Complete' AND DATE(created_at) = :currentDate) AS total_card,
	(SELECT SUM(cash) FROM orders WHERE status = 'Complete' AND DATE(created_at) = :currentDate) AS total_cash,
	(SELECT SUM(giftcard) FROM orders WHERE status = 'Complete' AND DATE(created_at) = :currentDate) AS total_giftcard,
	(SELECT SUM(pointsRedeem) FROM orders WHERE status = 'Complete' AND DATE(created_at) = :currentDate) AS total_points,
	(SELECT SUM(discount) FROM orders WHERE status = 'Complete' AND DATE(created_at) = :currentDate) AS total_discount,
	(SELECT SUM(totalItems) FROM orders WHERE status = 'Complete' AND DATE(created_at) = :currentDate) AS total_items,
	
	
	
	(SELECT SUM(amount) FROM refunds WHERE DATE(created) = :currentDate) AS total_refund,
    (SELECT SUM(total) FROM orders WHERE status = 'Complete' AND DATE(created_at) = :currentDate) AS today_total,
    (SELECT COUNT(id) FROM orders WHERE status = 'Complete' AND DATE(created_at) = :currentDate) AS total_orders,
    (SELECT COUNT(id) FROM customers WHERE DATE(created_at) = :currentDate) AS new_customers_today,
    (SELECT COUNT(id) FROM customers) AS total_customers";
$stmt = $this->db->prepare($sql);
$stmt->bindParam(':currentDate', $currentDate);
$stmt->execute();
$result = $stmt->fetch();
        
		
		$sql = "SELECT
  CASE
    WHEN order_items.product_id = 0 THEN 'Others'
    ELSE categories.name
  END AS category_name, products.id AS product_id, products.name AS product_name, SUM(order_items.quantity) AS total_sold, SUM(order_items.subtotal) AS total FROM orders JOIN order_items ON orders.id = order_items.order_id JOIN products ON order_items.product_id = products.id JOIN categories ON products.category_id = categories.id WHERE DATE(orders.created_at) = :currentDate GROUP BY categories.name, products.id, products.name;";
		$stmt = $this->db->prepare($sql);
$stmt->bindParam(':currentDate', $currentDate);
$stmt->execute();
$summary = $stmt->fetchAll();
		
	$sql = "SELECT 'Others' as 'category_name', order_items.product_id AS product_id,SUM(order_items.subtotal) as osubtotal, order_items.name AS product_name, SUM(order_items.quantity) AS total_sold, SUM(order_items.subtotal) AS total FROM order_items WHERE DATE(order_items.created) = :currentDate AND order_items.product_id=0  AND order_items.product_type='product' GROUP BY product_name";
		$stmt = $this->db->prepare($sql);
$stmt->bindParam(':currentDate', $currentDate);
$stmt->execute();
$service = $stmt->fetchAll();	


$sql = "SELECT 'Phones' as 'category_name', order_items.product_id AS product_id,
 order_items.product_type,order_items.subtotal as osubtotal, order_items.name AS product_name, 
 order_items.quantity AS total_sold, order_items.subtotal AS total FROM order_items
 WHERE DATE(order_items.created) = :currentDate AND order_items.product_id=0  AND order_items.product_type!='product'";
$stmt = $this->db->prepare($sql);
$stmt->bindParam(':currentDate', $currentDate);
$stmt->execute();
$phones = $stmt->fetchAll();	
		//select category_name as 'Others',product_id,quantity,subtotal from order_items where product_id=0 and date(created)='2023-10-13'
		
        return $this
            ->response
            ->withJson(['error' => false, 'message' => "APIs are working... Yipee",'mydata'=>$report,'stats'=>$result,'summary'=>$summary,'service'=>$service,'phone'=>$phones]);
    }
    catch(PDOException $e)
    {
        return $this
            ->response
            ->withJson(['error' => true, 'message' => $e->getMessage() ]);
    }
    catch(Exception $e)
    {
        return $this
            ->response
            ->withJson(['error' => true, 'message' => $e->getMessage() ]);
    }

});
$app->get('/getcustomers', function (Request $request, Response $response, array $args)
{
    try
    {
        $sql = "SELECT customers.*, SUM(orders.total) AS total_purchases
                FROM customers
                LEFT JOIN orders ON customers.id = orders.customerid
                GROUP BY customers.id";
        
        $stmt = $this->db->prepare($sql);
    
        $stmt->execute();
        $users = $stmt->fetchAll();
        
        return $this
            ->response
            ->withJson(['error' => false, 'message' => "APIs are working... Yipee", 'customers' => $users]);
    }
    catch(PDOException $e)
    {
        return $this
            ->response
            ->withJson(['error' => true, 'message' => $e->getMessage() ]);
    }
    catch(Exception $e)
    {
        return $this
            ->response
            ->withJson(['error' => true, 'message' => $e->getMessage() ]);
    }
});

$app->get('/getusers', function (Request $request, Response $response, array $args)
{
    try
    {
        $sql = "SELECT * FROM users";
        $stmt = $this->db->prepare($sql);
    
        $stmt->execute();
        $users = $stmt->fetchAll();

        // Define an array of possible colors
        $colors = ['red', 'blue', 'black', 'orange', 'pink'];

        // Iterate through users and assign random colors
        foreach ($users as &$user) {
            $user['color'] = $colors[array_rand($colors)];
        }
        
        return $this
            ->response
            ->withJson(['error' => false, 'message' => "APIs are working... Yipee", 'users' => $users]);
    }
    catch(PDOException $e)
    {
        return $this
            ->response
            ->withJson(['error' => true, 'message' => $e->getMessage() ]);
    }
    catch(Exception $e)
    {
        return $this
            ->response
            ->withJson(['error' => true, 'message' => $e->getMessage() ]);
    }

});

$app->post('/refund', function (Request $request, Response $response, array $args) {
    // Get the form data from the request body
    $formData = $request->getParsedBody();

    $missingFields = [];

    // Check for missing fields and add them to the $missingFields array
    if (empty($formData['orderId'])) {
        $missingFields[] = 'orderId';
    }
    if (empty($formData['totalrefund'])) {
        $missingFields[] = 'totalrefund';
    }
    if (empty($formData['userid'])) {
        $missingFields[] = 'userid';
    }
    if (empty($formData['refundReason'])) {
        $missingFields[] = 'refundReason';
    }

    // Check if any fields are missing
    if (!empty($missingFields)) {
        $message = 'Please provide the following field(s): ' . implode(', ', $missingFields);
        return $response->withJson(['error' => true, 'message' => $message]); // Bad Request
    }

    $pdo = $this->db;
    // Extract data from the form
    $orderId = $formData['orderId'];
    $orderNumber = $formData['orderNumber']; // Assuming you have 'orderNumber' in your form
    $amount = $formData['totalrefund'];
    $items = json_encode($formData['items']);
    $userid = $formData['userid'];
    $note = $formData['refundReason'];

    // Check if 'dispute' is already set to 1 in the 'orders' table
    $disputeCheckSql = "SELECT dispute FROM orders WHERE id = :orderId AND orderId = :orderNumber";
    $disputeStmt = $pdo->prepare($disputeCheckSql);
    $disputeStmt->bindParam(':orderId', $orderId);
    $disputeStmt->bindParam(':orderNumber', $orderNumber);
    $disputeStmt->execute();
    $disputeResult = $disputeStmt->fetch(PDO::FETCH_ASSOC);

    if ($disputeResult && $disputeResult['dispute'] == 1) {
        // Dispute is already created, return an error message
        return $response->withJson(['error' => true, 'message' => 'Dispute already created for this order.']);
    }

    // Insert refund data into the database
    $insertSql = "INSERT INTO refunds (userid, orderId, orderNumber, amount, items, note, created)
            VALUES (:userid, :orderId, :orderNumber, :amount, :items, :note, NOW())";

    // Execute the SQL query using your preferred database connection library (PDO, Eloquent, etc.)
    try {
        // Implement the database connection and query execution here
        // Example using PDO:
        $insertStmt = $pdo->prepare($insertSql);
        $insertStmt->bindParam(':userid', $userid);
        $insertStmt->bindParam(':orderId', $orderId);
        $insertStmt->bindParam(':orderNumber', $orderNumber);
        $insertStmt->bindParam(':amount', $amount);
        $insertStmt->bindParam(':items', $items);
        $insertStmt->bindParam(':note', $note);
        $insertStmt->execute();

        // Update the 'dispute' field in the 'orders' table
        $updateSql = "UPDATE orders SET dispute = 1 WHERE id = :orderId AND orderId = :orderNumber";
        $updateStmt = $pdo->prepare($updateSql);
        $updateStmt->bindParam(':orderId', $orderId);
        $updateStmt->bindParam(':orderNumber', $orderNumber);
        $updateStmt->execute();

        return $response->withJson(['error' => false, 'message' => 'Refund success']);
    } catch (PDOException $e) {
        return $response->withJson(['error' => true, 'message' => $e->getMessage()], 500); // Internal Server Error
    }
});

$app->post('/addphone', function (Request $request, Response $response, array $args) {
    // Get the form data from the request body
    $formData = $request->getParsedBody();
    $pdo = $this->db;
    

    // Extract data from the form
    $userid = $formData['phone_userid'];
    $customerid = $formData['phone_customer'];
    $product_name = $formData['phone_name'];
    $phone_type = $formData['phone_type'];
    $phone_imei = $formData['phone_imei'];
    $phone_dt = $formData['phone_dt'];
    $phone_dn = $formData['phone_dn'];
    $phone_price = $formData['phone_price'];
    $phone_notes = $formData['phone_notes'];
	
	//$total = $formData['phone_total'];
	//$tax = $formData['phonetax'];
	$paymentmethod = $formData['phonemethod'];
	
	$payments = json_decode($paymentmethod, true); // Decode JSON 
    $jsonPayments = json_encode($payments);
	$card=0.00;
	$giftcard=0.00;
	$cash=0.00;
	
	
	foreach ($payments as $payment) {
    if (isset($payment['modeofpayment']) && isset($payment['amount'])) {
        if ($payment['modeofpayment'] === "Credit/Debit Card") {
            // Add the amount to the $card variable
            $card += (float)$payment['amount'];
        } elseif ($payment['modeofpayment'] === "Cash") {
            // Add the amount to the $cash variable
            $cash += (float)$payment['amount'];
        } elseif ($payment['modeofpayment'] === "Points Redeem") {
            // Add the amount to the $pointsRedeem variable
            $pointsRedeem += (float)$payment['amount'];
        }
        elseif ($payment['modeofpayment'] === "Gift Card") {
            // Add the amount to the $pointsRedeem variable
            $giftcard += (float)$payment['amount'];
        }
		 elseif ($payment['modeofpayment'] === "Pay Later") {
            // Add the amount to the $pointsRedeem variable
            $due += (float)$payment['amount'];
			$status='Pay Later';
        }
    }
}

    try {
        // Determine tax based on status
        if ($phone_type === 'buy') {
            $status = 0;
            $tax = 0; // No tax if status is 0 (buy)
			$mystatus='Buy';
			$product_type = 'phonebuy';
        } else {
            $status = 1;
            // Calculate tax as 13% of the price
            $taxRate = 0.13; // 13%
            $tax = $phone_price * $taxRate;
			$mystatus='Complete';
			$product_type = 'phonesell';
        }

        // Insert data into the 'phones' table
        

        // Insert data into the 'carts' table
        $productid = 0;
        $quantity = 1;
        $cartProductName = $product_name . '-' . $phone_imei;
        $cartPrice = $phone_price;

      
        // Get the last inserted order ID
       

        // Calculate total
        $total = $phone_price + $tax;

				$getLastOrderNumberSql = "SELECT id FROM orders order by id DESC limit 1";
			$getOrderNumberStmt = $this->db->prepare($getLastOrderNumberSql);
			$getOrderNumberStmt->execute();
			$lastOrderNumber = $getOrderNumberStmt->fetch();
			$newOrderNumber = "910".$lastOrderNumber['id'] + 1;
			
		
		
        // Insert data into the 'orders' table
        $insertOrderSql = "INSERT INTO orders (userid, customerid, orderId, modeOfPayment, card, giftcard, cash, discount, pointsRedeem, totalItems, subtotal, tax, total, due, changeamount, status, dispute, type, notes, created_at)
            VALUES (:userid, :customerid, :orderId, :modeOfPayment, :card,:giftcard,:cash, 0.00, 0, 1, :subtotal, :tax, :total, 0, 0, :status, 0, :type, :notes, NOW())";
        $insertOrderStmt = $pdo->prepare($insertOrderSql);
        $insertOrderStmt->bindParam(':userid', $userid);
        $insertOrderStmt->bindParam(':customerid', $customerid);
        $insertOrderStmt->bindParam(':orderId', $newOrderNumber);
		$insertOrderStmt->bindParam(':modeOfPayment', $jsonPayments);
		$insertOrderStmt->bindParam(':card', $card);
		$insertOrderStmt->bindParam(':cash', $cash);
		$insertOrderStmt->bindParam(':giftcard', $giftcard);

		// You may need to generate a unique order ID
        $insertOrderStmt->bindParam(':subtotal', $phone_price);
        $insertOrderStmt->bindParam(':tax', $tax);
        $insertOrderStmt->bindParam(':total', $total);
        $insertOrderStmt->bindParam(':status', $mystatus);
        $insertOrderStmt->bindParam(':type', $phone_type);
        $insertOrderStmt->bindParam(':notes', $phone_notes);
        $insertOrderStmt->execute();
		
		$lastInsertOrderId = $pdo->lastInsertId();
        // Insert data into the 'order_items' table
        $insertOrderItemsSql = "INSERT INTO order_items (order_id, product_id, product_type, name, quantity, price, subtotal, created)
            VALUES (:order_id, :product_id, :product_type, :name, :quantity, :price, :subtotal, NOW())";
        $insertOrderItemsStmt = $pdo->prepare($insertOrderItemsSql);
        $insertOrderItemsStmt->bindParam(':order_id', $lastInsertOrderId);
        $insertOrderItemsStmt->bindParam(':product_id', $productid);
        $insertOrderItemsStmt->bindParam(':product_type', $product_type);
        $insertOrderItemsStmt->bindParam(':name', $cartProductName);
        $insertOrderItemsStmt->bindParam(':quantity', $quantity);
        $insertOrderItemsStmt->bindParam(':price', $cartPrice);
        $insertOrderItemsStmt->bindParam(':subtotal', $cartPrice);
        $insertOrderItemsStmt->execute();

        // Prepare and return receipt data
		
		 if ($phone_type === 'buy') {
		$insertSql = "INSERT INTO phones (orderId,phone, imei, price, documentType, documentNumber, userId, customerId, status, notes)
            VALUES (:orderId,:phone, :imei, :price, :documentType, :documentNumber, :userId, :customerId, :status, :notes)";
        $insertStmt = $pdo->prepare($insertSql);
		  $insertStmt->bindParam(':orderId', $lastInsertOrderId);
        $insertStmt->bindParam(':phone', $product_name);
        $insertStmt->bindParam(':imei', $phone_imei);
        $insertStmt->bindParam(':price', $phone_price);
        $insertStmt->bindParam(':documentType', $phone_dt);
        $insertStmt->bindParam(':documentNumber', $phone_dn);
        $insertStmt->bindParam(':userId', $userid);
        $insertStmt->bindParam(':customerId', $customerid);
        $insertStmt->bindParam(':status', $status);
        $insertStmt->bindParam(':notes', $phone_notes);
        $insertStmt->execute();
		 }else{
			 $insertSql = "UPDATE phones set status='1' and where imei=:imei;";
        $insertStmt = $pdo->prepare($insertSql);
        $insertStmt->bindParam(':imei', $phone_imei);
        $insertStmt->execute();
			 
		 }
		
		$sql = "SELECT o.orderId AS order_id,o.changeamount,o.totalItems,o.created_at AS order_date,o.userid AS user_id,o.customerid AS customer_id,o.status AS order_status,o.card AS card_payment,
        o.cash AS cash_payment,o.discount AS order_discount,o.pointsRedeem AS points_redeem,o.due AS due_amount,o.subtotal AS subtotal_amount,o.tax AS tax_amount,
        o.total AS total_amount,oi.name AS product_name,oi.quantity AS quantity,oi.price AS unit_price,oi.subtotal AS line_total FROM orders o LEFT JOIN order_items oi ON o.id = oi.order_id
    WHERE o.id = :orderId OR o.orderId=:orderId";		
$orderStmt = $this->db->prepare($sql);
$orderStmt->bindParam(':orderId', $lastInsertOrderId);
$orderStmt->execute();

$allorderData = $orderStmt->fetchAll();

// Initialize the $orderData with the first row, if available
$orderData = reset($allorderData);

// Construct the receipt data in the desired format
$receiptData = [
    'order_id' => $orderData['order_id'] ?? null,
    'order_date' => $orderData['order_date'] ?? null,
    'user_id' => $orderData['user_id'] ?? null,
    'customer_id' => $orderData['customer_id'] ?? null,
    'order_status' => $orderData['order_status'] ?? null,
    'card_payment' => $orderData['card_payment'] ?? null,
    'cash_payment' => $orderData['cash_payment'] ?? null,
    'order_discount' => $orderData['order_discount'] ?? null,
    'points_redeem' => $orderData['points_redeem'] ?? null,
    'due_amount' => $orderData['due_amount'] ?? null,
    'subtotal_amount' => $orderData['subtotal_amount'] ?? null,
    'tax_amount' => $orderData['tax_amount'] ?? null,
    'total_amount' => $orderData['total_amount'] ?? null,
    'change_amount' => $orderData['changeamount'] ?? null,
    'totalItems' => $orderData['totalItems'] ?? null,
    'items' => [],
];


$itemsx = [];
foreach ($allorderData as $row) {
    $itemsx[] = [
        'product_name' => $row['product_name'],
        'quantity' => $row['quantity'],
        'unit_price' => $row['unit_price'],
        'line_total' => $row['line_total'],
    ];
}
$receiptData['items'] = $itemsx;

        // ...

        return $response->withJson(['error' => false, 'message' => 'Order placed successfully.', 'order_id' => $lastInsertOrderId, 'receipt' => $receiptData,'type'=>'Phone']);

    } catch (PDOException $e) {
        return $response->withJson(['error' => true, 'message' => $e->getMessage()], 500); // Internal Server Error
    }
});

$app->get('/updateserver', function (Request $request, Response $response) {
    try {
        // Get a list of tables in db1
        $dbn = $this->get('settings')['dbn'];
        $db = $this->get('settings')['db'];
        $pdo = new PDO(
            "mysql:host={$db['host']};dbname={$db['dbname']};port={$db['port']}",
            $db['user'],
            $db['pass']
        );

        $tables = $pdo->query("SHOW TABLES")->fetchAll(PDO::FETCH_COLUMN);

        // Your existing code for updating db2 with data from db1

        $db2 = new PDO(
            "mysql:host={$dbn['host']};dbname={$dbn['dbname']};port={$dbn['port']}",
            $dbn['user'],
            $dbn['pass']
        );

        foreach ($tables as $table) {
            // Fetch data from db1 for the current table
            $query = $pdo->query("SELECT * FROM $table"); // Use $pdo instead of $db
            $data = $query->fetchAll(PDO::FETCH_ASSOC);

            // Update data in the corresponding table in db2
            foreach ($data as $row) {
                $columns = implode(', ', array_keys($row));
                $placeholders = ':' . implode(', :', array_keys($row)); // Add the ':' prefix to placeholders

                $sql = "INSERT INTO $table ($columns) VALUES ($placeholders)";
                $stmt = $db2->prepare($sql);
                $stmt->execute($row);
            }
        }

        return $response->withJson(['message' => 'Data updated successfully in db2']);
    } catch (Exception $e) {
        return $response->withJson(['error' => $e->getMessage()], 500);
    }
});




$app->post('/getorder', function (Request $request, Response $response, array $args) {

    // Get the form data from the request body
    $formData = $request->getParsedBody();

    // Validate the form data (you can add more robust validation here)
    if (empty($formData['orderid'])) {
        return $response->withJson(['error' => true, 'message' => 'Please provide both userid and password.'], 400); // Bad Request
    }

    // Attempt to authenticate the user
    try {
        $sql = "SELECT o.*, CONCAT( '[', GROUP_CONCAT( JSON_OBJECT( 'item_id', oi.id, 'product_id', oi.product_id, 'item_name', oi.name, 'item_quantity', oi.quantity, 'item_price', oi.price, 'item_subtotal', oi.subtotal, 'item_created', oi.created ) SEPARATOR ',' ), ']' ) AS order_items FROM orders o JOIN order_items oi ON o.id = oi.order_id WHERE o.id = :orderid OR o.orderId=:orderid GROUP BY o.id;
";
        $stmt = $this->db->prepare($sql);
        $stmt->bindParam(':orderid', $formData['orderid']);
       
        $stmt->execute();
        $orderinfo = $stmt->fetch();

        // Check if a user with the provided userid exists
        if (!$orderinfo) {
            return $response->withJson(['error' => true, 'message' => 'Order not found.'], 404); // Not Found
        }
		return $response->withJson(['error' => false, 'message' => 'Order found.','orderinfo'=>$orderinfo]); // Not Found
        // Verify the provided password against the hashed password stored in the database
        
    } catch (PDOException $e) {
        return $response->withJson(['error' => true, 'message' => $e->getMessage()], 500); // Internal Server Error
    }
});
$app->post('/checkauth', function (Request $request, Response $response, array $args) {

    // Get the form data from the request body
    $formData = $request->getParsedBody();

    // Validate the form data (you can add more robust validation here)
    if (empty($formData['userid']) || empty($formData['token']) || empty($formData['username'])) {
        return $response->withJson(['error' => true, 'message' => 'Please provide both userid and password.'], 400); // Bad Request
    }

    // Attempt to authenticate the user
    try {
        $sql = "SELECT * FROM users WHERE userid = :userid && username = :username";
        $stmt = $this->db->prepare($sql);
        $stmt->bindParam(':userid', $formData['userid']);
        $stmt->bindParam(':username', $formData['username']);
        $stmt->execute();
        $user = $stmt->fetch();

        // Check if a user with the provided userid exists
        if (!$user) {
            return $response->withJson(['error' => true, 'message' => 'User not found.'], 404); // Not Found
        }

        // Verify the provided password against the hashed password stored in the database
        if ($formData['token']==$user['token']) {
            // Password is correct, user is authenticated
            $currentDate = date('Y-m-d');

            $sql = "SELECT * FROM reports WHERE type = 'clock-in' AND DATE(created_at) = :currentDate";
            $stmt = $this->db->prepare($sql);
            $stmt->bindParam(':currentDate', $currentDate);
            $stmt->execute();
            $clockInEntry = $stmt->fetch();
            
            if ($clockInEntry !== false) {
                return $response->withJson(['error' => false, 'message' => 'Login successful', 'token' => $user['token'], 'clockin' => true,'date'=>date_default_timezone_get()]);
            } else {
                return $response->withJson(['error' => false, 'message' => 'Login successful', 'token' => $user['token'], 'clockin' => false,'date'=>date_default_timezone_get()]);
            }
		   
		   
		   
        } else {
            // Password is incorrect
            return $response->withJson(['error' => true, 'message' => 'Invalid password.'], 401); // Unauthorized
        }
    } catch (PDOException $e) {
        return $response->withJson(['error' => true, 'message' => $e->getMessage()], 500); // Internal Server Error
    }
});
$app->post('/login', function (Request $request, Response $response, array $args) {

    // Get the form data from the request body
    $formData = $request->getParsedBody();

    // Validate the form data (you can add more robust validation here)
    if (empty($formData['userid']) || empty($formData['enteredPIN']) || empty($formData['username'])) {
        return $response->withJson(['error' => true, 'message' => 'Please provide both userid and password.'], 400); // Bad Request
    }

    // Attempt to authenticate the user
    try {
        $sql = "SELECT * FROM users WHERE userid = :userid && username = :username";
        $stmt = $this->db->prepare($sql);
        $stmt->bindParam(':userid', $formData['userid']);
        $stmt->bindParam(':username', $formData['username']);
        $stmt->execute();
        $user = $stmt->fetch();

        // Check if a user with the provided userid exists
        if (!$user) {
            return $response->withJson(['error' => true, 'message' => 'User not found.'], 404); // Not Found
        }

        // Verify the provided password against the hashed password stored in the database
        if ($formData['enteredPIN']==$user['user_password']) {
            // Password is correct, user is authenticated
			
			$currentDate = date("Y-m-d");

            // Check if a record already exists for the current date and user
            $checkExistingSql = "SELECT COUNT(*) FROM logs WHERE userid = :userid AND DATE(clockedin) = :currentdate";
            $checkStmt = $this->db->prepare($checkExistingSql);
            $checkStmt->bindParam(':userid', $formData['userid']);
            $checkStmt->bindParam(':currentdate', $currentDate);
            $checkStmt->execute();

            $count = $checkStmt->fetchColumn();

            if ($count == 0) {
				
		  $currentDateTime = date("Y-m-d H:i:s");

    $orderInsertSql = "INSERT INTO logs (userid, clockedin) VALUES (:userid, :currentdatetime)";
    $orderStmt = $this->db->prepare($orderInsertSql);
    $orderStmt->bindParam(':userid', $formData['userid']);
    $orderStmt->bindParam(':currentdatetime', $currentDateTime); // Corrected to match the SQL query

    if ($orderStmt->execute()) {
        return $response->withJson(['error' => false, 'message' => 'Login successful', 'token' => $user['token']]);
    } else {
        return $response->withJson(['error' => true, 'message' => 'Failed Login add logs'], 500); // Internal Server Error
    }
				
			}else{
				
			   return $response->withJson(['error' => false, 'message' => 'Login successful', 'token' => $user['token']]);	
			}
			
			
		   return $response->withJson(['error' => false, 'message' => 'Login successful', 'token' => $user['token']]);	

            // You can generate an authentication token here if needed

            // Return a success response
           
        } else {
            // Password is incorrect
            return $response->withJson(['error' => true, 'message' => 'Invalid password.'], 401); // Unauthorized
        }
    } catch (PDOException $e) {
        return $response->withJson(['error' => true, 'message' => $e->getMessage()], 500); // Internal Server Error
    }
});
$app->post('/logout', function (Request $request, Response $response, array $args) {

    // Get the form data from the request body
    $formData = $request->getParsedBody();

    // Validate the form data (you can add more robust validation here)
    if (empty($formData['userid']) || empty($formData['token'])) {
        return $response->withJson(['error' => true, 'message' => 'Please provide both userid and token.'], 400); // Bad Request
    }

    // Attempt to authenticate the user
    try {
        $sql = "SELECT * FROM users WHERE userid = :userid && token = :token";
        $stmt = $this->db->prepare($sql);
        $stmt->bindParam(':userid', $formData['userid']);
        $stmt->bindParam(':token', $formData['token']);
        $stmt->execute();
        $user = $stmt->fetch();

        // Check if a user with the provided userid exists
        if (!$user) {
            return $response->withJson(['error' => true, 'message' => 'User not found.'], 404); // Not Found
        }else{
		$currentDateTime = date("Y-m-d H:i:s");

		$orderInsertSql = "UPDATE logs set clockedout=:currentDateTime where userid=:userid";
        $orderStmt = $this->db->prepare($orderInsertSql);
        $orderStmt->bindParam(':userid', $formData['userid']);
        $orderStmt->bindParam(':currentDateTime', $currentDateTime);
   
        if ($orderStmt->execute()) {
           return $response->withJson(['error' => false, 'message' => 'Logout successful']);
        } else {
            return $response->withJson(['error' => true, 'message' => 'Failed Logout'], 500); // Internal Server Error
        }	
		}

     
    } catch (PDOException $e) {
        return $response->withJson(['error' => true, 'message' => $e->getMessage()], 500); // Internal Server Error
    }
});
$app->post('/clearcart', function (Request $request, Response $response, array $args) {

    // Get the form data from the request body
    $formData = $request->getParsedBody();

    // Validate the form data (you can add more robust validation here)
    if (empty($formData['userid'])) {
        return $response->withJson(['error' => true, 'message' => 'Please provide both userid and password.'], 400); // Bad Request
    }

    // Attempt to authenticate the user
    try {
        $sql = "Delete From carts WHERE userid = :userid";
        $stmt = $this->db->prepare($sql);
        $stmt->bindParam(':userid', $formData['userid']);
        $stmt->execute();
       

        // Check if a user with the provided userid exists
      

        // Verify the provided password against the hashed password stored in the database
        
            // Password is correct, user is authenticated

            // You can generate an authentication token here if needed

            // Return a success response
            return $response->withJson(['error' => false, 'message' => 'Cart Clear']);
        
    } catch (PDOException $e) {
        return $response->withJson(['error' => true, 'message' => $e->getMessage()], 500); // Internal Server Error
    }
});


$app->post('/search', function (Request $request, Response $response, array $args) {
    // Get the search keyword from the request body
    $data = $request->getParsedBody();
    $keyword = $data['keywords'];

    // Attempt to retrieve products matching the search keyword
    try {
        $sql = "SELECT name, image, id, price FROM products WHERE name LIKE :keyword LIMIT 16" ;
        $stmt = $this->db->prepare($sql);
        $stmt->bindValue(':keyword', '%' . $keyword . '%'); // Add wildcard % to search for partial matches
        $stmt->execute();
        $products = $stmt->fetchAll();

        // Check if any matching products were found
        if (empty($products)) {
            // No matching products found
            return $response->withJson(['error' => true, 'message' => 'No results found.'], 404);
        }

        // Return the matching products as JSON response
        return $response->withJson(['error' => false, 'data' => $products]);
    } catch (PDOException $e) {
        return $response->withJson(['error' => true, 'message' => $e->getMessage()], 500); // Internal Server Error
    }
});

$app->get('/products/search', function (Request $request, Response $response, array $args) {
    // Get search parameters from the query string
    $searchTerm = $request->getQueryParam('searchTerm');

    // Validate the search term
    if (empty($searchTerm)) {
        return $response->withJson(['error' => true, 'message' => 'Search term is required.'], 400);
    }

    // Perform the search in your database
    // Replace 'yourDatabaseTable' with the actual name of your products table
    $sql = "SELECT * FROM products WHERE upc LIKE :searchTerm OR name LIKE :searchTerm";
    
    // Bind the search term to the SQL query
    $searchTermWildcard = '%' . $searchTerm . '%'; // Create a new variable to store the wildcard search term
    $sth = $this->db->prepare($sql);
    $sth->bindParam(':searchTerm', $searchTermWildcard);

    // Execute the query
    $sth->execute();

    // Fetch the matching products
    $products = $sth->fetchAll();

    // Return the results as JSON
    return $response->withJson($products);
});

 
$app->post('/editcustomer', function (Request $request, Response $response, array $args) {
    // Get the form data from the request body
    $formData = $request->getParsedBody();
    
    // Validate the form data (you can add more robust validation here)
    if (empty($formData['customerName']) || empty($formData['id'])) {
        return $response->withJson(['error' => true, 'message' => 'Please provide both customerName and phone.'], 400); // Bad Request
    }
    
    // Attempt to authenticate the user
    try {
        $customerName = $formData['customerName'];
        $street = $formData['street'];
        $city = $formData['city'];
        $phone = $formData['phone'];
        $email = $formData['email'];
        $dob = $formData['dob'];
		$id = $formData['id'];
		$points = $formData['points'];
        
        // Check if the user with the given phone number already exists
       
        
        // Insert the customer into the 'customers' table
        $orderInsertSql = "UPDATE customers set customerName=:customerName, street=:street, city=:city, phone=:phone, email=:email, dob=:dob , points=:points where id=:id";
        $orderStmt = $this->db->prepare($orderInsertSql);
        $orderStmt->bindParam(':customerName', $customerName);
        $orderStmt->bindParam(':street', $street);
        $orderStmt->bindParam(':city', $city);
        $orderStmt->bindParam(':phone', $phone);
        $orderStmt->bindParam(':email', $email);
        $orderStmt->bindParam(':dob', $dob);
		 $orderStmt->bindParam(':points', $points);
		  $orderStmt->bindParam(':id', $id);
    
        if ($orderStmt->execute()) {
            return $response->withJson(['error' => false, 'message' => 'Customer Updated Successfully']);
        } else {
            return $response->withJson(['error' => true, 'message' => 'Failed to add customer'], 500); // Internal Server Error
        }
        
    } catch (PDOException $e) {
        return $response->withJson(['error' => true, 'message' => $e->getMessage()], 500); // Internal Server Error
    }
});


$app->post('/addcustomer', function (Request $request, Response $response, array $args) {
    // Get the form data from the request body
    $formData = $request->getParsedBody();
    
    // Validate the form data (you can add more robust validation here)
    if (empty($formData['customerName']) || empty($formData['phone'])) {
        return $response->withJson(['error' => true, 'message' => 'Please provide both customerName and phone.'], 400); // Bad Request
    }
    
    // Attempt to authenticate the user
    try {
        $customerName = $formData['customerName'];
        $street = $formData['street'];
        $city = $formData['city'];
        $phone = $formData['phone'];
        $email = $formData['email'];
        $dob = $formData['dob'];
        
        // Check if the user with the given phone number already exists
        $sql = "SELECT * FROM customers WHERE phone = :phone";
        $stmt = $this->db->prepare($sql);
        $stmt->bindParam(':phone', $phone);
        $stmt->execute();
        // Fetch the result set
        $existingCustomer = $stmt->fetch();
        
        if ($existingCustomer) {
            return $response->withJson(['error' => true, 'message' => 'Customer Already Exists'], 400); // Bad Request  
        }
        
        // Insert the customer into the 'customers' table
        $orderInsertSql = "INSERT INTO customers (customerName, street, city, phone, email, dob)
                            VALUES (:customerName, :street, :city, :phone, :email, :dob)";
        $orderStmt = $this->db->prepare($orderInsertSql);
        $orderStmt->bindParam(':customerName', $customerName);
        $orderStmt->bindParam(':street', $street);
        $orderStmt->bindParam(':city', $city);
        $orderStmt->bindParam(':phone', $phone);
        $orderStmt->bindParam(':email', $email);
        $orderStmt->bindParam(':dob', $dob);
    
        if ($orderStmt->execute()) {
            return $response->withJson(['error' => false, 'message' => 'Customer Added Successfully']);
        } else {
            return $response->withJson(['error' => true, 'message' => 'Failed to add customer'], 500); // Internal Server Error
        }
        
    } catch (PDOException $e) {
        return $response->withJson(['error' => true, 'message' => $e->getMessage()], 500); // Internal Server Error
    }
});


$app->post('/updateprice', function (Request $request, Response $response, array $args) {
    // Get the form data from the request body
    $formData = $request->getParsedBody();
    
    // Validate the form data (you can add more robust validation here)
    if (empty($formData['userid']) || empty($formData['newprice']) || empty($formData['cartid'])) {
        return $response->withJson(['error' => true, 'message' => 'Please provide both customerName and phone.'], 400); // Bad Request
    }
    
    // Attempt to authenticate the user
    try {
        $userid = $formData['userid'];
        $newprice = $formData['newprice'];
        $cartid = $formData['cartid'];
               
   
        
        // Insert the customer into the 'customers' table
        $updateCartSql = "UPDATE carts SET price = :price WHERE id = :pid";
        $updateCartStmt = $this->db->prepare($updateCartSql);
        $updateCartStmt->bindParam(':price', $newprice);
       
        $updateCartStmt->bindParam(':pid', $cartid);
        $updateCartStmt->execute();
    
        if ($updateCartStmt->execute()) {
	$sql = "SELECT c.id,c.userid, c.productid, c.quantity, 
        CASE
            WHEN c.productid = 0 THEN c.product_name
            ELSE p.name
        END AS product_name,
        c.price,c.type, p.image
        FROM carts c
        LEFT JOIN products p ON c.productid = p.id
        WHERE c.userid = :userid";

$stmt = $this->db->prepare($sql);
$stmt->bindParam(':userid', $userid);
$stmt->execute();

// Fetch the result set
$cartItems = $stmt->fetchAll();
			
            return $response->withJson(['error' => false, 'message' => 'Successfully','mydata'=>$cartItems]);
			
        } else {
            return $response->withJson(['error' => true, 'message' => 'Failed to add customer'], 500); // Internal Server Error
        }
        
    } catch (PDOException $e) {
        return $response->withJson(['error' => true, 'message' => $e->getMessage()], 500); // Internal Server Error
    }
});


$app->post('/lookup', function (Request $request, Response $response, array $args) {
    // Get the form data from the request body
    $formData = $request->getParsedBody();
    
    // Validate the form data (you can add more robust validation here)
    if (empty($formData['ordernumber'])) {
        return $response->withJson(['error' => true, 'message' => 'Please provide both customerName and phone.'], 400); // Bad Request
    }
    
    // Attempt to authenticate the user
    try {
        $ordernumber = $formData['ordernumber'];
        
               
   

	$sql = "SELECT o.id AS order_id, o.userid, o.customerid, o.orderId AS order_number, o.modeOfPayment, o.card, o.giftcard, o.cash, o.discount, o.pointsRedeem, o.totalItems, o.subtotal, o.tax, o.total, o.due, o.status, o.created_at AS order_created_at, oi.product_id, oi.name AS product_name, oi.quantity AS quantity, oi.price AS price, oi.subtotal AS item_subtotal, oi.created AS item_created FROM orders o LEFT JOIN order_items oi ON o.id = oi.order_id WHERE o.orderId = :ordernumber;";

$stmt = $this->db->prepare($sql);
$stmt->bindParam(':ordernumber', $ordernumber);
$stmt->execute();

// Fetch the result set
$cartItems = $stmt->fetchAll();
			
            return $response->withJson(['error' => false, 'message' => 'Successfully','mydata'=>$cartItems]);
			
        } 
        
    catch (PDOException $e) {
        return $response->withJson(['error' => true, 'message' => $e->getMessage()], 500); // Internal Server Error
    }
});


$app->post('/updatebills', function (Request $request, Response $response, array $args) {
    // Get the form data from the request body
    $formData = $request->getParsedBody();

    // Access the user ID, bills data, total, type, and created_at from $formData
    $userid = $formData['userid'];
    $bills = json_encode($formData['bills']); // Convert bills to JSON format
    $total = $formData['total'];
    $type = $formData['type'];
    $created_at = date('Y-m-d'); // Get the current date as created_at

    // Insert the data into the reports table
    $sql = "INSERT INTO `reports` (`user_id`, `bills`, `total`, `type`, `created_at`) VALUES (?, ?, ?, ?, ?)";
    $stmt = $this->db->prepare($sql);
    $stmt->execute([$userid, $bills, $total, $type, $created_at]);

    // Check if the insertion was successful
    if ($stmt->rowCount() > 0) {
        // Data inserted successfully. Now, let's retrieve the report with type='clock-out' and the matching date.
        $sql = "SELECT * FROM reports WHERE type = 'clock-out' AND DATE(created_at) = ?";
        $stmt = $this->db->prepare($sql);
        $stmt->execute([$created_at]);

        // Check if the report was found
        if ($stmt->rowCount() > 0) {
            $reportData = $stmt->fetch(); // Assuming you expect only one matching record
            $responseData = [
                'success' => true,
                'message' => 'Bills updated and inserted successfully',
                'report' => $reportData // Include the retrieved report data
            ];
        } else {
            $responseData = [
                'success' => true,
                'message' => 'Bills updated and inserted successfully, but no matching report found',
                'report' => null // No matching report found
            ];
        }
    } else {
        $responseData = [
            'success' => false,
            'message' => 'Error inserting data'
        ];
    }

    return $response->withJson($responseData);
});


$app->post('/checkout', function (Request $request, Response $response, array $args) {
    // Get the form data from the request body
    $formData = $request->getParsedBody();
    
    // Validate the form data (you can add more robust validation here)
    if (empty($formData['userid']) || empty($formData['modeofpayment'])) {
        return $response->withJson(['error' => true, 'message' => 'Please provide both userid and modeofpayment.'], 400); // Bad Request
    }
    
    // Attempt to authenticate the user
    try {
        $modeofpayment = $formData['modeofpayment'];
       
        $userid = $formData['userid'];
        $card=0.00;
        $cash=0.00;
        $discount=0.00;
        $pointsRedeem=0.00;
        // Get the user's cart contents
	$sql = "SELECT c.id,c.userid, c.productid, c.quantity, 
        CASE
            WHEN c.productid = 0 THEN c.product_name
            ELSE p.name
        END AS product_name,
        c.price,c.type, p.image
        FROM carts c
        LEFT JOIN products p ON c.productid = p.id
        WHERE c.userid = :userid";

$stmt = $this->db->prepare($sql);
$stmt->bindParam(':userid', $userid);
$stmt->execute();

// Fetch the result set
$cartItems = $stmt->fetchAll();
        
        // Calculate order details
        $totalItems = count($cartItems);
        $subtotal = 0;
        foreach ($cartItems as $item) {
            $subtotal += ($item['price'] * $item['quantity']);
        }
        $tax = $subtotal * 0.13; // Assuming 13% tax rate, adjust as needed
        $total = $subtotal + $tax;
        
        // Create a timestamp for the order
        $orderTimestamp = date('Y-m-d H:i:s');
        
         if($modeofpayment=="Card"){
            $card=$total;
        }
        if($modeofpayment=="Cash"){
            $cash=$total;
        }
        
        // Insert the order into the 'orders' table
        $orderInsertSql = "INSERT INTO orders (userid, orderId, totalItems, subtotal, tax, total,modeOfPayment,card,cash,discount,pointsRedeem)
                            VALUES (:userid, :orderId, :totalItems, :subtotal, :tax, :total,:mode,:card,:cash,:discount,:pointsRedeem)";
        $orderStmt = $this->db->prepare($orderInsertSql);
        $orderStmt->bindParam(':userid', $userid);
        $orderStmt->bindParam(':orderId', $orderTimestamp);
        $orderStmt->bindParam(':totalItems', $totalItems);
        $orderStmt->bindParam(':subtotal', $subtotal);
        $orderStmt->bindParam(':tax', $tax);
        $orderStmt->bindParam(':total', $total);
            $orderStmt->bindParam(':mode', $modeofpayment);
            
            $orderStmt->bindParam(':card', $card);
        $orderStmt->bindParam(':cash', $cash);
            $orderStmt->bindParam(':discount', $discount);
             $orderStmt->bindParam(':pointsRedeem', $pointsRedeem);
        $orderStmt->execute();
        
        // Get the order ID (last inserted ID)
        $orderId = $this->db->lastInsertId();
        
        // Insert order items into the 'order_items' table
        foreach ($cartItems as $item) {
            $subx=$item['price'] * $item['quantity'];
             $orderItemInsertSql = "INSERT INTO order_items (order_id, product_id, name, quantity, price, subtotal)
                    VALUES (:orderId, :product_id, :name, :quantity, :price, :subtotal)";
            $orderItemStmt = $this->db->prepare($orderItemInsertSql);
            $orderItemStmt->bindParam(':orderId', $orderId);
            $orderItemStmt->bindParam(':product_id', $item['productid']);
            $orderItemStmt->bindParam(':name', $item['product_name']);
            $orderItemStmt->bindParam(':quantity', $item['quantity']);
            $orderItemStmt->bindParam(':price', $item['price']);
            $orderItemStmt->bindParam(':subtotal', $subx);
            $orderItemStmt->execute();
        }
        
        // Clear the user's cart (you need to implement this)
        // You can add a function to clear the user's cart based on their userid
         $sql = "Delete From carts WHERE userid = :userid";
        $stmt = $this->db->prepare($sql);
        $stmt->bindParam(':userid', $formData['userid']);
        $stmt->execute();
        
        return $response->withJson(['error' => false, 'message' => 'Order placed successfully.', 'order_id' => $orderId]);
        
    } catch (PDOException $e) {
        return $response->withJson(['error' => true, 'message' => $e->getMessage()], 500); // Internal Server Error
    }
});

$app->post('/manualcheckout', function (Request $request, Response $response, array $args) {
    // Get the form data from the request body
    $formData = $request->getParsedBody();
    
    // Validate the form data (you can add more robust validation here)
    if (empty($formData['userid']) || empty($formData['payments'])) {
        return $response->withJson(['error' => true, 'message' => 'Please provide both userid and modeofpayment.'], 400); // Bad Request
    }
    
    // Attempt to authenticate the user
    try {
        
        $card = 0.00;
        $cash = 0.00;
        $pointsRedeem = 0.00;
        $giftcard=0.00;
        $due=0.00;
		$changeamount=0.00;
		
		$status='Complete';
        $fdiscount = $formData['finaldiscount'];
        $fhst = $formData['finalhst'];
        $fsubtotal = $formData['finalsub'];
        $ftotal = $formData['finaltotal'];
        $fcustomerid = $formData['customerid'];
        $userid = $formData['userid'];       
		$changeamount = $formData['changeamount'];       

        $payments = json_decode($formData['payments'], true); // Decode JSON 
        $jsonPayments = json_encode($payments);
        
		
		
		// Your existing code for retrieving form data

if ($formData['ordernumber']!="") {
    // Fetch the existing payment data and modeOfPayment from the order
    $sql = "SELECT card, cash, giftcard, pointsRedeem, due,changeamount, modeOfPayment FROM orders WHERE orderId = :ordernumber";
    $dueStmt = $this->db->prepare($sql);
    $dueStmt->bindParam(':ordernumber', $formData['ordernumber']);
    $dueStmt->execute();
    $existingPaymentData = $dueStmt->fetch();

    // Combine the existing modeOfPayment and new payments into an array

	
	
	$existingPayments = [];

// Check if the "modeOfPayment" field is not empty and is a JSON array
if (!empty($existingPaymentData['modeOfPayment'])) {
    $decodedPayments = json_decode($existingPaymentData['modeOfPayment'], true);

    // Check if decoding was successful and it's an array
    if (is_array($decodedPayments)) {
        $existingPayments = $decodedPayments;
    }
}


	
    foreach ($payments as $payment) {
        if (isset($payment['modeofpayment']) && isset($payment['amount'])) {
            $existingPayments[] = $payment;
        }
    }

    // Encode the combined payments as JSON
    $jsonPayments = json_encode($existingPayments);

    // Update the payment fields
   
$card = $existingPaymentData['card'];

$changeamount = $existingPaymentData['changeamount']+$changeamount; 

$cash = $existingPaymentData['cash'];
$pointsRedeem = $existingPaymentData['pointsRedeem'];
$giftcard = $existingPaymentData['giftcard'];


    foreach ($payments as $payment) {
        if ($payment['modeofpayment'] === "Credit/Debit Card") {
			
            $card += (float)$payment['amount'];
        } elseif ($payment['modeofpayment'] === "Cash") {
			
            $cash += (float)$payment['amount'];
        } elseif ($payment['modeofpayment'] === "Points Redeem") {
			
            $pointsRedeem += (float)$payment['amount'];
        } elseif ($payment['modeofpayment'] === "Gift Card") {
			
            $giftcard += (float)$payment['amount'];
        } elseif ($payment['modeofpayment'] === "Pay Later") {
			$due = $existingPaymentData['due'];

            $due += (float)$payment['amount'];
            $status = 'Pay Later';
        }
    }
	
$orderId=$formData['ordernumber'];
    // Your existing code for updating the order
    $sql = "UPDATE orders SET userid = :userid, customerid = :customerid,changeamount=:changeamount, modeOfPayment = :mode, card = :card, cash = :cash, giftcard = :giftcard, discount = :discount, pointsRedeem = :pointsRedeem, status = :status, due = :due WHERE orderId = :orderId";

    $orderStmt = $this->db->prepare($sql);
    $orderStmt->bindParam(':userid', $userid);
    $orderStmt->bindParam(':customerid', $fcustomerid);
	 $orderStmt->bindParam(':changeamount', $changeamount);
    $orderStmt->bindParam(':mode', $jsonPayments);
    $orderStmt->bindParam(':card', $card);
    $orderStmt->bindParam(':cash', $cash);
    $orderStmt->bindParam(':giftcard', $giftcard);
    $orderStmt->bindParam(':discount', $fdiscount);
    $orderStmt->bindParam(':pointsRedeem', $pointsRedeem);
    $orderStmt->bindParam(':status', $status);
    $orderStmt->bindParam(':due', $due);
    $orderStmt->bindParam(':orderId', $formData['ordernumber']);
    $orderStmt->execute();
}
else{
        
        foreach ($payments as $payment) {
    if (isset($payment['modeofpayment']) && isset($payment['amount'])) {
        if ($payment['modeofpayment'] === "Credit/Debit Card") {
            // Add the amount to the $card variable
            $card += (float)$payment['amount'];
        } elseif ($payment['modeofpayment'] === "Cash") {
            // Add the amount to the $cash variable
            $cash += (float)$payment['amount'];
        } elseif ($payment['modeofpayment'] === "Points Redeem") {
            // Add the amount to the $pointsRedeem variable
            $pointsRedeem += (float)$payment['amount'];
        }
        elseif ($payment['modeofpayment'] === "Gift Card") {
            // Add the amount to the $pointsRedeem variable
            $giftcard += (float)$payment['amount'];
        }
		 elseif ($payment['modeofpayment'] === "Pay Later") {
            // Add the amount to the $pointsRedeem variable
            $due += (float)$payment['amount'];
			$status='Pay Later';
        }
    }
}
        
        // Get the user's cart contents
	$sql = "SELECT c.id,c.userid, c.productid, c.quantity, 
        CASE
            WHEN c.productid = 0 THEN c.product_name
            ELSE p.name
        END AS product_name,
        c.price,c.type, p.image
        FROM carts c
        LEFT JOIN products p ON c.productid = p.id
        WHERE c.userid = :userid";

$stmt = $this->db->prepare($sql);
$stmt->bindParam(':userid', $userid);
$stmt->execute();

// Fetch the result set
$cartItems = $stmt->fetchAll();
        
        // Calculate order details
        $totalItems = count($cartItems);
        $subtotal = 0;
        foreach ($cartItems as $item) {
            $subtotal += ($item['price'] * $item['quantity']);
        }
        $tax = $subtotal * 0.13; // Assuming 13% tax rate, adjust as needed
        $total = $subtotal + $tax;
        
        // Create a timestamp for the order
		
			$getLastOrderNumberSql = "SELECT id FROM orders order by id DESC limit 1";
			$getOrderNumberStmt = $this->db->prepare($getLastOrderNumberSql);
			$getOrderNumberStmt->execute();
			$lastOrderNumber = $getOrderNumberStmt->fetch();
			$newOrderNumber = "910".$lastOrderNumber['id'] + 1;
			
        
        
        
        // Insert the order into the 'orders' table
        $orderInsertSql = "INSERT INTO orders (userid,changeamount,customerid, orderId, totalItems, subtotal, tax, total,modeOfPayment,card,cash,giftcard,discount,pointsRedeem,status,due)
                            VALUES (:userid,:changeamount, :customerid,:orderId, :totalItems, :subtotal, :tax, :total,:mode,:card,:cash,:giftcard,:discount,:pointsRedeem,:status,:due)";
        $orderStmt = $this->db->prepare($orderInsertSql);
        $orderStmt->bindParam(':userid', $userid);
		 $orderStmt->bindParam(':changeamount', $changeamount);
         $orderStmt->bindParam(':customerid', $fcustomerid);
        $orderStmt->bindParam(':orderId', $newOrderNumber);
        $orderStmt->bindParam(':totalItems', $totalItems);
        $orderStmt->bindParam(':subtotal', $fsubtotal);
        $orderStmt->bindParam(':tax', $fhst);
        $orderStmt->bindParam(':total', $ftotal);
            $orderStmt->bindParam(':mode', $jsonPayments);
            
            $orderStmt->bindParam(':card', $card);
        $orderStmt->bindParam(':cash', $cash);
        $orderStmt->bindParam(':giftcard', $giftcard);
            $orderStmt->bindParam(':discount', $fdiscount);
             $orderStmt->bindParam(':pointsRedeem', $pointsRedeem);
			  $orderStmt->bindParam(':status', $status);
			   $orderStmt->bindParam(':due', $due);
        $orderStmt->execute();
        
        // Get the order ID (last inserted ID)
        $orderId = $this->db->lastInsertId();
        
        // Insert order items into the 'order_items' table
        foreach ($cartItems as $item) {
			if($item['productid']==''){
				$item['productid']=0;
			}
            $subx=$item['price'] * $item['quantity'];
            $orderItemInsertSql = "INSERT INTO order_items (order_id, product_id, name, quantity, price, subtotal)
                    VALUES (:orderId, :product_id, :name, :quantity, :price, :subtotal)";
            $orderItemStmt = $this->db->prepare($orderItemInsertSql);
            $orderItemStmt->bindParam(':orderId', $orderId);
            $orderItemStmt->bindParam(':product_id', $item['productid']);
            $orderItemStmt->bindParam(':name', $item['product_name']);
            $orderItemStmt->bindParam(':quantity', $item['quantity']);
            $orderItemStmt->bindParam(':price', $item['price']);
            $orderItemStmt->bindParam(':subtotal', $subx);
            $orderItemStmt->execute();
        }

        // Clear the user's cart (you need to implement this)
        // You can add a function to clear the user's cart based on their userid
         $sql = "Delete From carts WHERE userid = :userid";
        $stmt = $this->db->prepare($sql);
        $stmt->bindParam(':userid', $formData['userid']);
        $stmt->execute();
        
		
		// Fetch the order items from the database (you may have already done this)
$sql = "SELECT product_id, quantity FROM order_items WHERE order_id = :orderId";
$orderItemsStmt = $this->db->prepare($sql);
$orderItemsStmt->bindParam(':orderId', $orderId);
$orderItemsStmt->execute();
$orderItems = $orderItemsStmt->fetchAll();
		
      foreach ($orderItems as $orderItem) {
    $productId = $orderItem['product_id'];
    $orderedQuantity = $orderItem['quantity'];
if($orderItem['product_id']!=="0"){
    // Fetch the current stock of the product
    $sql = "SELECT product_stock FROM products WHERE id = :productId";
    $stockStmt = $this->db->prepare($sql);
    $stockStmt->bindParam(':productId', $productId);
    $stockStmt->execute();
    $currentStock = $stockStmt->fetch()['product_stock'];

    // Calculate the new stock after the order
    $newStock = $currentStock - $orderedQuantity;

    // Update the product stock in the database
    $updateStockSql = "UPDATE products SET product_stock = :newStock WHERE id = :productId";
    $updateStockStmt = $this->db->prepare($updateStockSql);
    $updateStockStmt->bindParam(':newStock', $newStock);
    $updateStockStmt->bindParam(':productId', $productId);
    $updateStockStmt->execute();
}
	
}
        }
		
		

		
		
		
$sql = "SELECT o.orderId AS order_id,o.changeamount,o.type,o.totalItems,o.created_at AS order_date,o.userid AS user_id,o.customerid AS customer_id,o.status AS order_status,o.card AS card_payment,
        o.cash AS cash_payment,o.discount AS order_discount,o.pointsRedeem AS points_redeem,o.due AS due_amount,o.subtotal AS subtotal_amount,o.tax AS tax_amount,
        o.total AS total_amount,oi.product_id as prodid,oi.name AS product_name,oi.quantity AS quantity,oi.price AS unit_price,oi.subtotal AS line_total FROM orders o LEFT JOIN order_items oi ON o.id = oi.order_id
    WHERE o.id = :orderId OR o.orderId=:orderId";		
$orderStmt = $this->db->prepare($sql);
$orderStmt->bindParam(':orderId', $orderId);
$orderStmt->execute();

$allorderData = $orderStmt->fetchAll();

// Initialize the $orderData with the first row, if available
$orderData = reset($allorderData);

// Construct the receipt data in the desired format
$receiptData = [
    'order_id' => $orderData['order_id'] ?? null,
    'order_date' => $orderData['order_date'] ?? null,
    'user_id' => $orderData['user_id'] ?? null,
    'customer_id' => $orderData['customer_id'] ?? null,
    'order_status' => $orderData['order_status'] ?? null,
    'card_payment' => $orderData['card_payment'] ?? null,
    'cash_payment' => $orderData['cash_payment'] ?? null,
    'order_discount' => $orderData['order_discount'] ?? null,
    'points_redeem' => $orderData['points_redeem'] ?? null,
    'due_amount' => $orderData['due_amount'] ?? null,
    'subtotal_amount' => $orderData['subtotal_amount'] ?? null,
    'tax_amount' => $orderData['tax_amount'] ?? null,
    'total_amount' => $orderData['total_amount'] ?? null,
    'change_amount' => $orderData['changeamount'] ?? null,
    'totalItems' => $orderData['totalItems'] ?? null,
    'items' => [],
];


$itemsx = [];
$type='Product';
foreach ($allorderData as $row) {
	
	if($row['prodid']=="0" && $row['type']=="product"){
		$type='Service';
	}
	if($row['type']!="product"){
		$type='Phone';
	}
	
    $itemsx[] = [
        'product_name' => $row['product_name'],
        'quantity' => $row['quantity'],
        'unit_price' => $row['unit_price'],
        'line_total' => $row['line_total'],
    ];
}
$receiptData['items'] = $itemsx;





return $response->withJson(['error' => false, 'message' => 'Order placed successfully.', 'order_id' => $orderId, 'receipt' => $receiptData,'type'=>$type]);

		
    } catch (PDOException $e) {
        return $response->withJson(['error' => true, 'message' => $e->getMessage()], 500); // Internal Server Error
    }
});

$app->post('/updatecart', function (Request $request, Response $response, array $args) {

    // Get the form data from the request body
    $formData = $request->getParsedBody();

    // Validate the form data (you can add more robust validation here)
    if (empty($formData['pid']) || empty($formData['userid'])) {
        return $response->withJson(['error' => true, 'message' => 'Please provide both type and id.'], 400); // Bad Request
    }

    // Attempt to authenticate the user
    try {
         $pid=$formData['pid'];
      
        $quantity=$formData['quantity'];
        $userid=$formData['userid'];

if($quantity==0){
    $updateCartSql = "Delete from carts WHERE id = :pid and userid = :userid";
        $updateCartStmt = $this->db->prepare($updateCartSql);
        
        $updateCartStmt->bindParam(':pid', $pid);
        $updateCartStmt->bindParam(':userid', $userid);
		$updateCartStmt->execute();
      
}else{
    
       
        
        $updateCartSql = "UPDATE carts SET quantity = :quantity WHERE id = :pid and userid = :userid";
        $updateCartStmt = $this->db->prepare($updateCartSql);
        $updateCartStmt->bindParam(':quantity', $quantity);
        $updateCartStmt->bindParam(':pid', $pid);
        $updateCartStmt->bindParam(':userid', $userid);
        $updateCartStmt->execute();
        
        
}
    
    if ($updateCartStmt) {
   $sql = "SELECT c.id,c.userid, c.productid, c.quantity, 
        CASE
            WHEN c.productid = 0 THEN c.product_name
            ELSE p.name
        END AS product_name,
        c.price,c.type, p.image
        FROM carts c
        LEFT JOIN products p ON c.productid = p.id
        WHERE c.userid = :userid";

$stmt = $this->db->prepare($sql);
$stmt->bindParam(':userid', $userid);
$stmt->execute();

// Fetch the result set
$data = $stmt->fetchAll();
     
  
  return $this->response->withJson(['error' => false, 'mydata' => $data]);
    } else {
        // If the cart entry doesn't exist, insert a new row
     return $this->response->withJson(['error' => true, 'mydata' => 'Error Update Cart']); 
    }
        
        
  
    } catch (PDOException $e) {
        return $response->withJson(['error' => true, 'message' => $e->getMessage()], 500); // Internal Server Error
    }
});



$app->post('/getdata', function (Request $request, Response $response, array $args) {

    // Get the form data from the request body
    $formData = $request->getParsedBody();

  

    // Attempt to authenticate the user
    try {
        $type=$formData['type'];
        $mytype=$type;
        $hide='';
        $id=$formData['id'];
        $userid=$formData['userid'];
       
        if($type=="category"){
        $sql = "SELECT id,name,image,price FROM products WHERE category_id = :id and active=1";
        $stmt = $this->db->prepare($sql);
        $stmt->bindParam(':id', $formData['id']);
        $stmt->execute();
        $data = $stmt->fetchAll(); 
       
        }
        if($type=="product"){
			
			if($id===0){
				$insertCartSql = "INSERT INTO carts (userid, productid, quantity,price,product_name) VALUES (:userid, :productid, :quantity,:price,:product_name)";
        $insertCartStmt = $this->db->prepare($insertCartSql);
        $insertCartStmt->bindParam(':userid', $userid);
        $insertCartStmt->bindParam(':productid', $id);
        $initialQuantity = 1;
        $insertCartStmt->bindParam(':quantity', $initialQuantity);
		$insertCartStmt->bindParam(':price', $formData['price']);
		$insertCartStmt->bindParam(':product_name', $formData['name']);

        $insertCartStmt->execute();
				
			}else{
        
    $cartCheckSql = "SELECT * FROM carts WHERE userid = :userid AND productid = :productid";
    $cartCheckStmt = $this->db->prepare($cartCheckSql);
    $cartCheckStmt->bindParam(':userid', $userid);
    $cartCheckStmt->bindParam(':productid', $id);
    $cartCheckStmt->execute();
    $existingCartItem = $cartCheckStmt->fetch();
	
	
	$pinfo = "SELECT id,name,price FROM products WHERE id = :productid";
    $pinfoStmt = $this->db->prepare($pinfo);
   
    $pinfoStmt->bindParam(':productid', $id);
    $pinfoStmt->execute();
    $pdata = $pinfoStmt->fetch();
    
    if ($existingCartItem) {
        // If the cart entry already exists, increment the quantity
        $newQuantity = $existingCartItem['quantity'] + 1;
        $updateCartSql = "UPDATE carts SET quantity = :quantity WHERE id = :cartid";
        $updateCartStmt = $this->db->prepare($updateCartSql);
        $updateCartStmt->bindParam(':quantity', $newQuantity);
        $updateCartStmt->bindParam(':cartid', $existingCartItem['id']);
        $updateCartStmt->execute();
    } else {
        // If the cart entry doesn't exist, insert a new row
        $insertCartSql = "INSERT INTO carts (userid, productid, quantity,price,product_name) VALUES (:userid, :productid, :quantity,:price,:product_name)";
        $insertCartStmt = $this->db->prepare($insertCartSql);
        $insertCartStmt->bindParam(':userid', $userid);
        $insertCartStmt->bindParam(':productid', $id);
        $initialQuantity = 1;
        $insertCartStmt->bindParam(':quantity', $initialQuantity);
		 $insertCartStmt->bindParam(':price', $pdata['price']);
		 $insertCartStmt->bindParam(':product_name', $pdata['name']);
        $insertCartStmt->execute();
    }
	
			}
        
         $sql = "SELECT c.id,c.userid, c.productid, c.quantity, 
        CASE
            WHEN c.productid = 0 THEN c.product_name
            ELSE p.name
        END AS product_name,
        c.price,c.type, p.image
        FROM carts c
        LEFT JOIN products p ON c.productid = p.id
        WHERE c.userid = :userid";

$stmt = $this->db->prepare($sql);
$stmt->bindParam(':userid', $userid);
$stmt->execute();

// Fetch the result set
$data = $stmt->fetchAll();
   
        }
  
 return $this->response->withJson(['error' => false, 'mydata' => $data,'type'=>$mytype,'hide'=>$hide]);
  
    } catch (PDOException $e) {
        return $response->withJson(['error' => true, 'message' => $e->getMessage()], 500); // Internal Server Error
    }
});


$app->get('/state-data/{countryCode}', function (Request $request, Response $response, array $args)
{
    $countryCode = $args['countryCode'];
    
    try
    {
        // Connect to MySQL database
    
        $sql1 = "SELECT * FROM states WHERE country_code = ?";
        $sth1 = $this
            ->db
            ->prepare($sql1);
        $sth1->bindParam(1, $countryCode);
        $sth1->execute();
        $row1 = $sth1->fetchAll();
        
        // Fetch and return data as JSON
       
        return $this->response->withJson(['error' => false, 'state' => $row1]);
    }
    catch(PDOException $e)
    {
        return $this->response->withJson(['error' => true, 'message' => $e->getMessage()]);
    }
    catch(Exception $e)
    {
        return $this->response->withJson(['error' => true, 'message' => $e->getMessage()]);
    }

});

$app->get('/categories', function (Request $request, Response $response, array $args)
{
   
    
    try
    {
        // Connect to MySQL database
    
        $sql1 = "SELECT name,image,id FROM categories WHERE parent_id = 0";
        $sth1 = $this
            ->db
            ->prepare($sql1);
        $sth1->execute();
        $row1 = $sth1->fetchAll();
        
        // Fetch and return data as JSON
       
        return $this->response->withJson(['error' => false, 'categories' => $row1]);
    }
    catch(PDOException $e)
    {
        return $this->response->withJson(['error' => true, 'message' => $e->getMessage()]);
    }
    catch(Exception $e)
    {
        return $this->response->withJson(['error' => true, 'message' => $e->getMessage()]);
    }

});

$app->post('/import-products', function ($request, $response, $args) {
    $uploadedFiles = $request->getUploadedFiles();

    if (!isset($uploadedFiles['file'])) {
        return $response->withJson(['error' => true, 'message' => 'CSV file not found'], 400);
    }

    $csvFile = $uploadedFiles['file'];

    if ($csvFile->getError() !== UPLOAD_ERR_OK) {
        return $response->withJson(['error' => true, 'message' => 'Failed to upload the CSV file'], 500);
    }

    $uploadDirectory =  '../public/csv/';

    $filename = $csvFile->getClientFilename();
    $csvFile->moveTo($uploadDirectory . '/' . $filename);

    // Now, you can read and process the CSV file
    // You may use the League\Csv package or native PHP functions to read and insert data into the database
    // Handle errors during this process and return appropriate responses

    // Sample code for processing CSV data (using League\Csv for illustration)
    $csv = Reader::createFromPath($uploadDirectory . '/' . $filename, 'r');
    $csv->setHeaderOffset(0);
    $records = $csv->getRecords();

    $db = $this->db; // Assuming you have a PDO instance available

    try {
        foreach ($records as $record) {
            // Check if the category name exists in the categories table
            $categoryName = $record['category_name'];
            $categoryId = getCategoryIDByName($db, $categoryName);

            // If the category doesn't exist, insert it and get its ID
            if ($categoryId === null) {
                $categoryId = insertCategory($db, $categoryName);
            }

            // Insert the product
            $sql = "INSERT INTO products (category_id, name, sku, upc, price, product_stock, image, active)
                    VALUES (:category_id, :name, :sku, :upc, :price, :product_stock, :image, :active)";

            $stmt = $db->prepare($sql);
            $stmt->execute([
                ':category_id' => $categoryId,
                ':name' => $record['name'],
                ':sku' => $record['sku'],
                ':upc' => $record['upc'],
                ':price' => !empty($record['price']) ? $record['price'] : 50,
                ':product_stock' => !empty($record['product_stock']) ? $record['product_stock'] : 500,
                ':image' => !empty($record['image']) ? $record['image'] : 'no-image.jpg',
                ':active' => !empty($record['active']) ? $record['active'] : 0,
            ]);
        }

        return $response->withJson(['error' => false, 'message' => 'Data imported successfully']);
    } catch (PDOException $e) {
        return $response->withJson(['error' => true, 'message' => 'Error inserting data: ' . $e->getMessage()], 500);
    }
});

// Function to get the category ID by name
function getCategoryIDByName($db, $categoryName) {
    $sql = "SELECT id FROM categories WHERE name = :name LIMIT 1";
    $stmt = $db->prepare($sql);
    $stmt->execute([':name' => $categoryName]);
    $result = $stmt->fetch(PDO::FETCH_ASSOC);
    return $result ? $result['id'] : null;
}

// Function to insert a new category and get its generated ID
function insertCategory($db, $categoryName) {
    $sql = "INSERT INTO categories (name) VALUES (:name)";
    $stmt = $db->prepare($sql);
    $stmt->execute([':name' => $categoryName]);
    return $db->lastInsertId();
}




$app->post('/import-categories', function ($request, $response, $args) {
    $uploadedFiles = $request->getUploadedFiles();

    if (!isset($uploadedFiles['file'])) {
        return $response->withJson(['error' => true, 'message' => 'CSV file not found'], 400);
    }

    $csvFile = $uploadedFiles['file'];
	
    if ($csvFile->getError() !== UPLOAD_ERR_OK) {
        return $response->withJson(['error' => true, 'message' => 'Failed to upload the CSV file'], 500);
    }

    $uploadDirectory =  '../public/csv/';


    $filename = $csvFile->getClientFilename();
    $csvFile->moveTo($uploadDirectory . '/' . $filename);

    // Now, you can read and process the CSV file
    // You may use the League\Csv package or native PHP functions to read and insert data into the database
    // Handle errors during this process and return appropriate responses

    // Sample code for processing CSV data (using League\Csv for illustration)
    $csv = Reader::createFromPath($uploadDirectory . '/' . $filename, 'r');
    $csv->setHeaderOffset(0);
    $records = $csv->getRecords();

    $db = $this->db; // Assuming you have a PDO instance available

    try {
        foreach ($records as $record) {
            // Assuming 'products' is the table name
            $sql = "INSERT INTO categories (id, name, active)
                    VALUES (:id, :name,:active)";

            $stmt = $db->prepare($sql);
            $stmt->execute([
                ':id' => $record['id'],
                ':name' => $record['name'],
                ':active' => !empty($record['active']) ? $record['active'] : 0,
            ]);
        }

        return $response->withJson(['error' => false, 'message' => 'Data imported successfully']);
    } catch (PDOException $e) {
        return $response->withJson(['error' => true, 'message' => 'Error inserting data: ' . $e->getMessage()], 500);
    }
});
$app->get('/categories-and-products', function (Request $request, Response $response) {
    try {
        $userid = $request->getQueryParam('userid');
        
        $sql = "SELECT categories.id, categories.name, products.id AS product_id, products.image, products.name AS product_name, products.price, products.category_id FROM categories INNER JOIN products on categories.id=products.category_id where products.active='1' and categories.active='1';";
        $stmt = $this->db->prepare($sql);
        $stmt->execute();
        $rows = $stmt->fetchAll();

        // Initialize arrays for categories and products
        $categories = [];
        $products = [];

        // Loop through the rows to organize data
        foreach ($rows as $row) {
            // Check if the category is already added
            if (!array_key_exists($row['id'], $categories)) {
                $categories[$row['id']] = [
                    'id' => $row['id'],
                    'name' => $row['name'],
                ];
            }

            // Add the product to the products array
            $products[] = [
                'product_id' => $row['product_id'],
                'image' => $row['image'],
                'product_name' => $row['product_name'],
                'price' => $row['price'],
                'category_id' => $row['category_id'],
            ];
        }

        // Fetch the user's cart items
	$sql = "SELECT c.id,c.userid, c.productid, c.quantity, 
        CASE
            WHEN c.productid = 0 THEN c.product_name
            ELSE p.name
        END AS product_name,
        c.price,c.type, p.image
        FROM carts c
        LEFT JOIN products p ON c.productid = p.id
        WHERE c.userid = :userid";

$stmt = $this->db->prepare($sql);
$stmt->bindParam(':userid', $userid);
$stmt->execute();

// Fetch the result set
$cartItems = $stmt->fetchAll();

        // Combine categories and products into a single response
        $data = [
            'categories' => array_values($categories), // Convert associative array to indexed array
            'products' => $products,
        ];

        // Return the combined data as JSON
        return $response->withJson(['error' => false, 'data' => $data, 'carts' => $cartItems]);
    } catch (Exception $e) {
        // Handle exceptions if needed
        return $response->withJson(['error' => true, 'message' => $e->getMessage()], 500);
    }
});

$app->get('/default', function (Request $request, Response $response, array $args)
{
   
    
    try
    {
		     $userid = $request->getQueryParam('userid'); 
        
        $sql1x = "SELECT name,id FROM categories order by categoryOrder ASC";
        $sth1x = $this
            ->db
            ->prepare($sql1x);
        $sth1x->execute();
        $row1x = $sth1x->fetchAll();
        // Connect to MySQL database
    
     
        
        $sql2 = "SELECT name,image,id,price FROM products WHERE category_id = 1 and active=1";
        $sth2 = $this
            ->db
            ->prepare($sql2);
        $sth2->execute();
        $row2 = $sth2->fetchAll();
		
		$sql = "SELECT c.id,c.userid, c.productid, c.quantity, 
        CASE
            WHEN c.productid = 0 THEN c.product_name
            ELSE p.name
        END AS product_name,
        c.price,c.type, p.image
        FROM carts c
        LEFT JOIN products p ON c.productid = p.id
        WHERE c.userid = :userid";

$stmt = $this->db->prepare($sql);
$stmt->bindParam(':userid', $userid);
$stmt->execute();

// Fetch the result set
$cartItems = $stmt->fetchAll();
        
        // Fetch and return data as JSON
       
        return $this->response->withJson(['error' => false, 'categories' => $row1x,'products'=>$row2,'carts'=>$cartItems]);
    }
    catch(PDOException $e)
    {
        return $this->response->withJson(['error' => true, 'message' => $e->getMessage()]);
    }
    catch(Exception $e)
    {
        return $this->response->withJson(['error' => true, 'message' => $e->getMessage()]);
    }

});


$app->post('/subcategories', function (Request $request, Response $response, array $args)
{
    $input = $request->getParsedBody();
    try
    {
    
        $category = $input['category'];
        $sql1 = "SELECT * from subcategories where category=?";
        $sth1 = $this
            ->db
            ->prepare($sql1);
        $sth1->bindParam(1, $category);
        $sth1->execute();
        $row1 = $sth1->fetchAll();

     
   

        return $this
            ->response
            ->withJson(['error' => false, 'message' => 'Home Data', 'stats' => $row1,'category'=>$category]);
    }
    catch(PDOException $e)
    {
        return $this
            ->response
            ->withJson(['error' => true, 'message' => $e->getMessage() ]);
    }
    catch(Exception $e)
    {
        return $this
            ->response
            ->withJson(['error' => true, 'message' => $e->getMessage() ]);
    }
});

//admin functions 
$app->get('/get-available-phones', function (Request $request, Response $response, array $args) {
    try {
        $pdo = $this->db; // Assuming you've set up your database connection

        // Query to retrieve general settings
        $sql = "SELECT * FROM phones where status='0'";
        $stmt = $pdo->query($sql);
        $settings = $stmt->fetchAll();

        return $response->withJson($settings);
    } catch (PDOException $e) {
        return $response->withJson(['error' => true, 'message' => $e->getMessage()], 500);
    } catch (Exception $e) {
        return $response->withJson(['error' => true, 'message' => $e->getMessage()], 500);
    }
});
$app->get('/get-general-settings', function (Request $request, Response $response, array $args) {
    try {
        $pdo = $this->db; // Assuming you've set up your database connection

        // Query to retrieve general settings
        $sql = "SELECT storename, storenumber,printername, address, city, state, postalcode, phone,email, timing1, timing2, timing3, repairfooter, salefooter, phonefooter FROM settings";
        $stmt = $pdo->query($sql);
        $settings = $stmt->fetch(PDO::FETCH_ASSOC);

        return $response->withJson($settings);
    } catch (PDOException $e) {
        return $response->withJson(['error' => true, 'message' => $e->getMessage()], 500);
    } catch (Exception $e) {
        return $response->withJson(['error' => true, 'message' => $e->getMessage()], 500);
    }
});

$app->post('/update-general-settings', function (Request $request, Response $response, array $args) {
    try {
        $pdo = $this->db; // Assuming you've set up your database connection

        // Extract the JSON data from the request body
        $generalSettings = $request->getParsedBody();
       

        // Prepare and execute an SQL statement to update the general settings
        $sql = "UPDATE settings
                SET 
                storename = :storename,
                storenumber = :storenumber,
                address = :address,
                city = :city,
                state = :state,
                postalcode = :postalcode,
                phone = :phone,
				email = :email,
                timing1 = :timing1,
                timing2 = :timing2,
                timing3 = :timing3,
                repairfooter = :repairfooter,
                salefooter = :salefooter,
                phonefooter = :phonefooter,
				printername = :printername,
				modified=NOW()";

        $stmt = $pdo->prepare($sql);

        $stmt->bindParam(':storename', $generalSettings['storename']);
        $stmt->bindParam(':storenumber', $generalSettings['storenumber']);
        $stmt->bindParam(':address', $generalSettings['address']);
        $stmt->bindParam(':city', $generalSettings['city']);
        $stmt->bindParam(':state', $generalSettings['state']);
        $stmt->bindParam(':postalcode', $generalSettings['postalcode']);
        $stmt->bindParam(':phone', $generalSettings['phone']);
		$stmt->bindParam(':email', $generalSettings['email']);
        $stmt->bindParam(':timing1', $generalSettings['timing1']);
        $stmt->bindParam(':timing2', $generalSettings['timing2']);
        $stmt->bindParam(':timing3', $generalSettings['timing3']);
        $stmt->bindParam(':repairfooter', $generalSettings['repairfooter']);
        $stmt->bindParam(':salefooter', $generalSettings['salefooter']);
        $stmt->bindParam(':phonefooter', $generalSettings['phonefooter']);
		$stmt->bindParam(':printername', $generalSettings['printername']);

        $stmt->execute();

        return $response->withJson(['message' => 'General settings updated successfully']);
    } catch (PDOException $e) {
        return $response->withJson(['error' => true, 'message' => $e->getMessage()], 500);
    } catch (Exception $e) {
        return $response->withJson(['error' => true, 'message' => $e->getMessage()], 500);
    }
});



$app->get('/supercategories', function (Request $request, Response $response, array $args) {
    try {
        $pdo = $this->db; // Assuming you've set up your database connection

        // Query to retrieve all categories
        $sql = "SELECT * FROM categories where active='1'";
        $stmt = $pdo->query($sql);
        $categories = $stmt->fetchAll();

        return $response->withJson($categories);
    } catch (PDOException $e) {
        return $response->withJson(['error' => true, 'message' => $e->getMessage()], 500);
    } catch (Exception $e) {
        return $response->withJson(['error' => true, 'message' => $e->getMessage()], 500);
    }
});
$app->get('/getsupercustomers', function (Request $request, Response $response, array $args)
{
    try
    {
        
      
        $sql = "SELECT * FROM users";
        $stmt = $this->db->prepare($sql);
    
        $stmt->execute();
        $user = $stmt->fetchAll();
        
        
        return $this
            ->response
            ->withJson(['error' => false, 'message' => "APIs are working... Yipee",'customers'=>$user]);
    }
    catch(PDOException $e)
    {
        return $this
            ->response
            ->withJson(['error' => true, 'message' => $e->getMessage() ]);
    }
    catch(Exception $e)
    {
        return $this
            ->response
            ->withJson(['error' => true, 'message' => $e->getMessage() ]);
    }

});
$app->get('/superproducts', function (Request $request, Response $response, array $args) {
    try {
        $pdo = $this->db; // Assuming you've set up your database connection

        // Query to retrieve all categories
        $sql = "SELECT
    products.id AS product_id,
    products.name AS product_name,
    products.model_no,
    products.slug,
    products.image,
    products.price,
    products.product_stock,
    products.views,
    products.active,
    products.product_order,
    products.created AS product_created,
    categories.id AS category_id,
    categories.name AS category_name
FROM products
INNER JOIN categories ON categories.id = products.category_id where products.active='1' and categories.active='1' order by products.id DESC; 
";
        $stmt = $pdo->query($sql);
        $categories = $stmt->fetchAll();

        return $response->withJson($categories);
    } catch (PDOException $e) {
        return $response->withJson(['error' => true, 'message' => $e->getMessage()], 500);
    } catch (Exception $e) {
        return $response->withJson(['error' => true, 'message' => $e->getMessage()], 500);
    }
});
//getreceipt
$app->post('/getonereceipt', function (Request $request, Response $response, array $args) {
    try {
        $pdo = $this->db; // Assuming you've set up your database connection

        // Retrieve category data from the request body
        $data = $request->getParsedBody();
		if($data['id']!==""){
		
$sql = "SELECT o.orderId AS order_id,o.changeamount,o.type,o.totalItems,o.created_at AS order_date,o.userid AS user_id,o.customerid AS customer_id,o.status AS order_status,o.card AS card_payment,
        o.cash AS cash_payment,o.discount AS order_discount,o.pointsRedeem AS points_redeem,o.due AS due_amount,o.subtotal AS subtotal_amount,o.tax AS tax_amount,
        o.total AS total_amount,oi.product_id as prodid,oi.name AS product_name,oi.quantity AS quantity,oi.price AS unit_price,oi.subtotal AS line_total FROM orders o LEFT JOIN order_items oi ON o.id = oi.order_id
    WHERE o.id = :orderId OR o.orderId=:orderId";		
$orderStmt = $this->db->prepare($sql);
$orderStmt->bindParam(':orderId', $data['id']);
$orderStmt->execute();

$allorderData = $orderStmt->fetchAll();

// Initialize the $orderData with the first row, if available
$orderData = reset($allorderData);

// Construct the receipt data in the desired format
$receiptData = [
    'order_id' => $orderData['order_id'] ?? null,
    'order_date' => $orderData['order_date'] ?? null,
    'user_id' => $orderData['user_id'] ?? null,
    'customer_id' => $orderData['customer_id'] ?? null,
    'order_status' => $orderData['order_status'] ?? null,
    'card_payment' => $orderData['card_payment'] ?? null,
    'cash_payment' => $orderData['cash_payment'] ?? null,
    'order_discount' => $orderData['order_discount'] ?? null,
    'points_redeem' => $orderData['points_redeem'] ?? null,
    'due_amount' => $orderData['due_amount'] ?? null,
    'subtotal_amount' => $orderData['subtotal_amount'] ?? null,
    'tax_amount' => $orderData['tax_amount'] ?? null,
    'total_amount' => $orderData['total_amount'] ?? null,
    'change_amount' => $orderData['changeamount'] ?? null,
    'totalItems' => $orderData['totalItems'] ?? null,
    'items' => [],
];


$itemsx = [];
$type='Product';
foreach ($allorderData as $row) {
	
	if($row['prodid']=="0" && $row['type']=="product"){
		$type='Service';
	}
	if($row['type']!="product"){
		$type='Phone';
	}
	
    $itemsx[] = [
        'product_name' => $row['product_name'],
        'quantity' => $row['quantity'],
        'unit_price' => $row['unit_price'],
        'line_total' => $row['line_total'],
    ];
}
$receiptData['items'] = $itemsx;

        // ...

        return $response->withJson(['error' => false, 'message' => 'Order placed successfully.', 'order_id' => $data['id'], 'receipt' => $receiptData,'type'=>$type]);
return $response->withJson(['message' => 'Category added successfully']);
		}else{
		return $response->withJson(['error' => false, 'message' => 'Empty or Invalid Order Id']);

		}
    } catch (PDOException $e) {
        return $response->withJson(['error' => true, 'message' => $e->getMessage()], 500);
    } catch (Exception $e) {
        return $response->withJson(['error' => true, 'message' => $e->getMessage()], 500);
    }
});
//end receipt
// Add a new category
$app->post('/supercategories', function (Request $request, Response $response, array $args) {
    try {
        $pdo = $this->db; // Assuming you've set up your database connection

        // Retrieve category data from the request body
        $data = $request->getParsedBody();
		if($data['id']!==""){
			
		$sql = "UPDATE categories set name=:name, categoryOrder=:categoryOrder, created_at=NOW() where id=:id";
        $stmt = $pdo->prepare($sql);
        $stmt->bindParam(':name', $data['name']);
        $stmt->bindParam(':categoryOrder', $data['categoryOrder']); // Use the incremented order value
		 $stmt->bindParam(':id', $data['id']); // Use the incremented order value
        if($stmt->execute()){	
		
			return $response->withJson(['message' => 'Category Update successfully']);
		}
		else{
			return $response->withJson(['message' => 'Error Updating Category']);
		}
		}
		else{
        // Get the last category order value
        $getLastOrderSql = "SELECT MAX(categoryOrder) AS lastOrder FROM categories";
        $stmt = $pdo->query($getLastOrderSql);
        $lastOrder = $stmt->fetch(PDO::FETCH_ASSOC)['lastOrder'];

        // Increment the last order value by 1
        $newOrder = $lastOrder + 1;
		$activ='1';
        // Insert the new category into the database with the incremented order
        $sql = "INSERT INTO categories (name, categoryOrder,active, created_at) VALUES (:name, :categoryOrder,:active, NOW())";
        $stmt = $pdo->prepare($sql);
        $stmt->bindParam(':name', $data['name']);
        $stmt->bindParam(':categoryOrder', $newOrder); // Use the incremented order value
		  $stmt->bindParam(':active', $activ);
        $stmt->execute();

        return $response->withJson(['message' => 'Category added successfully']);
		}
    } catch (PDOException $e) {
        return $response->withJson(['error' => true, 'message' => $e->getMessage()], 500);
    } catch (Exception $e) {
        return $response->withJson(['error' => true, 'message' => $e->getMessage()], 500);
    }
});

$app->post('/addrewards', function ($request, $response, $args) {
    try {
        $pdo = $this->db; // Assuming you've set up your database connection

        // Retrieve reward data from the request body
        $data = $request->getParsedBody();

        $userid = $data['userid'];
        $customerid = $data['customerid'];
        $orderid = $data['orderid'];
        $reason = $data['reason'];
        $points = $data['points'];

        // Add your validation logic here if needed

        // Insert the reward into the database
        $sql = "INSERT INTO rewards (userid, customerid, orderid, reason, points, created) VALUES (:userid, :customerid, :orderid, :reason, :points, NOW())";
        $stmt = $pdo->prepare($sql);
        $stmt->bindParam(':userid', $userid);
        $stmt->bindParam(':customerid', $customerid);
        $stmt->bindParam(':orderid', $orderid);
        $stmt->bindParam(':reason', $reason);
        $stmt->bindParam(':points', $points);

        if ($stmt->execute()) {
			
			
		$getPointsSql = "SELECT points FROM customers WHERE id = :customerid";
        $getPointsStmt = $pdo->prepare($getPointsSql);
        $getPointsStmt->bindParam(':customerid', $customerid);
        $getPointsStmt->execute();
        $currentPoints = $getPointsStmt->fetch();
		$currentPoints=$currentPoints['points'];

        // Calculate the updated points
        $newPoints = $currentPoints + $points;

        // Update the customer's points
        $updatePointsSql = "UPDATE customers SET points = :newPoints WHERE id = :customerid";
        $updatePointsStmt = $pdo->prepare($updatePointsSql);
        $updatePointsStmt->bindParam(':newPoints', $newPoints);
        $updatePointsStmt->bindParam(':customerid', $customerid);
	    $updatePointsStmt->execute();
            return $response->withJson(['error' => false, 'message' => 'Reward added successfully. Total Points '.$newPoints]);
        } else {
            return $response->withJson(['error' => true, 'message' => 'Error adding reward']);
        }
    } catch (PDOException $e) {
        return $response->withJson(['error' => true, 'message' => $e->getMessage()], 500);
    } catch (Exception $e) {
        return $response->withJson(['error' => true, 'message' => $e->getMessage()], 500);
    }
});

$app->post('/superproducts', function (Request $request, Response $response, array $args) {
    try {
        $pdo = $this->db; // Assuming you've set up your database connection

        // Retrieve category data from the request body
        $data = $request->getParsedBody();
if (trim($data['product_id']) !== "") {
			
		$sql = "UPDATE products set name=:name,price=:price,category_id=:category_id,image=:image, product_order=:categoryOrder, product_stock=:product_stock, created=NOW() where id=:id";
        $stmt = $pdo->prepare($sql);
        $stmt->bindParam(':name', $data['product_name']);
		$stmt->bindParam(':price', $data['price']);
		$stmt->bindParam(':image', $data['image']);
		$stmt->bindParam(':category_id', $data['category_id']);
        $stmt->bindParam(':categoryOrder', $data['product_order']); 
		$stmt->bindParam(':product_stock', $data['product_stock']);// Use the incremented order value
		 $stmt->bindParam(':id', $data['product_id']); // Use the incremented order value
        if($stmt->execute()){	
		
			return $response->withJson(['message' => 'Product Update successfully']);
		}
		else{
			return $response->withJson(['message' => 'Error Updating Product']);
		}
		}
		else{
			
        // Get the last category order value
        $getLastOrderSql = "SELECT MAX(product_order) AS lastOrder FROM products WHERE category_id = :category_id";

// Prepare the statement
$stmt = $pdo->prepare($getLastOrderSql);

// Bind the category_id parameter
$stmt->bindParam(':category_id', $data['category_id'], PDO::PARAM_INT);

// Execute the query
$stmt->execute();

// Fetch the result
$result = $stmt->fetch();


        $lastOrder = $result['lastOrder'];

        // Increment the last order value by 1
        $newOrder = $lastOrder + 1;

        // Insert the new category into the database with the incremented order
        $sql = "INSERT INTO products (name, category_id,price,image,product_order,product_stock,created) VALUES (:name,:category_id,:price,:image,:categoryOrder,:product_stock, NOW())";
        $stmt = $pdo->prepare($sql);
        $stmt->bindParam(':name', $data['product_name']);
		$stmt->bindParam(':price', $data['price']);
		$stmt->bindParam(':image', $data['image']);
		$stmt->bindParam(':category_id', $data['category_id']);
        $stmt->bindParam(':categoryOrder', $newOrder); // Use the incremented order value
		$stmt->bindParam(':product_stock', $data['product_stock']);
        $stmt->execute();

        return $response->withJson(['message' => 'Product added successfully']);
		}
    } catch (PDOException $e) {
        return $response->withJson(['error' => true, 'message' => $e->getMessage()], 500);
    } catch (Exception $e) {
        return $response->withJson(['error' => true, 'message' => $e->getMessage()], 500);
    }
});
// Delete a category
// Delete a category
$app->post('/superdeletecategories/{id}', function (Request $request, Response $response, array $args) {
    $categoryId = $args['id'];

    try {
        $pdo = $this->db; // Assuming you've set up your database connection

        // Delete the category from the database
        $sql = "DELETE FROM categories WHERE id = :id";
        $stmt = $pdo->prepare($sql);
        $stmt->bindParam(':id', $categoryId);
        $stmt->execute();

        return $response->withJson(['message' => 'Category deleted successfully']);
    } catch (PDOException $e) {
        return $response->withJson(['error' => true, 'message' => $e->getMessage()], 500);
    } catch (Exception $e) {
        return $response->withJson(['error' => true, 'message' => $e->getMessage()], 500);
    }
});

$app->post('/superdeletecustomers/{id}', function (Request $request, Response $response, array $args) {
    $categoryId = $args['id'];

    try {
        $pdo = $this->db; // Assuming you've set up your database connection

        // Delete the category from the database
        $sql = "DELETE FROM customers WHERE id = :id";
        $stmt = $pdo->prepare($sql);
        $stmt->bindParam(':id', $categoryId);
        $stmt->execute();

        return $response->withJson(['message' => 'Customer deleted successfully']);
    } catch (PDOException $e) {
        return $response->withJson(['error' => true, 'message' => $e->getMessage()], 500);
    } catch (Exception $e) {
        return $response->withJson(['error' => true, 'message' => $e->getMessage()], 500);
    }
});
$app->post('/superdeleteproducts/{id}', function (Request $request, Response $response, array $args) {
    $categoryId = $args['id'];

    try {
        $pdo = $this->db; // Assuming you've set up your database connection

        // Delete the category from the database
        $sql = "DELETE FROM products WHERE id = :id";
        $stmt = $pdo->prepare($sql);
        $stmt->bindParam(':id', $categoryId);
        $stmt->execute();

        return $response->withJson(['message' => 'Product deleted successfully']);
    } catch (PDOException $e) {
        return $response->withJson(['error' => true, 'message' => $e->getMessage()], 500);
    } catch (Exception $e) {
        return $response->withJson(['error' => true, 'message' => $e->getMessage()], 500);
    }
});

$app->post('/superdeleteusers/{id}', function (Request $request, Response $response, array $args) {
    $categoryId = $args['id'];

    try {
        $pdo = $this->db; // Assuming you've set up your database connection

        // Delete the category from the database
        $sql = "DELETE FROM users WHERE userid = :userid";
        $stmt = $pdo->prepare($sql);
        $stmt->bindParam(':userid', $categoryId);
        $stmt->execute();

        return $response->withJson(['message' => 'User deleted successfully']);
    } catch (PDOException $e) {
        return $response->withJson(['error' => true, 'message' => $e->getMessage()], 500);
    } catch (Exception $e) {
        return $response->withJson(['error' => true, 'message' => $e->getMessage()], 500);
    }
});
 $app->post('/superedituser', function (Request $request, Response $response, array $args) {
    // Get the form data from the request body
    $formData = $request->getParsedBody();
    
    // Validate the form data (you can add more robust validation here)
    if (empty($formData['username']) || empty($formData['role'])) {
        return $response->withJson(['error' => true, 'message' => 'Please provide both customerName and phone.'], 400); // Bad Request
    }
    
    // Attempt to authenticate the user
    try {
        $userid = $formData['userid'];
        $username = $formData['username'];
		
		$password = $formData['password'];
		if(empty($password)){
        $password = md5($formData['user_password']);
		}
		$token=$password;
        $role = $formData['role'];
        $user_password = $formData['user_password'];
       
		$userid = $formData['userid'];
		
        if($userid=="0"){
			
		$selectLastUserIdSql = "SELECT MAX(userid) AS max_userid FROM users";
$selectLastUserIdStmt = $this->db->prepare($selectLastUserIdSql);
$selectLastUserIdStmt->execute();
$lastUserIdRow = $selectLastUserIdStmt->fetch(PDO::FETCH_ASSOC);
$lastUserId = $lastUserIdRow['max_userid'];

// Step 2: Increment the last userid by 1
$newUserId = $lastUserId + 1;	
			
	     $orderInsertSql = "INSERT INTO users (userid,username,password,user_password,token,role) VALUES (:userid,:username,:password,:user_password,:token,:role)";
        $orderStmt = $this->db->prepare($orderInsertSql);
        $orderStmt->bindParam(':userid', $newUserId);
        $orderStmt->bindParam(':username', $username);
        $orderStmt->bindParam(':password', $password);
        $orderStmt->bindParam(':user_password', $user_password);
        $orderStmt->bindParam(':token', $token);
        $orderStmt->bindParam(':role', $role);
if ($orderStmt->execute()) {
            return $response->withJson(['error' => false, 'message' => 'User Updated Successfully']);
        } else {
            return $response->withJson(['error' => true, 'message' => 'Failed to add customer'], 500); // Internal Server Error
        }
			
		}else{
			 $orderInsertSql = "UPDATE users set username=:username, password=:password, user_password=:user_password, token=:token, role=:role where userid=:userid";
        $orderStmt = $this->db->prepare($orderInsertSql);

        $orderStmt->bindParam(':username', $username);
        $orderStmt->bindParam(':password', $password);
        $orderStmt->bindParam(':user_password', $user_password);
		$orderStmt->bindParam(':token', $token);
		 $orderStmt->bindParam(':role', $role);
		  $orderStmt->bindParam(':userid', $userid);
			if ($orderStmt->execute()) {
            return $response->withJson(['error' => false, 'message' => 'User Updated Successfully']);
        } else {
            return $response->withJson(['error' => true, 'message' => 'Failed to add customer'], 500); // Internal Server Error
        }
		}
        // Check if the user with the given phone number already exists
       
        
        // Insert the customer into the 'customers' table
       
    
        
        
    } catch (PDOException $e) {
        return $response->withJson(['error' => true, 'message' => $e->getMessage()], 500); // Internal Server Error
    }
});

//end admin
$app->post('/upload-image', function ($request, $response, $args) {
    $uploadedFiles = $request->getUploadedFiles();
    
    // Check if a file was uploaded
    if (empty($uploadedFiles['file'])) {
        return $response->withJson(['error' => true, 'message' => 'No file uploaded'], 400);
    }
    
    $uploadedFile = $uploadedFiles['file'];

    // Check for errors during file upload
    if ($uploadedFile->getError() !== UPLOAD_ERR_OK) {
        return $response->withJson(['error' => true, 'message' => 'File upload error'], 500);
    }

    // Define the directory where you want to store uploaded files
    $uploadDirectory =  '../public/uploads/';

    // Generate a unique filename for the uploaded file
    $filename = uniqid() . '_' . $uploadedFile->getClientFilename();

    // Move the uploaded file to the desired directory
    $uploadedFile->moveTo($uploadDirectory . $filename);

    return $response->withJson(['fileName' => $filename]);
});


$app->post('/uploadimage', function (Request $request, Response $response)
{
    $directory = $this->get('upload_directory');

    $uploadedFiles = $request->getUploadedFiles();

    // handle single input with single file upload
    $uploadedFile = $uploadedFiles['item_image'];
    if ($uploadedFile->getError() === UPLOAD_ERR_OK)
    {
        $filename = moveUploadedFile($directory, $uploadedFile);
        $response->write('uploaded ' . $filename . '<br/>');
    }

    // handle multiple inputs with the same key
    /*
    foreach ($uploadedFiles['example2'] as $uploadedFile) {
        if ($uploadedFile->getError() === UPLOAD_ERR_OK) {
            $filename = moveUploadedFile($directory, $uploadedFile);
            $response->write('uploaded ' . $filename . '<br/>');
        }
    }
    */

    // handle single input with multiple file uploads
    /*
    foreach ($uploadedFiles['example3'] as $uploadedFile) {
        if ($uploadedFile->getError() === UPLOAD_ERR_OK) {
            $filename = moveUploadedFile($directory, $uploadedFile);
            $response->write('uploaded ' . $filename . '<br/>');
        }
    }
    */

});

/**
 * Moves the uploaded file to the upload directory and assigns it a unique name
 * to avoid overwriting an existing uploaded file.
 *
 * @param string $directory directory to which the file is moved
 * @param UploadedFile $uploadedFile file uploaded file to move
 * @return string filename of moved file
 */
function moveUploadedFile($directory, UploadedFile $uploadedFile)
{
    $extension = pathinfo($uploadedFile->getClientFilename() , PATHINFO_EXTENSION);
    $basename = bin2hex(random_bytes(8)); // see http://php.net/manual/en/function.random-bytes.php
    $filename = sprintf('%s.%0.8s', $basename, $extension);

    $uploadedFile->moveTo($directory . DIRECTORY_SEPARATOR . $filename);

    return $filename;
}

function verifyRequiredParams($required_fields, $body)
{
    $error = false;
    $error_fields = "";
    $request_params = $body;

    foreach ($required_fields as $field)
    {
        if (!isset($request_params[$field]) || strlen(trim($request_params[$field])) <= 0)
        {
            $error = true;
            $error_fields .= $field . ', ';
        }
    }

    if ($error)
    {
        $response = array();
        $response["error"] = true;
        $response["message"] = 'Required field(s) ' . substr($error_fields, 0, -2) . ' is missing or empty';
        return $response;
    }
    else
    {
        $response = array();
        $response["error"] = false;
        return $response;
    }
}

function UniqueRandomNumbersWithinRange($min, $max, $quantity)
{
    $numbers = range($min, $max);
    shuffle($numbers);
    return array_slice($numbers, 0, $quantity);
}

function createnotification($user_id, $postId, $user_token, $app)
{

    if (empty($postId))
    {

        $message = "started following you.";

        $sqly = "Select * from notifications where userId=? && post_id=? && user_token=? && message=?";
        $sthy = $app->prepare($sqly);
        $sthy->bindParam(1, $user_id);
        $sthy->bindParam(2, $postId);
        $sthy->bindParam(3, $user_token);
        $sthy->bindParam(4, $message);
        $sthy->execute();
        $rowy = $sthy->fetch();

        if (empty($rowy))
        {
            $sql1 = "INSERT INTO notifications(userId,post_id,message,user_token) VALUES (?,?,?,?)";
            $sth1 = $app->prepare($sql1);
            $sth1->bindParam(1, $user_id);
            $sth1->bindParam(2, $postId);
            $sth1->bindParam(3, $message);
            $sth1->bindParam(4, $user_token);
            $t = $sth1->execute();
        }
    }
    else
    {
        $message = "liked your post.";
        $sqly = "Select * from notifications where userId=? && post_id=? && user_token=? && message=?";
        $sthy = $app->prepare($sqly);
        $sthy->bindParam(1, $user_id);
        $sthy->bindParam(2, $postId);
        $sthy->bindParam(3, $user_token);
        $sthy->bindParam(4, $message);
        $sthy->execute();
        $rowy = $sthy->fetch();
        if (empty($rowy))
        {
            $sql1 = "INSERT INTO notifications(userId,post_id,message,user_token) VALUES (?,?,?,?)";
            $sth1 = $app->prepare($sql1);

            $sth1->bindParam(1, $user_id);
            $sth1->bindParam(2, $postId);
            $sth1->bindParam(3, $message);
            $sth1->bindParam(4, $user_token);
            $t = $sth1->execute();
        }

    }

    return true;
}
function sendingMail($ths, $email, $fullName, $pass, $Subject)
{
    $mailDetails = $ths->mailDetails;
    $mailTemplate = new mailTemplate();
    $mail = new PHPMailer(); // Passing `true` enables exceptions
    //Server settings
    $mail->IsHTML(true); // Set email format to HTML                                 // Enable verbose debug output
    $mail->isSMTP(); // Set mailer to use SMTP
    $mail->SMTPDebug = 2;
    $mail->Host = $mailDetails['Host']; // SMTP servers smtp.gmail.com relay-hosting.secureserver.net
    $mail->SMTPAuth = $mailDetails['SMTPAuth']; // Enable SMTP authentication
    $mail->Username = $mailDetails['Username']; // SMTP username
    $mail->Password = $mailDetails['Password']; // SMTP password
    $mail->SMTPSecure = $mailDetails['SMTPSecure']; // Enable TLS encryption, `ssl` also accepted
    $mail->Port = $mailDetails['Port']; // TCP port to connect to
    $setFromEmail = $mailDetails['setFromEmail'];
    $setFromName = $mailDetails['setFromEmail'];

    //Recipients
    // $mail->setFrom($setFromEmail, $setFromName);
    $mail->addAddress($email, $fullName); // Add a recipient   .urlencode
    $mail->Subject = $Subject;
    $mail->Body = $mailTemplate->msvLogin($fullName, $email, $pass);

    $mail->send();
    return $mail->ErrorInfo;
}

function time_Ago($time)
{

    // Calculate difference between current
    // time and given timestamp in seconds
    $diff = time() - $time;

    // Time difference in seconds
    $sec = $diff;

    // Convert time difference in minutes
    $min = round($diff / 60);

    // Convert time difference in hours
    $hrs = round($diff / 3600);

    // Convert time difference in days
    $days = round($diff / 86400);

    // Convert time difference in weeks
    $weeks = round($diff / 604800);

    // Convert time difference in months
    $mnths = round($diff / 2600640);

    // Convert time difference in years
    $yrs = round($diff / 31207680);

    // Check for seconds
    if ($sec <= 60)
    {
        return "$sec seconds ago";
    }

    // Check for minutes
    else if ($min <= 60)
    {
        if ($min == 1)
        {
            return "one minute ago";
        }
        else
        {
            return "$min minutes ago";
        }
    }

    // Check for hours
    else if ($hrs <= 24)
    {
        if ($hrs == 1)
        {
            return "an hour ago";
        }
        else
        {
            return "$hrs hours ago";
        }
    }

    // Check for days
    else if ($days <= 7)
    {
        if ($days == 1)
        {
            return "Yesterday";
        }
        else
        {
            return "$days days ago";
        }
    }

    // Check for weeks
    else if ($weeks <= 4.3)
    {
        if ($weeks == 1)
        {
            return "a week ago";
        }
        else
        {
            return "$weeks weeks ago";
        }
    }

    // Check for months
    else if ($mnths <= 12)
    {
        if ($mnths == 1)
        {
            return "a month ago";
        }
        else
        {
            return "$mnths months ago";
        }
    }

    // Check for years
    else
    {
        if ($yrs == 1)
        {
            return "one year ago";
        }
        else
        {
            return "$yrs years ago";
        }
    }
}

function slugify($text, string $divider = '-')
{
    // replace non letter or digits by divider
    $text = preg_replace('~[^\pL\d]+~u', $divider, $text);

    // transliterate
    $text = iconv('utf-8', 'us-ascii//TRANSLIT', $text);

    // remove unwanted characters
    $text = preg_replace('~[^-\w]+~', '', $text);

    // trim
    $text = trim($text, $divider);

    // remove duplicate divider
    $text = preg_replace('~-+~', $divider, $text);

    // lowercase
    $text = strtolower($text);

    if (empty($text))
    {
        return 'n-a';
    }

    return $text;
}
function getCurrentTime()
{
    // whether ip is from share internet
    // if (!empty($_SERVER['HTTP_CLIENT_IP']))
    //     {
    //     $ip_address = $_SERVER['HTTP_CLIENT_IP'];
    //     }
    // //whether ip is from proxy
    // elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR']))
    //     {
    //     $ip_address = $_SERVER['HTTP_X_FORWARDED_FOR'];
    //     }
    // //whether ip is from remote address
    // else
    //     {
    //     $ip_address = $_SERVER['REMOTE_ADDR'];
    //     }
    // // $ip = $ip_address;
    // $ip = '45.115.60.196';
    // $ipdat = @json_decode(file_get_contents("http://www.geoplugin.net/json.gp?ip=" . $ip));
    // $loc= $ipdat->geoplugin_timezone;
    // date_default_timezone_set("$loc");
    date_default_timezone_set('Canada/Toronto');
    $date = date('Y-m-d H:i:s', time());

    return $date;
}

