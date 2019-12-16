function geuss(){
    var x = document.getElementById('shoe_size').value;
    var y = document.getElementById('year').value;
    console.log(x, y)
    var s =(((x*2)+5)*50)-y+1766;
  alert ("surprise "+s);
 
}
