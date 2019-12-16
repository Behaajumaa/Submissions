function remainder(){
    var x = document.getElementById('first_number').value;
    var y = document.getElementById('second_number').value;
    console.log(x, y)
    var remain =x % y;
  //  console.log( 42 %  10); //  2
  alert ("The remainder of "+x+"/"+y+"="+remain);
 
}
