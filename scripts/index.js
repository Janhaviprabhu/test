//store the products array in localstorage as "products"

document.querySelector("form").addEventListener("submit", addproducts)

var productsArr= JSON.parse(localStorage.getItem("products")) || []

function Products(type,desc,price,image){
    this.type=type;
    this.desc=desc;
    this.price=price;
    this.image=image;
}

function addproducts(){
    event.preventDefault()

    let type=document.getElementById("type").value;

    let desc=document.getElementById("desc").value;

    let price=document.getElementById("price").value;

    let image=document.getElementById("image").value;

    let p=new Products(type,desc,price,image);

    productsArr.push(p)
    console.log(p)
    let data=localStorage.setItem("products",JSON.stringify(productsArr))

}