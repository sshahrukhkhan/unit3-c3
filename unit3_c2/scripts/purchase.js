

var wallet_balance=localStorage.getItem("amount")||0;
document.getElementById("wallet").innerText=total;

var checkVouch=JSON.parse(localStorage.getItem("voucher"));
var box=document.createElement("div");

var head=document.createElement("h3")
head.innerText=checkVouch.head;

var img=document.createElement("img")
img.src=checkVouch.poster;
box.append(head,img);

document.getElementById("voucher").append(box);

var sum=0;
function end(){
    var count=document.getElementById("voucher_list").value

    if(wallet_balance<voucher_list){
        alert("Sorry! insufficient balance")
    }
    else{
        sum=Number(wallet_balance)-Number(voucher_list)
        localStorage.setItem("amount",voucher_list)
        alert("Hurray! purchase successful")
    }
    window.location.reload()
}