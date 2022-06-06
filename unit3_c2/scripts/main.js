


var total=localStorage.getItem("user")||0;
document.getElementById("amount").innerHTML=total;
var sum=0;

function addtouser(){
    var val=document.getElementById("amount").value
    localStorage.setItem("amount",val);
    console.log(val);
    sum=Number(total)+Number(val);
    console.log(sum)
    localStorage.setItem("amount",sum);
    window.location.reload();
}