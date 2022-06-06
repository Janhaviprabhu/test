function submit(){
    
    var array=[];

function Data(name,email,adress,amount){
    this.name=name;
    this.email=email;
    this.adress=adress;
    this.wallet=amount;
}

let name=document.getElementById("name").value;

let email=document.getElementById("email").value;

let address=document.getElementById("address").value;

let amount=document.getElementById("amount").value;

let details=new Data(name,email,address,amount);

array.push(details)

document.getElementById("name").value=null;
document.getElementById("email").value = null;
document.getElementById("address").value = null;
document.getElementById("amount").value = null;




localStorage.setItem("user",JSON.stringify(array))


}


