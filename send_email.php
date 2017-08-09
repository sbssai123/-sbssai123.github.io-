<?php

if(isset($_POST['send'])) {
  $to = 'sai.s@husky.neu.edu';
  $subject = 'Feedback from my personal website';
  $message .= 'Email: ' . $_POST['email'] . "\r\n\r\n";
  $message .= 'Comments: ' . $_POST['comments'];
}

echo $message;



 ?>
