<!-- 
Instructions: 

Your task is to remove all duplicate words from a string, leaving only single (first) words entries.
 -->

 <?php

function removeDuplicateWords($s) {
    $arr = explode(" ", $s);
    return implode(" ", array_unique($arr));
  }
?>