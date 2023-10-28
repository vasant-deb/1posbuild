<?php
    class mailTemplate {
		var $name;		
		var $css = "<html xmlns='http://www.w3.org/1999/xhtml' style='font-family: ' Helvetica Neue
		', Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;'>
	
		<head>
			<meta name='viewport' content='width=device-width' />
			<meta http-equiv='Content-Type' content='text/html; charset=UTF-8' />			
			<style type='text/css'>
				* {
					margin: 0;
					padding: 0;
					font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
					box-sizing: border-box;
					font-size: 14px;
				}
		
				img {
					max-width: 100%;
				}
		
				body {
					-webkit-font-smoothing: antialiased;
					-webkit-text-size-adjust: none;
					width: 100% !important;
					height: 100%;
					line-height: 1.6;
				}
		
				table td {
					vertical-align: top;
				}
		
				body {
					background-color: #f6f6f6;
				}
		
				.body-wrap {
					background-color: #f6f6f6;
					width: 100%;
				}
		
				.container {
					display: block !important;
					max-width: 600px !important;
					margin: 0 auto !important;
					clear: both !important;
				}
		
				.content {
					max-width: 600px;
					margin: 0 auto;
					display: block;
					padding: 20px;
				}
		
				.main {
					background: #fff;
					border: 1px solid #e9e9e9;
					border-radius: 3px;
				}
		
				.content-wrap {
					padding: 20px;
				}
		
				.content-block {
					padding: 0 0 20px;
				}
		
				.header {
					width: 100%;
					margin-bottom: 20px;
				}
		
				.footer {
					width: 100%;
					clear: both;
					color: #999;
					padding: 20px;
				}
		
				.footer a {
					color: #999;
				}
		
				.footer p,
				.footer a,
				.footer unsubscribe,
				.footer td {
					font-size: 12px;
				}
		
				.column-left {
					float: left;
					width: 50%;
				}
		
				.column-right {
					float: left;
					width: 50%;
				}
		
				h1,
				h2,
				h3 {
					font-family: 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif;
					color: #000;
					margin: 40px 0 0;
					line-height: 1.2;
					font-weight: 400;
				}
		
				h1 {
					font-size: 32px;
					font-weight: 500;
				}
		
				h2 {
					font-size: 24px;
				}
		
				h3 {
					font-size: 18px;
				}
		
				h4 {
					font-size: 14px;
					font-weight: 600;
				}
		
				p,
				ul,
				ol {
					margin-bottom: 10px;
					font-weight: normal;
				}
		
				p li,
				ul li,
				ol li {
					margin-left: 5px;
					list-style-position: inside;
				}
		
				a {
					color: #348eda;
					text-decoration: underline;
				}
		
				.btn-primary {
					text-decoration: none;
					color: #FFF !important;
					background-color: #ef6f40;
					border: solid #ef6f40;
					border-width: 10px 20px;
					line-height: 2;
					font-weight: bold;
					text-align: center;
					cursor: pointer;
					display: inline-block;
					border-radius: 5px;
					text-transform: capitalize;
				}
		
				.last {
					margin-bottom: 0;
				}
		
				.first {
					margin-top: 0;
				}
		
				.padding {
					padding: 10px 0;
				}
		
				.aligncenter {
					text-align: center;
				}
		
				.alignright {
					text-align: right;
				}
		
				.alignleft {
					text-align: left;
				}
		
				.clear {
					clear: both;
				}
		
				.alert {
					font-size: 16px;
					color: #fff;
					font-weight: 500;
					padding: 20px;
					text-align: center;
					border-radius: 3px 3px 0 0;
				}
		
				.alert a {
					color: #fff;
					text-decoration: none;
					font-weight: 500;
					font-size: 16px;
				}
		
				.alert.alert-warning {
					background: #FFFFFF;
				}
		
				.alert.alert-bad {
					background: #d0021b;
				}
		
				.alert.alert-good {
					background: #68b90f;
				}
		
				@media only screen and (max-width: 640px) {
					h1,
					h2,
					h3,
					h4 {
						font-weight: 600 !important;
						margin: 20px 0 5px !important;
					}
					h1 {
						font-size: 22px !important;
					}
					h2 {
						font-size: 18px !important;
					}
		
					h3 {
						font-size: 16px !important;
					}
					.container {
						width: 100% !important;
					}
		
					.content,
					.content-wrapper {
						padding: 10px !important;
					}
		
					.invoice {
						width: 100% !important;
					}
				}
			</style>";
		//Changes Done	
		var $css2 = "<html xmlns='http://www.w3.org/1999/xhtml' style='font-family: ' Helvetica Neue
		', Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;'>
	
		<head>
			<meta name='viewport' content='width=device-width' />
			<meta http-equiv='Content-Type' content='text/html; charset=UTF-8' />			
			<style type='text/css'>
				* {
					margin: 0;
					padding: 0;
					font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
					box-sizing: border-box;
					font-size: 14px;
				}
		
				img {
					max-width: 100%;
				}
		
				body {
					-webkit-font-smoothing: antialiased;
					-webkit-text-size-adjust: none;
					width: 100% !important;
					height: 100%;
					line-height: 1.6;
				}
		
				table td {
					vertical-align: top;
				}
		
				body {
					background-color: #f6f6f6;
				}
		
				.body-wrap {
					background-color: #f6f6f6;
					width: 100%;
				}
		
				.container {
					display: block !important;
					max-width: 600px !important;
					margin: 0 auto !important;
					clear: both !important;
				}
		
				
				.content {
				   
				    max-width: 600px;
				    margin: 0 auto;
				    display: block;
				    padding: 20px;
				}
		
				.main {
					background: #fff;
				
					border-radius: 5px;
				}
		
				.content-wrap {
					padding: 20px;
				}
		
				.content-block {
					padding: 0 0 20px;
				}
		
				.header {
					width: 100%;
					margin-bottom: 20px;
				}
		
				.footer {
					width: 100%;
					clear: both;
					color: #999;
					padding: 20px;
				}
		
				.footer a {
					color: #999;
				}
		
				.footer p,
				.footer a,
				.footer unsubscribe,
				.footer td {
					font-size: 12px;
				}
		td.alert.alert-warning {
    background: purple;
    font-size: 32px;
    padding: 10px;
    line-height: 40px;
    color: white;
}
.main {
    border: 1px solid #d6d5d5;
    background: #fff;
    border-radius: 5px;
}
p {
    line-height: 35px;
    font-size: 16px;
}
.btn {
    display: inline-block;
    margin-bottom: 0;
    font-weight: 400;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    background-image: none;
    border: 1px solid transparent;
    white-space: nowrap;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    border-radius: 4px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
.btn {
    border-radius: 2px;
}
.btn-primary {
    color: #fff;
    background-color: #428bca;
    border-color: #357ebd;
}
.ii a[href] {
    font-size: 20px;
    color: #fff;
    text-decoration: none;
}
			
			</style>";
		//Changes Done	
		
		
		
			var $css22 = "<html xmlns='http://www.w3.org/1999/xhtml' style='font-family: ' Helvetica Neue
		', Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;'>
	
		<head>
			<meta name='viewport' content='width=device-width' />
			<meta http-equiv='Content-Type' content='text/html; charset=UTF-8' />			
			<style type='text/css'>
			.container, .container-fluid, .container-sm, .container-md, .container-lg, .container-xl, .container-xxl {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
}

.mt-n10, .my-n10 {
    margin-top: -6rem !important;
}
.card {
    box-shadow: 0 0.15rem 1.75rem 0 rgba(31, 45, 65, 0.15);
}
.mb-4, .my-4 {
    margin-bottom: 1.5rem !important;
}
.card {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(31, 45, 65, 0.125);
    border-radius: 0.35rem;
}
.card:not([class*=bg-]) .card-header {
    color: #0061f2;
}
.card .card-header {
    font-weight: 500;
}
.card-header:first-child {
    border-radius: 0.35rem 0.35rem 0 0;
}
.card-header {
    padding: 1rem 1.35rem;
    margin-bottom: 0;
    background-color: rgba(31, 45, 65, 0.03);
    border-bottom: 1px solid rgba(31, 45, 65, 0.125);
}
.card-body {
    flex: 1 1 auto;
    min-height: 1px;
    padding: 1.35rem;
}
table {
    border: 1px solid #333;
    border-collapse: collapse;
    margin: 0 auto;
    width: 740px;
}
table {
    border-collapse: collapse;
}
td, tr, th {
    padding: 12px;
    border: 1px solid #333;
    width: 185px;
}
th {
    background-color: #f0f0f0;
}
th {
    text-align: inherit;
}
			</style>";
		
		function msvPass($fullName,$username,$token) {
			$this->name = $this->css2. "
			</head>
			
			<body>
				<table class='body-wrap'>
					<tr>
						<td></td>
						<td class='container' width='600'>
							<div class='content'>
								<table class='main' width='100%' cellpadding='0' cellspacing='0'>
									<td class='alert alert-warning'>
											Welcome to Minimart									</td>
									<tr>
										<td class='content-wrap'>
											<table width='100%' cellpadding='0' cellspacing='0'>
												<tr>
													<td>
												<p>	Hi <b>$fullName</b>,<br>
<p>Thanks for creating an account on Minimart. Your username is <b>$username</b>.<br> You can access your account area to view orders, change your password, and more at: app link<br> 
<center><a href='https://demo.digidiya.com/minimart/public/verify?token=".$token."' class='btn btn-primary'>Verify Now</a></center><br>
We look forward to seeing you soon.</p>
													</td>
												</tr>
										
											</table>
										</td>
									</tr>
								</table>
							</div>
						</td>
						<td></td>
					</tr>
				</table>
			
			</body>
			
			</html>";
			return $this->name; 
		}


function msvCheckout1($email ,$full_name,$order_type,$shipping_address,$total,$order_id,$date,$phone,$tip,$productdataids,$rowx) {
    $rowxlen= sizeof($rowx);
     $date = date('d-m-y');
			$this->name = $this->css22. "
			</head>
			
			<body>
			<div class='container mt-n10'>
                     
                   
                     
                    <div class='card mb-4'>
                       
                        <div class='card-body' id='newcontent'>
                            
                        <div class='container'>
                        <table>
                        <thead>
                        <tr><th colspan='3'>Invoice#$order_id <br> Order Type - $order_type</th><th>$date</th></tr>
                        <tr><td colspan='2'><h4>Pay to:</h4><p>Minimart</p></td><td colspan='2'><h4>Customer:</h4><p>$full_name</p></td></tr>
                        </thead>
                        <tbody>
                        <tr><th>Name/Description</th><th>Qty.</th><th>@</th><th>Cost</th></tr>";
                        
                        for($i=0;$i<$rowxlen;$i++){
                             $pq=$productdataids[$i]['quantity'];   
                            $pname=$rowx[$i][0]['name'];
                            
                             $price=$rowx[$i][0]['discounted_price'];
                             $subtotal=$rowx[$i][0]['discounted_price']*$pq;
                       $this->name.="<tr><td>$pname</td><td>$pq</td><td>$price</td><td>$subtotal</td></tr>";
                        }
                        
                         $this->name.="<tr><th>Tip</th><td>$tip</td></tr>
                        <tr><th>Shipping Address</th><td>$shipping_address</td></tr>
                        <tr><th colspan='3'>Subtotal</th><td>$total</td></tr>
                        </tbody>
                        <tfoot>
                        <tr><th colspan='3'>Grand Total</th><td>$total</td></tr>
                        </tfoot>
                        </table>
                        </div>
                        </div>
                    </div>
                    
                </div>

        	</body>
			
			</html>";
			return $this->name; 
		}



		function msvCheckout($full_name,$order_type,$shipping_address,$total,$order_id,$phone) {
			$this->name = $this->css2. "
			</head>
			
			<body>
				<table class='body-wrap'>
					<tr>
						<td></td>
						<td class='container' width='600'>
							<div class='content'>
								<table class='main' width='100%' cellpadding='0' cellspacing='0'>
									<td class='alert alert-warning'>
											Thanks for shopping with us									</td>
									<tr>
										<td class='content-wrap'>
											<table width='100%' cellpadding='0' cellspacing='0'>
												<tr>
													<td>
												<p>	Hi <b>$full_name</b>,<br>
<p>Thanks for purchasing at Minimart.<br>
Your Order Id is <b>$order_id</b> <br>
Payment Mode : <b>$order_type</b>.<br>
Shipping Address : <b>$shipping_address</b><br>
Order Total : <b>$total</b><br>
Phone No. : <b>$phone</b><br>
For more details you can check order history in app.<br> 
Your order will be delievered soon.</p>
													</td>
												</tr>
										
											</table>
										</td>
									</tr>
								</table>
							</div>
						</td>
						<td></td>
					</tr>
				</table>
			
			</body>
			
			</html>";
			return $this->name; 
		}

		function msvLogin($fullName,$email,$pass) {
			$this->name = $this->css. "
			<title>Login Credentials</title>
			</head>
			
			<body>
				<table class='body-wrap'>
					<tr>
						<td></td>
						<td class='container' width='600'>
							<div class='content'>
								<table class='main' width='100%' cellpadding='0' cellspacing='0'>
									<tr>
										<td class='alert alert-warning'>
											<center><IMG SRC='http://demo.digidiya.com/msv/img/logo.png' ALT='msvtest' WIDTH=200 HEIGHT=160><center>
										</td>
									</tr>
									<tr>
										<td class='content-wrap'>
											<table width='100%' cellpadding='0' cellspacing='0'>
												<tr>
													<td class='content-block'>
														Hello <strong>$fullName</strong>,<br>
													</td>
												</tr>
												<tr>
													<td class='content-block'>
														You are inviting to take the MSV test of Professional Ethics<br>
													</td>
												</tr>
												<tr>
													<td class='content-block'>
													Your Login Credentials is:<br>
													Email: <strong>$email</strong><br>
													Password: <strong>$pass</strong>
													</td>
												</tr>
												<br>
												<!-- <tr>
													
													// <td class='content-block' style='text-align:right;'>								<br><br>						
													// 	 <IMG style='margin-right:15px;' SRC='slogo.png' ALT='spritual' WIDTH=85 HEIGHT=85><br><br>Design & Developed by Spiritual Tour
													// </td>
												</tr> -->
											<!-- 	<tr>
										<td class='alert alert-warning' style='background: #A9A9A9;'>
											
										</td>
									</tr> -->
											</table>
										</td>
									</tr>
								</table>
							</div>
						</td>
						<td></td>
					</tr>
				</table>
			
			</body>
			
			</html>";
			return $this->name; 
		}


     }
?>
