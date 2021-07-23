<?php
extract($_POST);
$from = 'lnv@epickbikes.com';
$admin_subject = 'Epick Bikes Request Demo Form';
$admin_headers = "From: Epick Bikes <" . strip_tags($from) . " >\r\n";
$admin_headers .= "Reply-To: " . strip_tags($emailId) . "\r\n";
$admin_headers .= "MIME-Version: 1.0\r\n";
$admin_headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
$admin_body= "<h2 style='font-family: verdana;'>Epick Bikes Request Demo Form</h2>";
$admin_body.="<table style='border: 1px solid black;border-collapse: collapse;width: 60%;font-family: verdana;'>";
$admin_body.="<tr><td style='border: 1px solid black;border-collapse: collapse;padding: 10px;text-align: left;width: 50%;font-family: verdana;'><b>First Name</b></td><td style='border: 1px solid black;border-collapse: collapse;padding: 10px;text-align: left;width: 50%;'>".$firstName."</td></tr>";
$admin_body.="<tr><td style='border: 1px solid black;border-collapse: collapse;padding: 10px;text-align: left;width: 50%;font-family: verdana;'><b>Last Name</b></td><td style='border: 1px solid black;border-collapse: collapse;padding: 10px;text-align: left;width: 50%;'>".$lastName."</td></tr>";
$admin_body.="<tr><td style='border: 1px solid black;border-collapse: collapse;padding: 10px;text-align: left;width: 50%;font-family: verdana;'><b>Contact Number</b></td><td style='border: 1px solid black;border-collapse: collapse;padding: 10px;text-align: left;width: 50%;'>".$num." </td></tr>";
$admin_body.="<tr><td style='border: 1px solid black;border-collapse: collapse;padding: 10px;text-align: left;width: 50%;font-family: verdana;'><b>Email Address</b></td><td style='border: 1px solid black;border-collapse: collapse;padding: 10px;text-align: left;width: 50%;'>".$emailId." </td></tr>";
$admin_body.="<tr><td style='border: 1px solid black;border-collapse: collapse;padding: 10px;text-align: left;width: 50%;font-family: verdana;'><b>City</b></td><td style='border: 1px solid black;border-collapse: collapse;padding: 10px;text-align: left;width: 50%;'>".$queryCity." </td></tr>";
$admin_body.="<tr><td style='border: 1px solid black;border-collapse: collapse;padding: 10px;text-align: left;width: 50%;font-family: verdana;'><b>State</b></td><td style='border: 1px solid black;border-collapse: collapse;padding: 10px;text-align: left;width: 50%;'>".$state." </td></tr>";
$admin_body.="</table>"; 

$user_subject = 'Epick Bikes';
$user_headers = "From: Epick Bikes <" . strip_tags($from) . " >\r\n";
$user_headers .= "Reply-To: " . strip_tags($from) . "\r\n";
$user_headers .= "MIME-Version: 1.0\r\n";
$user_headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
$user_body ='<table bgcolor="#eaeff4" cellspacing="30" cellpadding="10"> 
	<tbody>
		<tr>
			<td>
				<img src="https://www.peopletopeople.in/epic/v2/images/logo.png" width="300">
			</td>
		</tr>
		<tr>
			<td style="background-color:#ffffff;padding:30px 50px;">
				<h1 style="font-family:verdana;font-size:30px;color:#15303e;"> Your request is received.</h1></br><p style="font-size:14px;font-weight:normal;color:#15303e;">We will aim to reply within 24 hours.</p>
				</br></br>
				<p style="font-family:verdana;font-size:14px; font-weight:normal;color:#15303e;">If your enquiry is urgent please call us on +91 9560234008</p> 
			</td>
		</tr>
		<tr>
			<td>
				<p style="font-size:14px;color:#15303e;font-family:verdana;">Kind Regards,</p><p style="font-size:14px;color:#15303e;font-family:verdana;">Epick Bikes</p>
				<p style="font-size:13px;color:#748a95;font-family:verdana;">Kondapur, Hyderabad</p>
			</td>
		</tr>
    </tbody>
</table>';

if(@mail($from, $admin_subject, $admin_body, $admin_headers)){
	@mail($emailId, $user_subject, $user_body, $user_headers);
	echo 1;
}else{
	echo 0;
}
?>
