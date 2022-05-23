



var data=JSON.parse(localStorage.getItem("products")) || []


    all_products.innerHTML=null;

data.forEach(function(elem,index){

    var card=document.createElement("div")
    card.setAttribute("id","card")

    let img=document.createElement("img")
    img.src=elem.image
    img.setAttribute("id", "img")

    var type=document.createElement("p")
    type.innerText=elem.type
    type.setAttribute("id","typ")


    var desc=document.createElement("p")
    desc.innerText=elem.desc
    desc.setAttribute("id","des")

    var price=document.createElement("p")
    price.innerText=elem.price
    price.setAttribute("id","price")

    var btn=document.createElement("button")
    btn.innerText="Remove Product";
    btn.addEventListener("click", function(){
        remove(elem,index)
})
    


    card.append(img,type,desc,price,btn)
    document.getElementById("all_products").append(card)


})


function remove(elem,index){
    data.splice(index,1);
    localStorage.setItem("products",JSON.stringify(data))
    window.location.reload();   
}