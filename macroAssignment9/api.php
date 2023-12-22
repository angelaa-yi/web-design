<?php
    
    include('config.php');
    // get command
    $command = $_GET['command'];

    // command: check
    // inputs: a nickname and a password
    // outputs: a copy of the message, or error

    if ($command=='create'){
        $username1=$_POST['user1'];
        $password1=$_POST['pw1'];

        if ($username1 && $password1){
            $create=true;

            $db=new SQLite3($path . '/messages.db');
            $sql = "SELECT * from login WHERE username=:user1";
            $statement=$db->prepare($sql);
            $statement->bindParam(':user1', $username1);
            $result=$statement->execute();
            if($array=$result->fetchArray()){
                $create=false;
                print "NOPE";
            }

            if($create==true){
                $sql = "INSERT INTO login(username, password) VALUES(:user1, :pass1)";
                $statement=$db->prepare($sql);
                $statement->bindParam(':user1', $username1);
                $statement->bindParam(':pass1', $password1);
                $result=$statement->execute();
                print "SUCCESS";
            }
        }
        else{
            print "MISSINGDATA";
        }
        $db->close();
        unset($db);
    }

    if ($command=='check'){
        $username=$_POST['username'];
        $password=$_POST['password'];

        if ($username && $password){
            $db=new SQLite3($path . '/messages.db');
            $sql = "SELECT * from login WHERE username=:user AND password=:pass";
            $statement=$db->prepare($sql);
            $statement->bindParam(':user', $username);
            $statement->bindParam(':pass', $password);
            $result=$statement->execute();
            if($array=$result->fetchArray()){
                $available=true;
                print "SUCCESS";
            }
            if(!$available){
                print "NONE";
            }
        }
        else{
            print "MISSINGDATA";
        }
        $db->close();
        unset($db);
    }


    // command: save
    // inputs:  a nickname and a message
    // outputs: a copy of the message, or 'error'
    if ($command == 'save') {

        $nickname=$_POST['nickname'];
        $message=$_POST['message'];

        // basic validaton
        if($nickname && $message){
            // save this message into our database
            $db=new SQLite3($path . '//messages.db');
            $sql= "INSERT INTO messages (nickname,message) VALUES (:nick, :msg)";
            $statement=$db->prepare($sql);
            $statement->bindParam(':nick', $nickname);
            $statement->bindParam(':msg', $message);
            $statement->execute();

            print $nickname . ": " . $message;
        }
        else{
            print "MISSINGDATA";
        }
        
        // $db->close();
        // unset($db);
    }
    
    // command: get_all_messages
    // inputs:  none
    // output:  all previous messages, formatted as a JSON array
    if ($command == 'get_all_messages') {
        $db=new SQLite3($path . '/messages.db');
        $sql="SELECT nickname, message FROM messages";
        $statement=$db->prepare($sql);
        $result = $statement->execute();

        $return_array=array();
        while($temp_array = $result->fetchArray()){
            array_push($return_array, $temp_array['nickname']. ": " . $temp_array['message']);
        }

        $db->close();
        unset($db);

        print json_encode($return_array);

    }


?>
