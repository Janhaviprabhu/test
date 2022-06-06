let url = "https://masai-vouchers-api.herokuapp.com/api/vouchers";

fetch(url)
  .then((res) => {
    res.json().then((res) => {
      for (let i = 0; i < res.length; i++) {
        console.log(res[i]);
        append(res[i].vouchers);
      }
    });
  })
  .catch((error) => {
    console.log(error);
  });

let append = (res) => {
  res.forEach(function (ele) {
    let box = document.createElement("div");
    box.setAttribute("class", "voucher");

    let img = document.createElement("img");
    img.src = ele.image;

    let name = document.createElement("h3");
    name.innerText = ele.name;

    let h2 = document.createElement("h2");
    h2.innerText = ele.price;

    let bun = document.createElement("button");
    bun.innerText = "Buy";
    bun.setAttribute("class", "button");
    bun.addEventListener("click", onclick)

    box.append(img, name, h2, bun);

    document.getElementById("voucher_list").append(box);
  });
};

let balance= document.getElementById("wallet_balance")

let bal=localStorage.getItem("user") 




   balance.innerText=bal



function onclick(){

    function Dataarr(image,name,price){
        this.image= image,
        this.name=name,
        this.wallet=price
    }




    let details = new Dataarr(image,name, price);

}