



var main=document.getElementById('main')
const url='https://masai-vouchers-api.herokuapp.com/api/vouchers'
var showWallet=document.getElementById('wallet')

var myWallet=JSON.parse(localStorage.getItem('wallet'))

var walletAmount=document.createElement('h3')
walletAmount.innertext=myWallet
showWallet.append(walletAmount)


const getData=async(url)=>{
    try{
        var res=await fetch(url);
        var data=await res.json()

        const myData=data[0].vouchers
        append(myData)
    }catch (error){
        console.log(error)
    }
}