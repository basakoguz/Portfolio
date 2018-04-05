<? php 


if($_SERVER[REQUEST_METHOD] == "POST") {
    
    if(empty($_POST["name"])) {
        $name_error="Name is required";
    } else {
        $name = test_input($_POST["name"]);
        
        if(!preg_match("/^[a-zA-Z ]*$/",$name)) {
            $name_error = "Only letters and white space allowed";
        }
    }
    
    if(empty($_POST["email"])) {
        $email_error="Email is required";
    } else {
        email = test_input($_POST["email"]);
        
        if(!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $name_error = "Invalid email format";
        }
    }
}

?>
