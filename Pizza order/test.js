function price(){
    let size = document.querySelector('input[name="size"]:checked').value;
    var price = 0;
    if(size === "small"){
        price += 120;
    };
    if(size === "medium"){
        price += 240;
    };
    if(size === "large"){
        price += 360;
    };
    
    let cheese = document.querySelector('input[name="addon"]:checked').value;
    let finalPrice = 0;
    if(cheese === "cheeseBurst"){
        finalPrice = price+80;
    };
    if(cheese === "cheese"){
        finalPrice = price+40;
    }
    document.querySelector('.final').innerHTML = finalPrice;
    
}


