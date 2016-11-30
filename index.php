<doctype html>
    <head>
        <title>Student Soundboard</title>
        <link href="https://fonts.googleapis.com/css?family=Oswald" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
        <script src="script.js"></script>
    </head>
    <body>
        <div class="header-submit">Submit Audio Request</div>
        <? if(!isset($_POST['submit'])){ ?>
        <form method="post">
            <input type="email" name="email" placeholder="Email Address" class="email" required autocomplete="off">
            <input type="text" name="say" placeholder="Say what?" class="say" required autocomplete="off">
            <input type="text" name="who" placeholder="Who to say it?" class="who" required autocomplete="off">
            <input type="submit" name="submit" class="submit" style="font-weight:bold;">
        </form>
        <?php
        }
        
        if(isset($_POST['submit'])){
            $email = $_POST['email'];
            $say = $_POST['say'];
            $who = $_POST['who'];
            
            
            $to = "oli@oliverleigh.co.uk";
            $too = "j.williams2907@gmail.com";
            $subject = "New Audio Request";
            $txt = "New audio request for '" . $who . "' to say '" . $say . "'.\n\n\r\rThis message was sent from: '" . $email . "'";
            $headers = "From: " . $email . "\r\n";
            
            mail($to,$subject,$txt,$headers);
            mail($too,$subject,$txt,$headers);
            ?><br><div class="content">Thank you for your audio request. It will be proccessed and probably ignored.</div> <?php ;
        }
        
        ?>
        <!-- <a href="http://oliverleigh.co.uk" target="_blank" style="text-decoration:none;color:#fff;"><div class="footer">Application made by: <span style="color:#0000ff;"><b><u>Oliver Leigh</u></b></span> and Jordan Williams</div></a> -->
    </body>
</doctype>
